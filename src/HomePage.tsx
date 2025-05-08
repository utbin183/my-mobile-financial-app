import React, { useState } from 'react';
import {View,Text,StyleSheet,Image,TouchableOpacity,Dimensions,Linking,FlatList,Button,Modal, Alert} from 'react-native';
import {Ionicons,MaterialCommunityIcons,FontAwesome5,Entypo,AntDesign,} from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
const { width, height } = Dimensions.get('window');

  

const ACTIONS = [
  {
    key: 'add_money',
    icon: <FontAwesome5 name="save" size={28} color="#4A4A4A" />,
    label: 'Lưu trữ',
    onPress: (navigation:any, setBalance:any) => navigation.navigate('Storage', { onAddMoney: (amount:any) => setBalance((prev:any) => prev + amount) }),
  },
  {
    key: 'Share',
    icon: <MaterialCommunityIcons name="share" size={28} color="#4A4A4A" />,
    label: 'Chia sẻ \n (Premium)',
    onPress: (navigation:any) => navigation.navigate('Sharing'),
  },
  {
    key: 'saving',
    icon: <Ionicons name="clipboard-outline" size={28} color="#4A4A4A" />,
    label: 'Quản lý mục tiêu cá nhân',
    onPress: (navigation:any, setBalance:any) => navigation.navigate('Manage_goal'),
  },
  {
    key: 'loan',
    icon: <FontAwesome5 name="hand-holding-usd" size={28} color="#4A4A4A" />,
    label: 'Social media',
    onPress: () => Alert.alert("Thông báo", "Tính năng đang phát triển. Vui lòng quay lại sau!"),
  },
  {
    key: 'security',
    icon: <Ionicons name="shield-outline" size={28} color="#4A4A4A" />,
    label: 'Bảo mật',
    onPress: (navigation:any) => navigation.navigate('Security'),
  },
  {
    key: 'spending',
    icon: <MaterialCommunityIcons name="cash-multiple" size={28} color="#4A4A4A" />,
    label: 'Review đề xuất chi tiêu',
    onPress: (navigation:any) => navigation.navigate('Review'),
  },
  
  {
    key: 'phone',
    icon: <Ionicons name="call" size={26} color="#4A4A4A" />,
    label: 'Hỗ trợ',
    onPress:() => Linking.openURL('tel:028888888')
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
        <Text style={styles.adTitle}>Shopee khuyến mãi</Text>
        <Text style={styles.adDescription}>
          Mua ngay hôm nay - Nhận ưu đãi lên đến 7%
        </Text>
        <View style={styles.adButton}>
          <Text style={styles.adButtonText}>Xem ngay</Text>
         
          <AntDesign name="arrowright" size={16} color="#FFF" style={{ marginLeft: 5 }} />
        </View>
      </View>
      <View style={styles.adImageContainer}>
        <Image
          source={require('../assets/icons8-shopee-100.png')}
          style={styles.icon}
          resizeMode="contain"
        />
      </View>
    </View>
  </TouchableOpacity>
);

const HomePage = ({ navigation }:any) => {
  const [isVisible, setIsVisible] = useState(false);
  const [balance, setBalance] = useState(1000000);
  const toggleVisibility = () => setIsVisible((v) => !v);
  const [showChangeButton, setShowChangeButton] = useState(false);
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [avatarUri, setAvatarUri] = useState<string | null>(null);
  const [showThemeModal, setShowThemeModal] = useState(false);
  const [selectedTheme, setSelectedTheme] = useState(null); // uri hoặc require()
  const themes = [
    require('../assets/Tower.jpg'),
    require('../assets/Tower.jpg'),
    require('../assets/Tower.jpg'),
  ]; // Add your theme image paths here

  const handleAvatarPress = () => {
    setShowChangeButton(!showChangeButton); // toggle nút
  };
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });
  
    if (!result.canceled) {
      setAvatarUri(result.assets[0].uri);
      setShowUploadModal(false); // đóng popup sau khi chọn
    }
  };
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
    Linking.openURL('https://shopee.vn');
  };

  return (
    <View style={styles.container}>
    <Image
        source={selectedTheme ? selectedTheme : require('../assets/Tower.jpg')}
        style={styles.backgroundImage}
        resizeMode="cover"
    />
    <Modal
  visible={showThemeModal}
  transparent
  animationType="fade"
  onRequestClose={() => setShowThemeModal(false)}
>
  <View style={{
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center'
  }}>
    <View style={{
      backgroundColor: 'white',
      padding: 20,
      borderRadius: 10,
      alignItems: 'center'
    }}>
      <Text style={{ marginBottom: 16, fontSize: 18 }}>Chọn giao diện nền</Text>
      <View style={{ flexDirection: 'row', gap: 10 }}>
        {themes.map((theme, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => {
              setSelectedTheme(theme);
              setShowThemeModal(false);
            }}
          >
            <Image
              source={theme}
              style={{ width: 80, height: 80, borderRadius: 10 }}
            />
          </TouchableOpacity>
        ))}
      </View>
      <TouchableOpacity onPress={() => setShowThemeModal(false)} style={[styles.cancelButton, { marginTop: 20 }]}>
        <Text style={styles.customButtonText}>Huỷ</Text>
      </TouchableOpacity>
    </View>
  </View>
</Modal>


      <View style={styles.logoWrapper}>
        <Text style={[styles.logoText, { color: '#F05A28' }]}>F</Text>
        <Text style={[styles.logoText, { color: '#522E91' }]}>INEXUS</Text>
      </View>
      
     
      <View style={styles.userContainer}>
      <View style={{ alignItems: 'center', position: 'relative' }}>
  <TouchableOpacity onPress={handleAvatarPress}>
  <Image 
      source={avatarUri ? { uri: avatarUri } : require('../assets/avatar.png')} 
      style={styles.avatar} 
  />

  </TouchableOpacity>
  {showChangeButton && (
    <View style={{ 
      position: 'absolute', 
      top: 70, 
      zIndex: 10, 
      backgroundColor: '#fff', 
      padding: 8, 
      borderRadius: 8, 
      elevation: 5 
    }}>
     <TouchableOpacity onPress={() => setShowUploadModal(true)} style={styles.customButton}>
        <Text style={styles.customButtonText}>Đổi Avatar</Text>
     </TouchableOpacity>

      <TouchableOpacity onPress={() => setShowThemeModal(true)} style={styles.customButton}>
          <Text style={styles.customButtonText}>Đổi Theme</Text>
      </TouchableOpacity>

    </View>
  )}
</View>
        <View style={styles.userInfo}>
          <Text style={styles.greeting}>Hi Duy Bảo 👋</Text>
          <TouchableOpacity style={styles.rankBox}>
            <Text style={styles.star}>⭐</Text>
            <Text style={styles.rankText}>PREMIUM</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.notifySection} onPress={() => alert('Notify section pressed')}>
          <Ionicons name="notifications-outline" size={24} color="#000" />
        </TouchableOpacity>
      </View>
      <Modal
        visible={showUploadModal}
        transparent
        animationType="fade"
        onRequestClose={() => setShowUploadModal(false)}
      >
        <View style={{
          flex: 1,
          backgroundColor: 'rgba(0,0,0,0.5)',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <View style={{
            width: 300,
            backgroundColor: 'white',
            padding: 20,
            borderRadius: 10,
            alignItems: 'center'
          }}>
            <Text style={{ marginBottom: 16, fontSize: 18 }}>Tải ảnh mới cho Avatar</Text>
            <TouchableOpacity onPress={pickImage} style={styles.customButton}>
              <Text style={styles.customButtonText}>Upload Ảnh</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setShowUploadModal(false)} style={[styles.cancelButton, { marginTop: 10 }]}>
              <Text style={styles.customButtonText}>Huỷ</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>


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
        <BottomNavItem icon={<FontAwesome5 name="compass" size={22} color="#333" />} label="Khám phá" onPress={() => navigation.navigate('Discovering')} />
        <BottomNavItem icon={<Ionicons name="pricetags-outline" size={24} color="#333" />} label="Quản lý thẻ cá nhân" onPress={() => navigation.navigate('Linking')} />
        <BottomNavItem icon={<FontAwesome5 name="rocket" size={22} color="#333" />} label="Nâng cấp" onPress={() => navigation.navigate('Updating')} />
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
  customButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 14,
    paddingHorizontal: 3,
    borderRadius: 8,
    marginBottom: 6,
    alignItems: 'center',
  },
  customButtonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
  cancelButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginBottom: 6,
    alignItems: 'center',
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
  actionLabel: { fontSize: 13, color: '#4A4A4A', fontWeight: '600', textAlign: 'center' },
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
  icon: {
    width: 55,
    height: 55,
    tintColor: '#F05A28', // màu cam Shopee
  },
});