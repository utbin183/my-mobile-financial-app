import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
  Linking,
  FlatList,
} from 'react-native';
import {
  Ionicons,
  MaterialCommunityIcons,
  FontAwesome5,
  Entypo,
  AntDesign,
} from '@expo/vector-icons';

const { width, height } = Dimensions.get('window');

const ACTIONS = [
  {
    key: 'saving',
    icon: <Ionicons name="wallet-outline" size={28} color="#4A4A4A" />,
    label: 'Tiết kiệm',
    onPress: (navigation:any, setBalance:any) => navigation.navigate('Saving'),
  },
  {
    key: 'finance_data',
    icon: <MaterialCommunityIcons name="file-chart-outline" size={28} color="#4A4A4A" />,
    label: 'Dữ liệu tài chính',
    onPress: (navigation:any) => navigation.navigate('Financial_Data'),
  },
  {
    key: 'add_money',
    icon: <FontAwesome5 name="money-bill-wave" size={28} color="#4A4A4A" />,
    label: 'Nạp tiền',
    onPress: (navigation:any, setBalance:any) => navigation.navigate('Adding_Money', { onAddMoney: (amount:any) => setBalance((prev:any) => prev + amount) }),
  },
  {
    key: 'loan',
    icon: <FontAwesome5 name="hand-holding-usd" size={28} color="#4A4A4A" />,
    label: 'Vay tiền',
    onPress: (navigation:any) => navigation.navigate('Owing'),
  },
  {
    key: 'spending',
    icon: <MaterialCommunityIcons name="cash-multiple" size={28} color="#4A4A4A" />,
    label: 'Chi tiêu',
    onPress: (navigation:any) => navigation.navigate('Expending'),
  },
  {
    key: 'invest',
    icon: <Ionicons name="bar-chart-outline" size={28} color="#4A4A4A" />,
    label: 'Đầu tư',
    onPress: (navigation:any) => navigation.navigate('Investing'),
  },
  {
    key: 'phone',
    icon: <Ionicons name="call" size={26} color="#4A4A4A" />,
    label: 'Hỗ trợ',
    onPress:() => Linking.openURL('tel:028888888')
  },
  {
    key: 'security',
    icon: <Ionicons name="shield-outline" size={28} color="#4A4A4A" />,
    label: 'Bảo mật',
    onPress: (navigation:any) => navigation.navigate('Security'),
  },
  {
    key: 'chatbox',
    icon: <Entypo name="chat" size={26} color="#4A4A4A" />,
    label: 'AI Chatbox',
    onPress: (navigation: any) => navigation.navigate('ChatBox'),
  },
];

const Advertisement = ({ onPress }: { onPress: () => void }) => (
  <TouchableOpacity style={styles.adContainer} activeOpacity={0.9} onPress={onPress}>
    <View style={styles.adContent}>
      <View style={styles.adTextContainer}>
        <Text style={styles.adTitle}>Ưu đãi đặc biệt</Text>
        <Text style={styles.adDescription}>
          Gửi tiết kiệm ngay hôm nay - Nhận lãi suất ưu đãi lên đến 7%
        </Text>
        <View style={styles.adButton}>
          <Text style={styles.adButtonText}>Xem ngay</Text>
          <AntDesign name="arrowright" size={16} color="#FFF" style={{ marginLeft: 5 }} />
        </View>
      </View>
      <View style={styles.adImageContainer}>
        <MaterialCommunityIcons name="piggy-bank" size={55} color="#F05A28" />
      </View>
    </View>
  </TouchableOpacity>
);

const HomePage = ({ navigation }:any) => {
  const [isVisible, setIsVisible] = useState(false);
  const [balance, setBalance] = useState(1000000);
  const toggleVisibility = () => setIsVisible((v) => !v);

  const renderAction = ({ item }:any) => (
    <TouchableOpacity
      style={styles.actionCard}
      activeOpacity={0.8}
      onPress={() => item.onPress(navigation, setBalance)}
    >
      <View style={styles.iconWrapper}>{item.icon}</View>
      <Text style={styles.actionLabel}>{item.label}</Text>
    </TouchableOpacity>
  );

  const handleAdPress = () => {
    navigation.navigate('Bonus'); 
  };

  return (
    <View style={styles.container}>
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
          <TouchableOpacity style={styles.rankBox} onPress={() => alert('User section pressed')}>
            <Text style={styles.star}>⭐</Text>
            <Text style={styles.rankText}>THĂNG HẠNG</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.notifySection} onPress={() => alert('Notify section pressed')}>
          <Ionicons name="notifications-outline" size={24} color="#000" />
        </TouchableOpacity>
      </View>

      <View style={styles.balanceBox}>
        <Text style={styles.balanceTitle}>TỔNG SỐ DƯ VNĐ</Text>
        <TouchableOpacity style={styles.eyeIcon} onPress={toggleVisibility}>
          <Ionicons name={isVisible ? 'eye' : 'eye-off'} size={22} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.balanceAmount}>{isVisible ? balance.toLocaleString() : '••••••'}</Text>
        <Text style={styles.currency}>VNĐ</Text>
      </View>

      <View style={styles.actionsContainer}>
        <FlatList
          data={ACTIONS}
          renderItem={renderAction}
          keyExtractor={(item) => item.key}
          numColumns={3}
          columnWrapperStyle={styles.row}
          contentContainerStyle={styles.actionsList}
        />
        
        {/* Advertisement banner below the actions grid */}
        <Advertisement onPress={handleAdPress} />
      </View>

      <View style={styles.bottomNav}>
        <BottomNavItem icon={<Ionicons name="home" size={24} color="#333" />} label="Trang chủ" />
        <BottomNavItem icon={<Ionicons name="link-outline" size={24} color="#333" />} label="Liên kết" onPress={() => navigation.navigate('Linking')} />
        <BottomNavItem icon={<FontAwesome5 name="gift" size={22} color="#333" />} label="Ưu đãi" onPress={() => navigation.navigate('Bonus')} />
        <BottomNavItem icon={<FontAwesome5 name="credit-card" size={22} color="#333" />} label="Thẻ khác" onPress={() => navigation.navigate('Other_card')} />
      </View>
    </View>
  );
};

const BottomNavItem = ({ icon, label, onPress }:any) => (
  <TouchableOpacity style={styles.navItem} onPress={onPress} activeOpacity={0.7}>
    {icon}
    <Text style={styles.navText}>{label}</Text>
  </TouchableOpacity>
);

export default HomePage;

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#F7F8FA' 
  },
  backgroundImage: {
    position: 'absolute',
    width:width,
    height:height,
    opacity: 0.3,
  },
  logoWrapper: {
    position: 'absolute',
    top: 50,
    left: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoText: {
    fontSize: 30,
    fontWeight: '900',
  },
  userContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 110,
    paddingHorizontal: 20,
  },
  avatar: { width: 60, height: 60, borderRadius: 30, marginRight: 14 },
  userInfo: { flex: 1 },
  greeting: { fontSize: 20, fontWeight: '700', color: '#333' },
  rankBox: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    marginTop: 4,
    backgroundColor: '#FFF',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 20,
    elevation: 2,
  },
  star: { fontSize: 18, marginRight: 6 },
  rankText: { fontWeight: '600', color: '#333' },
  notifySection: {
    marginLeft: 12,
    padding: 8,
    backgroundColor: '#FFF',
    borderRadius: 18,
    elevation: 2,
  },
  balanceBox: {
    backgroundColor: '#5483B3',
    marginHorizontal: 20,
    marginTop: 30,
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    elevation: 4,
  },
  balanceTitle: { fontSize: 15, color: '#fff', fontWeight: '500' },
  eyeIcon: { position: 'absolute', top: 18, right: 18 },
  balanceAmount: { fontSize: 28, fontWeight: 'bold', color: '#fff', marginVertical: 6 },
  currency: { fontSize: 14, color: '#fff' },
  actionsContainer: { flex: 1, marginTop: 20, paddingHorizontal: 10 },
  actionsList: { paddingBottom: 20 },
  row: { justifyContent: 'space-between', marginBottom: 15 },
  actionCard: {
    flex: 1,
    marginHorizontal: 10,
    backgroundColor: '#FFF',
    borderRadius: 16,
    paddingVertical: 20,
    alignItems: 'center',
    elevation: 3,
  },
  iconWrapper: {
    backgroundColor: '#EEF2F5',
    borderRadius: 30,
    padding: 12,
    marginBottom: 8,
  },
  actionLabel: { fontSize: 13, color: '#4A4A4A', fontWeight: '600' },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#FFF',
    paddingVertical: 12,
    borderTopWidth: 1,
    borderTopColor: '#E2E2E2',
  },
  navItem: { alignItems: 'center' },
  navText: { fontSize: 12, marginTop: 4, color: '#333', fontWeight: '500' },
  // Advertisement styles
  adContainer: {
    marginHorizontal: 10,
    marginTop: 5,
    marginBottom: 15,
    borderRadius: 16,
    backgroundColor: '#FFF',
    elevation: 3,
    overflow: 'hidden',
  },
  adContent: {
    flexDirection: 'row',
    padding: 15,
    alignItems: 'center',
  },
  adTextContainer: {
    flex: 3,
  },
  adImageContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  adTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#522E91',
    marginBottom: 5,
  },
  adDescription: {
    fontSize: 12,
    color: '#4A4A4A',
    marginBottom: 10,
  },
  adButton: {
    flexDirection: 'row',
    backgroundColor: '#F05A28',
    alignSelf: 'flex-start',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 20,
    alignItems: 'center',
  },
  adButtonText: {
    color: '#FFF',
    fontSize: 12,
    fontWeight: '600',
  },
});