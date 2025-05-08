import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, Dimensions, SafeAreaView, Linking, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

const LinkingPage = () => {
  const navigation = useNavigation();
  const banks = [
    { name: 'Vietcombank', logo: require('../assets/logo_vietcombank.jpg'), url: 'https://www.vietcombank.com.vn' },
    { name: 'BIDV', logo: require('../assets/logo_bidv.png'), url: 'https://www.bidv.com.vn' },
    { name: 'Techcombank', logo: require('../assets/logo_techcombank.jpg'), url: 'https://www.techcombank.com.vn' },
    { name: 'MB Bank', logo: require('../assets/logo_mb_bank.jpg'), url: 'https://www.mbbank.com.vn' },
    { name: 'VPBank', logo: require('../assets/logo_vp_bank.png'), url: 'https://www.vpbank.com.vn/ca-nhan' },
    { name: 'ACB', logo: require('../assets/logo_ACB.jpg'), url: 'https://acb.com.vn' },
    { name: 'Agribank', logo: require('../assets/logo_Agribank.png'), url: 'https://www.agribank.com.vn' },
    { name: 'HDBank', logo: require('../assets/logo_HDbank.png'), url: 'https://hdbank.com.vn' },
    { name: 'VIB', logo: require('../assets/logo_VIB.png'), url: 'https://www.vib.com.vn' },
    { name: 'OCB', logo: require('../assets/logo_OCB.png'), url: 'https://ocb.com.vn' },
    { name: 'Sacombank', logo: require('../assets/logo_Sacombank.png'), url: 'https://www.sacombank.com.vn' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      {/* Background */}
      <Image source={require('../assets/Tower.jpg')} style={styles.backgroundImage} resizeMode="cover" />

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
      <Text style={styles.title}>LIÊN KẾT</Text>

      {/* Bank List */}
      <ScrollView contentContainerStyle={styles.bankList} showsVerticalScrollIndicator={false}>
        {banks.map((bank, index) => (
          <TouchableOpacity
            key={index}
            style={styles.bankCard}
            onPress={() => Linking.openURL(bank.url)}
            activeOpacity={0.8}>
            <Image source={bank.logo} style={styles.bankLogo} />
            <Text style={styles.bankName}>{bank.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.1)',
  },
  backgroundImage: {
    position: 'absolute',
    width: 450,
    height: 1000,
    opacity: 0.4,
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
    top: 130,
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
    fontSize: 36,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 120,
    marginBottom: 20,
    textAlign: 'center',
  },
  bankList: {
    paddingBottom: 50,
    alignItems: 'center',
  },
  bankCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.9)',
    padding: 15,
    marginVertical: 8,
    borderRadius: 20,
    width: width * 0.85,
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 8,
    elevation: 6,
  },
  bankLogo: {
    width: 50,
    height: 50,
    marginRight: 20,
    resizeMode: 'contain',
  },
  bankName: {
    fontSize: 20,
    fontWeight: '600',
    color: '#222',
  },
});

export default LinkingPage;
