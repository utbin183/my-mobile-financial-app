import React, { useState, useEffect } from 'react';
import {
  Text, View, StyleSheet, Image, TouchableOpacity,
  Dimensions, SafeAreaView, TextInput, FlatList
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { GoogleGenerativeAI } from "@google/generative-ai";

const { width } = Dimensions.get('window');

// Initialize the Google GenAI client
const genAI = new GoogleGenerativeAI("AIzaSyBVIi8HpXPd1wjaGdUorLMwFexZxh3lXGM");
const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

const ChatBoxPage = () => {
  const navigation = useNavigation();
  const [messages, setMessages] = useState<Message[]>([
    { id: '1', role: 'bot', content: 'Hi! I am Finexus Assistant. What do you want to ask today?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { id: Date.now().toString(), role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      // Create a financial context prompt
      const financialPrompt = `As a financial assistant: ${input}`;
      
      // Call the Gemini API directly
      const result = await model.generateContent(financialPrompt);
      const response = await result.response;
      const botReply = response.text() ;

      const botMessage: Message = { id: Date.now().toString(), role: 'bot', content: botReply };
      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error('Gemini API Error:', error);
      setMessages(prev => [...prev, {
              id: Date.now().toString(),
              role: 'bot' as const,
              content: 'Có lỗi xảy ra. Vui lòng thử lại sau.'
            }]);
    } finally {
      setIsLoading(false);
    }
  };

  // Define the type for a message
  type Message = {
    id: string;
    role: 'user' | 'bot';
    content: string;
  };
  
  const renderItem = ({ item }: { item: Message }) => (
    <View style={[
      styles.messageRow,
      item.role === 'user' ? styles.userRow : styles.botRow
    ]}>
      {item.role === 'bot' && (
        <Text style={[styles.logoTextSymbol, { color: '#F05A28' }]}>F</Text>
      )}
      <View style={[
        styles.messageBubble,
        item.role === 'user' ? styles.userBubble : styles.botBubble
      ]}>
        <Text style={styles.messageText}>{item.content}</Text>
      </View>
      {item.role === 'user' && (
        <Image source={require('../assets/avatar.png')} style={styles.avatar} />
      )}
    </View>
  );
  

  return (
    <SafeAreaView style={styles.container}>
      {/* Background */}
      <Image
        source={require('../assets/Tower.jpg')}
        style={styles.backgroundImage}
        resizeMode="cover"
      />

      {/* Header */}
      <View style={styles.logoWrapper}>
        <Text style={[styles.logoText, { color: '#F05A28' }]}>F</Text>
        <Text style={[styles.logoText, { color: '#522E91' }]}>INEXUS</Text>
      </View>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
      </View>

      <Text style={styles.title}>Chatbox</Text>

      {/* Chat */}
      <FlatList
        data={messages}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        style={styles.chatList}
      />

      {/* Input */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Nhập câu hỏi tài chính..."
          value={input}
          onChangeText={setInput}
        />
        <TouchableOpacity 
          onPress={sendMessage} 
          style={[styles.sendButton, isLoading && styles.disabledButton]}
          disabled={isLoading}
        >
          <Ionicons name="send" size={20} color="#fff" />
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
    justifyContent: 'center',
    
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
    textAlign: 'center',
  },
  chatList: {
    flex: 1,
    margin: 10,
    marginTop: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
    borderTopWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#fff',
  },
  textInput: {
    flex: 1,
    height: 40,
    paddingHorizontal: 10,
    backgroundColor: '#f5f5f5',
    borderRadius: 20,
  },
  sendButton: {
    marginLeft: 10,
    backgroundColor: '#522E91',
    borderRadius: 20,
    padding: 10,
  },
  disabledButton: {
    backgroundColor: '#aaa',
  },
  messageRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginVertical: 6,
    paddingHorizontal: 10,
    width: '100%',
  },
  
  userRow: {
    justifyContent: 'flex-end',
  },
  
  botRow: {
    justifyContent: 'flex-start',
  },
  
  messageBubble: {
    maxWidth: width * 0.65,
    borderRadius: 20,
    padding: 12,
    marginHorizontal: 10,
    backgroundColor: '#f0f0f0',
  },
  
  userBubble: {
    backgroundColor: '#DCF8C6',
    alignSelf: 'flex-end',
  },
  
  botBubble: {
    backgroundColor: '#E0E0E0',
    alignSelf: 'flex-start',
  },
  
  messageText: {
    fontSize: 16,
    color: '#000',
  },
  
  avatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
    marginLeft: 8,
    marginTop: 4,
  },
  
  logoTextSymbol: {
    fontSize: 18,
    fontWeight: 'bold',
    width: 36,
    height: 36,
    borderRadius: 18,
    marginTop: 6,
    marginRight: 8,
    textAlign: 'center',
    textAlignVertical: 'center',
    color: '#F05A28', // màu chữ (cam)
    backgroundColor: '#fff', // nền trắng
    overflow: 'hidden', // tránh chữ tràn ra khỏi khung
  },
  
});

export default ChatBoxPage;
