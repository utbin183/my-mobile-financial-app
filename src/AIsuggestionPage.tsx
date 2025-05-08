import React, { useState } from 'react';
import { TextInput,Text, View, StyleSheet, Image, TouchableOpacity, Dimensions, SafeAreaView, useWindowDimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import {PieChart} from 'react-native-chart-kit';
const { width, height } = Dimensions.get('window');
const data = [
  {
    name: "Ăn uống",
    population: 0.15,
    color: "red",
    legendFontColor: "black",
    legendFontSize: 15
  },
  {
    name: "Mua sắm",
    population: 0.25,
    color: "yellow",
    legendFontColor: "black",
    legendFontSize: 15
  },
  {
    name: "Đi lại",
    population: 0.15,
    color: "blue",
    legendFontColor: "black",
    legendFontSize: 15
  },
  {
    name: "Khoản vay",
    population: 0.1,
    color: "purple",
    legendFontColor: "black",
    legendFontSize: 15
  },
  {
    name: "Đầu tư",
    population: 0.2,
    color: "green",
    legendFontColor: "black",
    legendFontSize: 15, 
  },
  {
    name: "Các khoản khác",
    population: 0.15,
    color: "orange",
    legendFontColor: "black",
    legendFontSize: 15,
  },
]
const AIsuggestionPage = () => {
  const navigation = useNavigation();
  const {width: screenWidth} =useWindowDimensions();
  return (
    <SafeAreaView style={styles.container}>
      {/* Background */}
      <Image
        source={require('../assets/Tower.jpg')}
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
      <Text style={styles.title}>AI GỢI Ý</Text>
      {/* Từ ngày đến ngày */}
      <View style={styles.dateRange}>
        <View style={styles.dateBox}>
          <Text style={styles.dateLabel}>Từ</Text>
          <Text style={styles.dateText}>01/03/2025</Text>
        </View>
        <View style={styles.dateBox}>
          <Text style={styles.dateLabel}>Đến</Text>
          <Text style={styles.dateText}>14/03/2025</Text>
        </View>
      </View>
        {/* Thanh tìm kiếm */}
        <View style={styles.searchWrapper}>
              <Ionicons name="search-outline" size={20} color="#555" style={styles.searchIcon} />
              <TextInput
                style={styles.searchBar}
                placeholder="Tìm kiếm..."
                placeholderTextColor="#555"
              />
        </View>
      <PieChart 
          data={data}
          width={screenWidth}
          height={200}
          chartConfig={{
            color:(opacity)=>`rgba(255,255,255,${opacity})`
          }}
      accessor={"population"}
      backgroundColor={"transparent"}
      paddingLeft={"5"}
      />
         {/* Ngân sách & Chi tiêu */}
         <View style={styles.budgetContainer}>
        <View style={styles.budgetBox}>
          <Text style={styles.budgetLabel}>Chi tiêu trung bình</Text>
          <Text style={styles.budgetValue}>10.000.000 VND</Text>
        </View>
        <View style={styles.budgetBox}>
          <Text style={styles.budgetLabel}>Chi tiêu đề xuất</Text>
          <Text style={styles.budgetValue}>5.000.000 VND</Text>
        </View>
      </View>

      {/* Mệnh giá */}
      <View style={styles.legendContainer}>
        <View style={styles.legendItem}><View style={[styles.legendColor, { backgroundColor: "#FF9999" }]} /><Text>750.000</Text></View>
        <View style={styles.legendItem}><View style={[styles.legendColor, { backgroundColor: "#CC99FF" }]} /><Text>500.000</Text></View>
        <View style={styles.legendItem}><View style={[styles.legendColor, { backgroundColor: "#FFFF99" }]} /><Text>1.250.000</Text></View>
        <View style={styles.legendItem}><View style={[styles.legendColor, { backgroundColor: "#99FF99" }]} /><Text>1.000.000</Text></View>
        <View style={styles.legendItem}><View style={[styles.legendColor, { backgroundColor: "#FFCC99" }]} /><Text>750.000</Text></View>
        <View style={styles.legendItem}><View style={[styles.legendColor, { backgroundColor: "#99CCFF" }]} /><Text>750.000</Text></View>
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
  dateRange: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    width: '80%',
  },
  dateBox: {
    borderWidth: 1,
    backgroundColor: '#fff',
    borderColor: '#000',
    borderRadius: 10,
    padding: 8,
    width: '48%',
    alignItems: 'center',
  },
  dateLabel: {
    fontWeight: 'bold',
  },
  dateText: {
    marginTop: 5,
  },
  searchWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginVertical: 10,
    width: '90%',
    height: 40,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchBar: {
    flex: 1,
    fontSize: 16,
    color: '#000',
  },
  budgetContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '90%',
    marginTop: 10,
  },
  budgetBox: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
    borderColor: 'black',
    borderWidth: 1,
    width: '45%',
    alignItems: 'center',
  },
  budgetLabel: {
    fontWeight: 'bold',
  },
  budgetValue: {
    marginTop: 5,
  },
  legendContainer: {
    marginTop: 10,
    width: '90%',
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 5,
  },
  legendColor: {
    width: 20,
    height: 20,
    marginRight: 5,
    borderRadius: 5,
  },

});

export default AIsuggestionPage;
