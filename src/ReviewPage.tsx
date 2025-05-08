import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
  SafeAreaView,
  TextInput,
  FlatList,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window');

const ReviewScreen = ({ navigation }: any) => {
  const [selectedTab, setSelectedTab] = useState<'new' | 'done'>('new');
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState('');
  const [expandedCommentId, setExpandedCommentId] = useState<string | null>(null);

  const comments = [
    { id: '1', name: 'Nguyễn Văn A', comment: 'Kế hoạch rất tuyệt vời.', rating: 5 },
    { id: '2', name: 'Trần Thị B', comment: 'Nhờ có kế hoạch chi tiêu của bạn, tui đã tiết kiệm được chi phí gia đình.', rating: 4 },
    { id: '3', name: 'Lê Văn C', comment: 'Sẽ tiếp tục áp dụng kế hoạch trong tương lai.', rating: 5 },
    { id: '4', name: 'Phạm Thị D', comment: 'Con đang tiêu chưa hợp lý lắm, nên có khoản Dự trù chi phí', rating: 3 },
  ];
  

  const renderStars = () => {
    return (
      <View style={styles.starsContainer}>
        {[1, 2, 3, 4, 5].map((star) => (
          <TouchableOpacity key={star} onPress={() => setRating(star)}>
            <Ionicons
              name={star <= rating ? 'star' : 'star-outline'}
              size={32}
              color="#FFD700"
              style={{ marginHorizontal: 4 }}
            />
          </TouchableOpacity>
        ))}
      </View>
    );
  };

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
      <Text style={styles.title}>Đánh giá kế hoạch chi tiêu</Text>

      {/* Tabs */}
      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[
            styles.tabButton,
            selectedTab === 'new' && styles.activeTab,
          ]}
          onPress={() => setSelectedTab('new')}
        >
          <Text style={styles.tabText}>Chưa đánh giá</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.tabButton,
            selectedTab === 'done' && styles.activeTab,
          ]}
          onPress={() => setSelectedTab('done')}
        >
          <Text style={styles.tabText}>Đã đánh giá</Text>
        </TouchableOpacity>
      </View>

      {/* Content */}
      {selectedTab === 'new' ? (
        <View style={styles.reviewSection}>
          <Text style={styles.label}>Chọn số sao:</Text>
          {renderStars()}
          <Text style={styles.label}>Nêu suy nghĩ của bạn:</Text>
          <TextInput
            placeholder="Viết đánh giá ở đây..."
            multiline
            numberOfLines={4}
            style={styles.textInput}
            value={feedback}
            onChangeText={setFeedback}
          />
          <TouchableOpacity style={styles.submitButton}>
            <Text style={styles.submitButtonText}>Gửi đánh giá</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <FlatList
          data={comments}
          keyExtractor={(item) => item.id}
          style={styles.commentList}
          renderItem={({ item }) => {
            const isExpanded = expandedCommentId === item.id;
            return (
              <View style={styles.commentCard}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                  <View>
                    <Text style={styles.commentName}>{item.name}</Text>
                    <Text>{item.rating}/5 ★</Text>
                  </View>
                  <TouchableOpacity onPress={() => setExpandedCommentId(isExpanded ? null : item.id)}>
                    <Text style={{ color: '#F05A28', fontWeight: 'bold' }}>
                      {isExpanded ? 'Ẩn chi tiết' : 'Chi tiết'}
                    </Text>
                  </TouchableOpacity>
                </View>
                {isExpanded && <Text style={styles.commentText}>{item.comment}</Text>}
              </View>
            );
          }}
        />
      )}
      
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  backgroundImage: {
    position: 'absolute',
    width: 450,
    height: 1000,
    opacity: 0.3,
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
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 200,
  },
  tabContainer: {
    flexDirection: 'row',
    marginTop: 20,
    marginBottom: 10,
  },
  tabButton: {
    paddingVertical: 8,
    paddingHorizontal: 20,
    backgroundColor: '#ddd',
    marginHorizontal: 10,
    borderRadius: 20,
  },
  activeTab: {
    backgroundColor: '#F05A28',
  },
  tabText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  reviewSection: {
    marginTop: 20,
    width: '90%',
    alignItems: 'center',
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    marginVertical: 10,
  },
  starsContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    width: '100%',
    borderRadius: 10,
    padding: 10,
    textAlignVertical: 'top',
    backgroundColor: '#fff',
  },
  submitButton: {
    backgroundColor: '#522E91',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginTop: 20,
  },
  submitButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  commentList: {
    marginTop: 20,
    width: '90%',
  },
  commentCard: {
    backgroundColor: '#eee',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  commentName: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  commentText: {
    fontSize: 14,
    color: '#333',
  },
});

export default ReviewScreen;
