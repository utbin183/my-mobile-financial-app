import React, { useState } from 'react';
import {
  Text, View, StyleSheet, Image, TouchableOpacity, Dimensions,
  SafeAreaView, ScrollView, TextInput, Alert, Clipboard
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window');

const SharingPage = () => {
  const navigation = useNavigation();

  const [sharingType, setSharingType] = useState<'all' | 'goal' | 'progress'>('all');
  const [sharedUsers, setSharedUsers] = useState<string[]>([]);
  const [emailInput, setEmailInput] = useState('');

  const handleAddUser = () => {
    if (!emailInput.includes('@')) {
      Alert.alert('Email không hợp lệ!');
      return;
    }
    if (sharedUsers.length >= 10) {
      Alert.alert('Chỉ chia sẻ tối đa cho 10 người!');
      return;
    }
    if (sharedUsers.includes(emailInput)) {
      Alert.alert('Người này đã được chia sẻ rồi!');
      return;
    }
    setSharedUsers(prev => [...prev, emailInput]);
    setEmailInput('');
  };

  const handleCopyLink = () => {
    const fakeLink = 'https://finexus.app/share/123456';
    Clipboard.setString(fakeLink);
    Alert.alert('Đã sao chép liên kết:', fakeLink);
  };

  const handleShowQR = () => {
    Alert.alert('Hiển thị mã QR', 'Tính năng đang được phát triển...');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Image source={require('../assets/Tower.jpg')} style={styles.backgroundImage} resizeMode="cover" />

      <View style={styles.logoWrapper}>
        <Text style={[styles.logoText, { color: '#F05A28' }]}>F</Text>
        <Text style={[styles.logoText, { color: '#522E91' }]}>INEXUS</Text>
      </View>

      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
      </View>

      <Text style={styles.title}>Chia sẻ kế hoạch</Text>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.sectionTitle}>Chia sẻ nội dung</Text>
        <View style={styles.optionGroup}>
          <TouchableOpacity
            style={[styles.optionBtn, sharingType === 'all' && styles.activeOption]}
            onPress={() => setSharingType('all')}
          >
            <Text style={styles.optionText}>Toàn bộ kế hoạch</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.optionBtn, sharingType === 'goal' && styles.activeOption]}
            onPress={() => setSharingType('goal')}
          >
            <Text style={styles.optionText}>Chỉ mục tiêu</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.optionBtn, sharingType === 'progress' && styles.activeOption]}
            onPress={() => setSharingType('progress')}
          >
            <Text style={styles.optionText}>Chỉ tiến độ</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.sectionTitle}>Chia sẻ với người thân</Text>
        <View style={styles.inputRow}>
          <TextInput
            placeholder="Nhập email người nhận..."
            style={styles.emailInput}
            value={emailInput}
            onChangeText={setEmailInput}
          />
          <TouchableOpacity onPress={handleAddUser} style={styles.addBtn}>
            <Ionicons name="send" size={20} color="#fff" />
          </TouchableOpacity>
        </View>

        <Text style={styles.sharedListLabel}>Đã chia sẻ:</Text>
        {sharedUsers.map((email, index) => (
          <View key={index} style={styles.userItem}>
            <MaterialIcons name="person" size={18} color="#333" />
            <Text style={styles.userText}>{email}</Text>
          </View>
        ))}

        <View style={styles.noteBox}>
          <Text style={styles.noteText}>
            ⚠️ Mỗi kế hoạch chỉ chia sẻ được cho tối đa 10 người. Nội dung được mã hóa & bảo mật, chỉ người được cấp quyền mới xem được.
          </Text>
        </View>

        <View style={styles.sharingMethods}>
          <Text style={styles.sectionTitle}>Phương thức chia sẻ khác</Text>

          <TouchableOpacity style={styles.methodButton} onPress={handleCopyLink}>
            <Ionicons name="link" size={20} color="#fff" />
            <Text style={styles.methodBtnText}>Sao chép liên kết</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.methodButton} onPress={handleShowQR}>
            <Ionicons name="qr-code" size={20} color="#fff" />
            <Text style={styles.methodBtnText}>Hiển thị mã QR</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    backgroundColor: '#fff',
  },
  backgroundImage: {
    position: 'absolute',
    width: 450,
    height: 1000,
    opacity: 0.3,
  },
  logoWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    top: 50,
    left: 20,
  },
  logoText: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  header: {
    position: 'absolute',
    top: 150,
    left: 20,
  },
  backButton: {
    backgroundColor: 'green',
    borderRadius: 25,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 180,
    alignSelf: 'center',
  },
  scrollContainer: {
    paddingHorizontal: 20,
    paddingBottom: 100,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
    color: '#522E91',
  },
  optionGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  optionBtn: {
    flex: 1,
    backgroundColor: '#eee',
    padding: 10,
    marginHorizontal: 5,
    borderRadius: 8,
  },
  activeOption: {
    backgroundColor: '#F05A28',
  },
  optionText: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: '600',
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  emailInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 8,
    backgroundColor: '#fff',
  },
  addBtn: {
    backgroundColor: '#522E91',
    marginLeft: 10,
    padding: 10,
    borderRadius: 8,
  },
  sharedListLabel: {
    marginTop: 15,
    fontWeight: 'bold',
    color: '#333',
  },
  userItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
    gap: 6,
  },
  userText: {
    color: '#444',
  },
  noteBox: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    marginTop: 20,
    borderRadius: 8,
  },
  noteText: {
    fontSize: 12,
    color: '#666',
  },
  sharingMethods: {
    marginTop: 30,
  },
  methodButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#522E91',
    padding: 10,
    borderRadius: 8,
    marginTop: 10,
    justifyContent: 'center',
    gap: 10,
  },
  methodBtnText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default SharingPage;
