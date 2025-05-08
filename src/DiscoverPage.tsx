import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Dimensions,
  FlatList,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const mockItems = [
  { id: '1', name: 'Chi tiêu', description: 'Đáp ứng nhu cầu sinh sống', image: require('../assets/chi_tieu.jpg') },
  { id: '2', name: 'Du lịch', description: 'View đẹp, giá tốt', image: require('../assets/Du_lich.jpg') },
  { id: '3', name: 'An cư', description: 'Nhà sang, cửa rộng', image: require('../assets/an_cu.jpg') },
];

const DiscoverPage = ({ navigation }: any) => {
  const [storage, setStorage] = useState<string[]>([]);

  const handleAddToStorage = (id: string) => {
    if (!storage.includes(id)) {
      setStorage([...storage, id]);
    }
  };

  const renderItem = ({ item }: any) => (
    <View style={styles.card}>
      <Image source={item.image} style={styles.itemImage} />
      <View style={{ flex: 1 }}>
        <Text style={styles.itemTitle}>{item.name}</Text>
        <Text style={styles.itemDesc}>{item.description}</Text>
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => handleAddToStorage(item.id)}
        >
          <Text style={{ color: 'white' }}>Thêm vào lưu trữ</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/Tower.jpg')}
        style={styles.backgroundImage}
        resizeMode="cover"
      />

      {/* Header: back + logo */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={20} color="white" />
        </TouchableOpacity>
        <View style={styles.logoWrapper}>
          <Text style={[styles.logoText, { color: '#F05A28' }]}>F</Text>
          <Text style={[styles.logoText, { color: '#522E91' }]}>INEXUS</Text>
        </View>
      </View>

      <Text style={styles.title}>Khám phá</Text>

      <FlatList
        data={mockItems}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 150 }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default DiscoverPage;

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingTop: 120,
  },
  backgroundImage: {
    position: 'absolute',
    width: width,
    height: height,
    opacity: 0.15,
  },
  header: {
    position: 'absolute',
    top: 40,
    left: 20,
    right: 20,
    flexDirection: 'row',
    alignItems: 'center',
    zIndex: 10,
  },
  backButton: {
    backgroundColor: 'green',
    borderRadius: 25,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
  },
  logoText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#F05A28',
    marginBottom: 20,
    textAlign: 'center',
  },
  card: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  itemImage: {
    width: 80,
    height: 80,
    marginRight: 12,
    borderRadius: 8,
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  itemDesc: {
    fontSize: 14,
    color: 'gray',
    marginBottom: 8,
  },
  addButton: {
    backgroundColor: '#522E91',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 8,
    alignSelf: 'flex-start',
  },
});
