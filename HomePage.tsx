import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
  Linking,
} from 'react-native';
import {
  Ionicons,
  MaterialCommunityIcons,
  FontAwesome5,
  Entypo
} from '@expo/vector-icons';

const HomePage = ({ navigation }: any) => {
  const [isVisible, setIsVisible] = useState(false);
  const [balance, setBalance] = useState(1000000);
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <View style={styles.container}>
       
      {/* Background */}
      <Image
        source={require('./assets/Tower.jpg')}
        style={styles.backgroundImage}
        resizeMode="cover"
      />
      <View style={styles.logoWrapper}>
                  <Text style={[styles.logoText, { color: '#F05A28' }]}>F</Text>
                  <Text style={[styles.logoText, { color: '#522E91' }]}>INEXUS</Text>
       </View>
      
      
       <View style={styles.userContainer}>
  <Image source={require('./assets/avatar.png')} style={styles.avatar} />
  <View style={styles.userInfo}>
    <Text style={styles.greeting}>Hi Duy Bảo 👋</Text>
    <TouchableOpacity style={styles.userSection} onPress={() => alert('User section pressed')}>
      <View style={styles.rankBox}>
        <Text style={styles.star}>⭐</Text>
        <Text style={styles.rankText}>THĂNG HẠNG</Text>
      </View>
    </TouchableOpacity>
  </View>
</View>



      {/* Balance section */}
      <View style={styles.balanceBox}>
        <Text style={styles.balanceTitle}>TỔNG SỐ DƯ VNĐ</Text>
        <TouchableOpacity onPress={toggleVisibility} style={styles.eyeIcon}>
          <Ionicons 
            name={isVisible ? "eye" : "eye-outline"} 
            size={20} 
            color="gray" 
          />
        </TouchableOpacity>
        <Text style={styles.stars}>{isVisible ? balance.toLocaleString() : '*** ***'}</Text>
        <Text style={styles.currency}>VNĐ</Text>
      </View>

      {/* Action buttons */}
      <View style={styles.actionsGrid}>
        <View style={styles.row}>
          <TouchableOpacity style={styles.actionButton} onPress={() => navigation.navigate('Saving')}>
            <Ionicons name="wallet-outline" size={24} color="#333" />
            <Text style={styles.actionLabel}>Tiết kiệm</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton} onPress={() => navigation.navigate('Financial_Data')}>
            <MaterialCommunityIcons name="file-chart-outline" size={24} color="#333" />
            <Text style={styles.actionLabel}>Dữ liệu tài chính</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}  onPress={() => navigation.navigate('Adding_Money',{
            onAddMoney: (amount: number) => setBalance(balance + amount),
          })}>
            <FontAwesome5 name="money-bill-wave" size={24} color="#333"/>
            <Text style={styles.actionLabel}>Nạp tiền</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity style={styles.actionButton} onPress={() => navigation.navigate('Owing')}>
            <FontAwesome5 name="hand-holding-usd" size={24} color="#333" />
            <Text style={styles.actionLabel}>Vay tiền</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton} onPress={() => navigation.navigate('Expending')}>
            <MaterialCommunityIcons name="cash-multiple" size={24} color="#333" />
            <Text style={styles.actionLabel}>Chi tiêu</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton} onPress={() => navigation.navigate('Investing')}>
            <Ionicons name="bar-chart-outline" size={24} color="#333" />
            <Text style={styles.actionLabel}>Đầu tư</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Bottom navigation bar */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="home" size={22} color="#000" />
          <Text style={styles.navText}>Trang chủ</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Linking')}>
          <Ionicons name="link-outline" size={22} color="#000" />
          <Text style={styles.navText}>Liên kết</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Bonus')}>
          <FontAwesome5 name="gift" size={20} color="#000" />
          <Text style={styles.navText}>Ưu đãi</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Other_card')}>
          <FontAwesome5 name="credit-card" size={20} color="#000" />
          <Text style={styles.navText}>Thẻ khác</Text>
        </TouchableOpacity>
      </View>
  <TouchableOpacity
  style={styles.callButton}
  onPress={() => Linking.openURL('tel:028888888')}>
  <Ionicons name="call" size={24} color="#2e7d32" />
  </TouchableOpacity>

<TouchableOpacity style={styles.chatButton} onPress={() => navigation.navigate('ChatBox')}>
  <Entypo name="chat" size={24} color="#1565c0" />
</TouchableOpacity>

    </View>
  );
};

export default HomePage;

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    position: 'absolute',
    width: width,
    height: height,
    opacity: 0.5,
  },
  logoWrapper: {
    position: 'absolute',
    top: 50,
    left: 20,
    flexDirection: 'row',
    alignItems: 'center',
},
logoText: {
    fontSize: 28,
    fontWeight: 'bold',
},
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 90,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  topIcons: {
    flexDirection: 'row',
  },
  icon: {
    marginRight: 15,
  },
  
  userContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 100,
    marginBottom: 20,
  },
  
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 12,
  },
  
  userInfo: {
    flex: 1,
  },
  
  greeting: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
    marginBottom: 6,
  },
  
  userSection: {
    backgroundColor: '#FFF',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 8,
    alignSelf: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
  },
  
  rankBox: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  
  star: {
    fontSize: 18,
    marginRight: 6,
  },
  
  rankText: {
    fontWeight: 'bold',
    color: '#000',
  },
  
  balanceBox: {
    backgroundColor: '#fff',
    marginHorizontal: 40,
    marginTop: 30,
    borderRadius: 15,
    padding: 15,
    alignItems: 'center',
    position: 'relative',
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 2 },
  },
  balanceTitle: {
    fontSize: 14,
    color: '#555',
    marginBottom: 5,
  },
  stars: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  currency: {
    fontSize: 14,
    color: '#777',
  },
  eyeIcon: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  actionsGrid: {
    marginTop: 25,
    marginHorizontal: 20,
    backgroundColor: 'rgba(255,255,255,0.85)',
    borderRadius: 15,
    padding: 15,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  actionButton: {
    flex: 1,
    alignItems: 'center',
  },
  actionLabel: {
    fontSize: 12,
    marginTop: 6,
    color: '#333',
    textAlign: 'center',
  },
  bottomNav: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    width: '100%',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  navItem: {
    alignItems: 'center',
  },
  navText: {
    fontSize: 11,
    marginTop: 4,
    color: '#000',
  },
  callButton: {
    position: 'absolute',
    bottom: 80,
    left: 20,
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
},

chatButton: {
  position: 'absolute',
  bottom: 80,
  right: 20,
  width: 50,
  height: 50,
  borderRadius: 25,
  backgroundColor: '#fff',
  justifyContent: 'center',
  alignItems: 'center',
  shadowColor: '#000',
  shadowOpacity: 0.1,
  shadowOffset: { width: 0, height: 2 },
  shadowRadius: 4,
  elevation: 3,
},

  
});
