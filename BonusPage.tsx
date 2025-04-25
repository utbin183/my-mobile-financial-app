import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, Dimensions, SafeAreaView, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window');

const BonusPage = () => {
  const navigation = useNavigation();
  const BonusMission = [
    {
      id: 1,
      name: 'Nhiệm vụ lấy quà',
      image: require('./assets/present.png'), 
    },
    {
      id: 2,
      name: 'Giới thiệu bạn bè',
      image: require('./assets/share.png'),
    },
    {
      id: 3,
      name: 'Thổ địa ăn uống',
      image: require('./assets/địa_điểm.png'),
    },
  ]
  const BonusList = [
    {
      title: 'Ưu đãi ăn uống',
      data: [
        {
          id: 1,
          name: 'Giảm 20% Gogi',
          image: require('./assets/giam_gia_gogi.jpg'),
        },
        {
          id: 2,
          name: 'Giảm 20% TocoToco',
          image: require('./assets/giam_gia_toco.jpg'),
        },
        {
          id: 3,
          name: 'Giảm 4.000 VNĐ tôm Nugget ở ministop',
          image: require('./assets/giam_gia_ministop.png'), 
        },
      ],
      
    },
    {
      title: 'Giải trí & Xem phim',
      data: [
        { 
          id: 4, 
          title: 'Giảm giá my kingdom', 
          image: require('./assets/giam_gia_my_kingdom.png') 
        },
        { id: 5, 
          title: 'Giảm đến 50% + bắp nước khi mua vé bất kỳ!', 
          image: require('./assets/giam_CGV.jpg') 
        },
        { id: 6, 
          title: 'Lotte Cinema -20%', 
          image: require('./assets/giam_lotte_cinema.png') 
        },
      ],
    },
    {
      title: 'Du lịch - Di chuyển',
      data: [
        { id: 7, title: 'Giảm 50% xe Xanh SM', image: require('./assets/giam_xanhSM.jpg') },
        { id: 8, title: 'Ưu đãi khách sạn', image: require('./assets/ưu_đãi_khách_sạn.png') },
        { id: 9, title: 'Vé máy bay -15%', image: require('./assets/giam_gia_may_bay.jpg') },
      ],
    },
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
      <Text style={styles.title}>Ưu đãi</Text>
      
      {/*Scroll lists */}
      <ScrollView style={{ width: '100%' }} contentContainerStyle={{ padding: 20 }}>
  {/* Bonus Missions - horizontal scroll */}
  <Text style={styles.sectionTitle}>Dịch vụ ưu đãi</Text>
  <ScrollView horizontal showsHorizontalScrollIndicator={false}>
    {BonusMission.map((item) => (
      <View key={item.id} style={styles.missionItem}>
        <Image source={item.image} style={styles.missionImage} />
        <Text style={styles.missionText}>{item.name}</Text>
      </View>
    ))}
  </ScrollView>

  {/* Bonus List - category wise vertical scroll */}
  {BonusList.map((section) => (
    <View key={section.title} style={{ marginTop: 20 }}>
      <Text style={styles.sectionTitle}>{section.title}</Text>
      {section.data.map((item) => (
        <View key={item.id} style={styles.bonusItem}>
          <Image source={item.image} style={styles.bonusImage} />
          <Text style={styles.bonusText}>{'name' in item ? item.name : item.title}</Text>
        </View>
      ))}
    </View>
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
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  
  missionItem: {
    alignItems: 'center',
    marginRight: 15,
  },
  
  missionImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginBottom: 5,
  },
  
  missionText: {
    fontSize: 14,
    textAlign: 'center',
    color: '#000',
  },
  
  bonusItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  
  bonusImage: {
    width: 50,
    height: 50,
    borderRadius: 10,
    marginRight: 10,
  },
  
  bonusText: {
    fontSize: 16,
    color: '#000',
  },
  
});

export default BonusPage;
