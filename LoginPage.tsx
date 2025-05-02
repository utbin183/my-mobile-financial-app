import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Dimensions } from 'react-native';

const LoginPage = ({ navigation }: any) => {
  const [username, setUserName] = useState('admin');
  const [password, setPassword] = useState('123456');

  const handleLogin = () => {
    const generatedOTP = Math.floor(100000 + Math.random() * 900000).toString();
    console.log(`OTP gửi đến thiết bị khác: ${generatedOTP}`);
    navigation.navigate('OTPPage',{generatedOTP});
  };

  return (
    <View style={styles.container}>
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
      <Text style={styles.title}>Đăng nhập</Text>
      <TextInput
        style={styles.input}
        placeholder="Nhập username"
        onChangeText={setUserName}
        value={username}
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Nhập mật khẩu"
        onChangeText={setPassword}
        value={password}
        secureTextEntry
      />

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Đăng nhập</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Register')}>
        <Text style={styles.link}>
          Chưa có tài khoản? <Text style={styles.linkBold}>Đăng ký</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginPage;

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
  },
  backgroundImage: {
    position: 'absolute',
    width: 700,
    height: 1000,
    opacity: 0.5,
  },
   logoWrapper: {
        position: 'absolute',
        top: 50,
        left: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    logoText: {
        fontSize: 28,
        fontWeight: 'bold',
    },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'red',
    marginBottom: 30,
  },
  input: {
    width: '100%',
    height: 48,
    borderColor: '#000',
    borderWidth: 1.5,
    borderRadius: 20,
    marginBottom: 16,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    fontWeight: 'bold'
  },
  button: {
    width: '100%',
    backgroundColor: '#F58700',
    paddingVertical: 12,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#000',
    marginTop: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  buttonText: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',

  },
  link: {
    fontSize: 14,
    color: '#000',
  },
  linkBold: {
    color: 'red',
    fontWeight: 'bold',
  },
});
