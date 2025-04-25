import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, Dimensions, SafeAreaView, Linking, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

const OtherCardPage = () => {
  const navigation = useNavigation();
  const banks = [
    { name: 'HSBC', logo: require('./assets/logo-hsbc.png'), url: 'https://www.hsbc.com' },
    { name: 'Citibank', logo: require('./assets/logo-citibank.png'), url: 'https://www.citibank.com' },
    { name: 'Standard Chartered', logo: require('./assets/logo-standart-chartered.png'), url: 'https://www.sc.com' },
    { name: 'ANZ', logo: require('./assets/logo-anz.png'), url: 'https://www.anz.com' },
    { name: 'DBS Bank', logo: require('./assets/logo-dbs.png'), url: 'https://www.dbs.com' },
    { name: 'OCBC', logo: require('./assets/ocbc-logo.png'), url: 'https://www.ocbc.com' },
    { name: 'Bank of America', logo: require('./assets/bank-of-america-logo.png'), url: 'https://www.bankofamerica.com' },
    { name: 'J.P. Morgan', logo: require('./assets/logo-jp-morgan.png'), url: 'https://www.jpmorganchase.com' },
    { name: 'Barclays', logo: require('./assets/logo-barclays.png'), url: 'https://www.barclays.co.uk' },
    { name: 'UOB', logo: require('./assets/logo-uob.png'), url: 'https://www.uobgroup.com' },
  ];

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
      <Text style={styles.title}>THẺ KHÁC</Text>

      {/* Bank List */}
      <ScrollView contentContainerStyle={styles.bankList}>
        {banks.map((bank, index) => (
          <TouchableOpacity
            key={index}
            style={styles.bankCard}
            onPress={() => Linking.openURL(bank.url)}
          >
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

export default OtherCardPage;
