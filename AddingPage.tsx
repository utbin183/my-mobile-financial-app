import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, Dimensions, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window');

const AddingPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [balance, setBalance] = useState(1000000);
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };
  const addBalance = (amount: number): void => {
    setBalance((prev: number) => prev + amount);
  };
  const navigation = useNavigation();
 
  

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
      <Text style={styles.title}>NẠP TIỀN</Text>
      {/* Balance Section */}
      <View style={styles.balanceBox}>
        <Text style={styles.balanceTitle}>TỔNG SỐ DƯ VNĐ</Text>
        <TouchableOpacity onPress={toggleVisibility} style={styles.eyeIcon}>
          <Ionicons
            name={isVisible ? "eye" : "eye-outline"}
            size={20}
            color="gray"
          />
        </TouchableOpacity>
        <Text style={styles.stars}>
          {isVisible ? balance.toLocaleString() : '*** ***'}
        </Text>
        <Text style={styles.currency}>VNĐ</Text>
      </View>
<View style={styles.grid}>
  <TouchableOpacity style={styles.rectangleButton} onPress={() => addBalance(10000)}>
    <Text style={styles.rectangleText}> +10.000 VNĐ </Text>
  </TouchableOpacity>
  <TouchableOpacity style={styles.rectangleButton} onPress={() => addBalance(20000)}>
    <Text style={styles.rectangleText}> +20.000 VNĐ </Text>
  </TouchableOpacity>
  <TouchableOpacity style={styles.rectangleButton} onPress={() => addBalance(50000)}>
    <Text style={styles.rectangleText}> +50.000 VNĐ </Text>
  </TouchableOpacity>
  <TouchableOpacity style={styles.rectangleButton} onPress={() => addBalance(100000)}>
    <Text style={styles.rectangleText}> +100.000 VNĐ </Text>
  </TouchableOpacity>
  <TouchableOpacity style={styles.rectangleButton} onPress={() => addBalance(200000)}>
    <Text style={styles.rectangleText}> +200.000 VNĐ </Text>
  </TouchableOpacity>
  <TouchableOpacity style={styles.rectangleButton} onPress={() => addBalance(500000)}>
    <Text style={styles.rectangleText}> +500.000 VNĐ </Text>
  </TouchableOpacity>
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
    width: width * 0.85,
    borderRadius: 15,
    padding: 20,
    alignItems: 'center',
    marginTop: 30,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  balanceTitle: {
    fontSize: 14,
    color: '#555',
    marginBottom: 5,
  },
  stars: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  currency: {
    fontSize: 14,
    color: '#777',
  },
  eyeIcon: {
    position: 'absolute',
    top: 15,
    right: 15,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    marginTop: 30,
    alignSelf: 'flex-start',
    marginLeft: 30,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: 10,
  },
  rectangleButton: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: '#f1f1f1',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    padding: 5,
  },
  rectangleText: {
    fontSize: 12,
    textAlign: 'center',
    marginTop: 5,
  },

});

export default AddingPage;
