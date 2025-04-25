import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, Dimensions, SafeAreaView, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

interface FinancialItem {
  id: number;
  avatar: any;
  name: string;
  price: string;
  percent_change: number;
}

const data: FinancialItem[] = [
  {
    id: 0,
    avatar: require('./assets/avatar.jpg'),
    name: 'VN-Index',
    price: '$1197,13',
    percent_change: -0.82,
  },
  {
    id: 1,
    avatar: require('./assets/avatar.jpg'),
    name: 'DCS',
    price: '$1',
    percent_change: 0,
  },
  {
    id: 2,
    avatar: require('./assets/avatar.jpg'),
    name: 'TOP',
    price: '$1',
    percent_change: 11.11,
  },
  {
    id: 3,
    avatar: require('./assets/avatar.jpg'),
    name: 'PVE',
    price: '$2.4',
    percent_change: -4,
  }
];

const FinancialDataPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [balance, setBalance] = useState(1000000);
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require('./assets/Tower.jpg')}
        style={styles.backgroundImage}
        resizeMode="cover"
      />

      <View style={styles.logoWrapper}>
        <Text style={[styles.logoText, { color: '#F05A28' }]}>F</Text>
        <Text style={[styles.logoText, { color: '#522E91' }]}>INEXUS</Text>
      </View>

      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
      </View>

      <Text style={styles.title}>Dữ liệu tài chính</Text>

      <View style={styles.balanceBox}>
        <Text style={styles.balanceTitle}>TÀI SẢN CỦA BẠN</Text>
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

      <Text style={styles.subTitle}>Chứng khoán hôm nay</Text>

      <View style={styles.financial_data_container}>
        {data.map((item) => (
          <View key={item.id} style={styles.item}>
            <Image source={item.avatar} style={styles.avatar} />
            <View style={styles.info}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.price}>{item.price}</Text>
            </View>
            <Text
              style={[
                styles.percent,
                { color: item.percent_change > 0 ? 'green' : item.percent_change < 0 ? 'red' : 'gray' }
              ]}
            >
              {item.percent_change}%
            </Text>
          </View>
        ))}
      </View>
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
  balanceBox: {
    backgroundColor: '#fff',
    width: '90%',
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
  subTitle: {
    fontSize: 18,
    marginTop: 20,
    marginBottom: 10,
    color: '#000',
  },
  financial_data_container: {
    width: '90%',
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
    paddingVertical: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: '#ccc',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  info: {
    flex: 1,
    marginLeft: 10,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  price: {
    color: '#888',
    fontSize: 14,
  },
  percent: {
    fontSize: 14,
    fontWeight: 'bold',
  }
});

export default FinancialDataPage;
