import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function InvestPage() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
       {/* Back Button */}
       
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
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
      </View>
     

      {/* Title */}
      <Text style={styles.title}>ĐẦU TƯ</Text>
      

     

      {/* Cổ phiếu info */}
      <View style={styles.stockCard}>
      <View style={styles.balanceCard}>
        <Text style={styles.balance}>50.000.000 VND</Text>
        <Text style={styles.profit}>+ 5.000.000 VND</Text>
      </View>
      <View style={styles.divider} />
        <Text style={styles.stockName}>ACB - Ngân hàng Thương mại Cổ phần Á Châu</Text>

        <View style={styles.priceInfo}>
          <Text style={styles.priceMain}>26.000</Text>
          <Text style={styles.priceSub}>+ 500</Text>
          <Text style={styles.pricePercent}>+0.5%</Text>
        </View>

        <View style={styles.limitLine}>
          <Text>Trần: <Text style={styles.limitUp}>27.900</Text></Text>
          <Text>Sàn: <Text style={styles.limitDown}>24.300</Text></Text>
          <Text>TC: <Text style={styles.reference}>26.100</Text></Text>
        </View>
      </View>

      {/* Bảng lệnh mua bán */}
      <View style={styles.orderBook}>
        <View style={styles.orderColumn}>
          <Text style={styles.columnTitle}>Bên mua</Text>
          <Text style={styles.buy}>26.000 - 51.200</Text>
          <Text style={styles.buy}>25.950 - 93.000</Text>
          <Text style={styles.buy}>25.900 - 800.000</Text>
        </View>
        <View style={styles.orderColumn}>
          <Text style={styles.columnTitle}>Bên bán</Text>
          <Text style={styles.sell}>26.050 - 110.000</Text>
          <Text style={styles.sell}>26.100 - 200.000</Text>
          <Text style={styles.sell}>26.150 - 140.000</Text>
        </View>
      </View>

      {/* Info row */}
          <View style={styles.infoContainer}>
              <View style={styles.infoItem}>
                <Text style={styles.infoLabel}>Tổng KL</Text>
                <Text style={styles.infoValue}>10.000.000</Text>
              </View>
              <View style={styles.infoItem}>
                <Text style={styles.infoLabel}>Cao</Text>
                <Text style={styles.infoValue}>26.200 VND</Text>
              </View>
              <View style={styles.infoItem}>
                <Text style={styles.infoLabel}>Thấp</Text>
                <Text style={styles.infoValue}>25.900 VND</Text>
              </View>
          </View>


      {/* Button Mua / Bán */}
      <View style={styles.actionRow}>
        <TouchableOpacity style={styles.buyButton}>
          <Text style={styles.buttonText}>MUA</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.sellButton}>
          <Text style={styles.buttonText}>BÁN</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

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
    marginBottom: 10,
    textAlign: 'center',
  },
  balanceCard: {
    alignItems: 'center',
    marginVertical: 12,
  },
  balance: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1C1C1E',
  },
  profit: {
    color: 'green',
    fontSize: 16,
    marginTop: 4,
  },
  divider: {
    height: 1,
    backgroundColor: '#000',
    marginHorizontal: -17,
  },
  
  stockCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginVertical: 10,
    elevation: 2,
  },
  stockName: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 8,
    textAlign: 'center',
  },
  priceInfo: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
    marginBottom: 8,
  },
  priceMain: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#007E33',
  },
  priceSub: {
    fontSize: 16,
    marginLeft: 4,
    color: '#007E33',
  },
  pricePercent: {
    fontSize: 16,
    marginLeft: 4,
    color: '#007E33',
  },
  limitLine: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 8,
  },
  limitUp: {
    color: '#C90000',
  },
  limitDown: {
    color: '#0055FF',
  },
  reference: {
    color: '#FF9900',
  },
  orderBook: {
    flexDirection: 'row',
    marginTop: 16,
  },
  orderColumn: {
    width: '48%',
    justifyContent: 'space-between',
    left: 25
  },
  columnTitle: {
    fontWeight: 'bold',
    marginBottom: 4,
    left: 30
  },
  buy: {
    color: '#007E33',
    marginVertical: 2,
  },
  sell: {
    color: '#C90000',
    marginVertical: 2,
  },
  infoContainer: {
    width: '90%',
    backgroundColor: '#F5F9FF',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 8,
    marginTop: 24,
  },
  infoItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 4,
  },
  infoLabel: {
    fontWeight: '600',
    color: '#000',
  },
  infoValue: {
    fontWeight: '600',
    color: '#000',
  },
  
  actionRow: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 30, // More space between buttons
  },
  buyButton: {
    backgroundColor: '#007E33',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 10,
    right: 30
  },
  sellButton: {
    backgroundColor: '#C90000',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 10,
    left: 30
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
