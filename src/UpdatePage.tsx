import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Dimensions,
  ScrollView,
} from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';

const UpdatePage = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Nâng cấp tài khoản</Text>
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        {/* Free Plan */}
        <View style={styles.planCard}>
          <Text style={styles.planTitle}>Miễn phí</Text>
          <Text style={styles.planDesc}>• Giới hạn lưu trữ 3 tòa nhà</Text>
          <Text style={styles.planDesc}>• Không có hỗ trợ ưu tiên</Text>
          <Text style={styles.planDesc}>• Quảng cáo hiển thị</Text>
          <TouchableOpacity style={[styles.selectButton, { backgroundColor: '#ccc' }]}>
            <Text style={{ color: '#333' }}>Hiện đang sử dụng</Text>
          </TouchableOpacity>
        </View>

        {/* Premium Plan */}
        <View style={[styles.planCard, styles.premiumCard]}>
          <Text style={styles.planTitle}>Premium</Text>
          <Text style={styles.planDesc}>✓ Lưu trữ không giới hạn</Text>
          <Text style={styles.planDesc}>✓ Ưu tiên hỗ trợ 24/7</Text>
          <Text style={styles.planDesc}>✓ Không quảng cáo</Text>
          <TouchableOpacity style={styles.selectButton}>
            <Text style={{ color: 'white' }}>Nâng cấp ngay</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default UpdatePage;

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    paddingTop: 60,
    paddingBottom: 20,
    paddingHorizontal: 20,
    backgroundColor: '#522E91',
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButton: {
    marginRight: 10,
  },
  headerText: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
  },
  content: {
    padding: 20,
    alignItems: 'center',
  },
  planCard: {
    width: width - 40,
    borderRadius: 16,
    padding: 20,
    marginBottom: 20,
    backgroundColor: '#f2f2f2',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
  },
  premiumCard: {
    backgroundColor: '#F05A28',
  },
  planTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#000',
  },
  planDesc: {
    fontSize: 16,
    marginBottom: 6,
    color: '#333',
  },
  selectButton: {
    marginTop: 15,
    backgroundColor: '#522E91',
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
});
