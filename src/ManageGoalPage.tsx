import React, { useState } from 'react';
import {
  Text, View, StyleSheet, Image, TouchableOpacity, Dimensions,
  SafeAreaView, ScrollView, TextInput
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window');

const categories = [
  'Chi tiêu cá nhân',
  'Du lịch',
  'Giáo dục',
  'An cư',
  'Khác'
];

const ManageGoalPage = () => {
  const navigation = useNavigation();
  const [notes, setNotes] = useState<Record<string, string[]>>({
    'Chi tiêu cá nhân': [],
    'Du lịch': [],
    'Giáo dục': [],
    'An cư': [],
    'Khác': [],
  });

  const [expanded, setExpanded] = useState<Record<string, boolean>>({});
  const [newNote, setNewNote] = useState<Record<string, string>>({});

  const handleAddNote = (category: string) => {
    if (newNote[category]?.trim()) {
      setNotes(prev => ({
        ...prev,
        [category]: [...prev[category], newNote[category]],
      }));
      setNewNote(prev => ({ ...prev, [category]: '' }));
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Image source={require('../assets/Tower.jpg')} style={styles.backgroundImage} resizeMode="cover" />

      <View style={styles.logoWrapper}>
        <Text style={[styles.logoText, { color: '#F05A28' }]}>F</Text>
        <Text style={[styles.logoText, { color: '#522E91' }]}>INEXUS</Text>
      </View>

      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
      </View>

      <Text style={styles.title}>Mục tiêu cá nhân</Text>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {categories.map(category => (
          <View key={category} style={styles.card}>
            <TouchableOpacity
              onPress={() =>
                setExpanded(prev => ({ ...prev, [category]: !prev[category] }))
              }
              style={styles.cardHeader}
            >
              <Text style={styles.cardTitle}>{category}</Text>
              <Ionicons
                name={expanded[category] ? 'chevron-up' : 'chevron-down'}
                size={20}
                color="#333"
              />
            </TouchableOpacity>

            {expanded[category] && (
              <View style={styles.noteSection}>
                {notes[category]?.map((note, index) => (
                  <Text key={index} style={styles.noteText}>• {note}</Text>
                ))}

                <View style={styles.inputRow}>
                  <TextInput
                    placeholder="Ghi chú mới..."
                    value={newNote[category] || ''}
                    onChangeText={(text) =>
                      setNewNote(prev => ({ ...prev, [category]: text }))
                    }
                    style={styles.noteInput}
                  />
                  <TouchableOpacity onPress={() => handleAddNote(category)} style={styles.addButton}>
                    <Ionicons name="add" size={24} color="white" />
                  </TouchableOpacity>
                </View>
              </View>
            )}
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
    marginTop: 200,
    fontSize: 28,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginBottom: 20,
    color: '#333',
  },
  scrollContainer: {
    paddingHorizontal: 20,
    paddingBottom: 100,
  },
  card: {
    backgroundColor: '#f2f2f2',
    borderRadius: 12,
    marginBottom: 15,
    padding: 15,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#522E91',
  },
  noteSection: {
    marginTop: 10,
  },
  noteText: {
    fontSize: 15,
    marginVertical: 2,
  },
  inputRow: {
    flexDirection: 'row',
    marginTop: 10,
    alignItems: 'center',
  },
  noteInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 10,
    height: 40,
    backgroundColor: '#fff',
  },
  addButton: {
    backgroundColor: '#F05A28',
    padding: 10,
    marginLeft: 8,
    borderRadius: 8,
  },
});

export default ManageGoalPage;
