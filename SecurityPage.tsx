import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, Dimensions, SafeAreaView, ScrollView, Switch } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons ,MaterialCommunityIcons } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window');

const SecurityPage = () => {
  const navigation = useNavigation();
  const [fingerprintEnabled, setFingerprintEnabled] = useState(false);
  const [faceEnabled, setFaceEnabled] = useState(false);
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(true);
  return (
    <SafeAreaView style={styles.container}>
      {/* Background */}
      <Image
        source={require('./assets/Tower.jpg')}
        style={styles.backgroundImage}
        resizeMode="cover"
      />

      {/* Logo */}
      <View style={styles.logoWrapper}>
        <Text style={[styles.logoText, { color: '#F05A28' }]}>F</Text>
        <Text style={[styles.logoText, { color: '#522E91' }]}>INEXUS</Text>
      </View>

      {/* Back Button */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
      </View>

      {/* Title */}
      <Text style={styles.title}>BẢO MẬT</Text>
      {/* Tiêu đề Dịch vụ tiết kiệm */}
      <ScrollView contentContainerStyle={styles.content}>
        {/* Fingerprint */}
        <View style={styles.optionCard}>
          <View style={styles.optionLeft}>
            <View style={[styles.iconWrapper, { backgroundColor: '#E0F7FA' }]}>                
              <MaterialCommunityIcons name="fingerprint" size={28} color="#00796B" />
            </View>
            <Text style={styles.optionLabel}>Xác nhận vân tay</Text>
          </View>
          <Switch
            trackColor={{ true: '#00796B', false: '#ccc' }}
            thumbColor={fingerprintEnabled ? '#fff' : '#fff'}
            onValueChange={() => setFingerprintEnabled(prev => !prev)}
            value={fingerprintEnabled}
          />
        </View>

        {/* Face Recognition */}
        <View style={styles.optionCard}>
          <View style={styles.optionLeft}>
            <View style={[styles.iconWrapper, { backgroundColor: '#FFF3E0' }]}>                
              <MaterialCommunityIcons name="face-recognition" size={28} color="#F57C00" />
            </View>
            <Text style={styles.optionLabel}>Nhận diện khuôn mặt</Text>
          </View>
          <Switch
            trackColor={{ true: '#F57C00', false: '#ccc' }}
            thumbColor={faceEnabled ? '#fff' : '#fff'}
            onValueChange={() => setFaceEnabled(prev => !prev)}
            value={faceEnabled}
          />
        </View>

        {/* Two-Factor */}
        <View style={styles.optionCard}>
          <View style={styles.optionLeft}>
            <View style={[styles.iconWrapper, { backgroundColor: '#E8EAF6' }]}>                
              <MaterialCommunityIcons name="shield-lock-outline" size={28} color="#3949AB" />
            </View>
            <Text style={styles.optionLabel}>Xác thực 2 yếu tố</Text>
          </View>
          <Switch
            trackColor={{ true: '#3949AB', false: '#ccc' }}
            thumbColor={twoFactorEnabled ? '#fff' : '#fff'}
            onValueChange={() => setTwoFactorEnabled(prev => !prev)}
            value={twoFactorEnabled}
          />
        </View>
      </ScrollView>


    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    alignItems: 'center',
  },
  backgroundImage: {
    position: 'absolute',
    width: 450,
    height: 1000,
    opacity: 0.5,
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
    fontSize: 40,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 140,
  },
  optionCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    elevation: 2,
  },
  optionLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconWrapper: {
    width: 44,
    height: 44,
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  optionLabel: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
  },
  content: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    width: '100%',
    marginTop: 150,
  },
  

});

export default SecurityPage;
