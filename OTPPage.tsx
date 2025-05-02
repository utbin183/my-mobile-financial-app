import React, {useEffect, useRef, useState} from 'react';
import {View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Image} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const OTPPage = ({route, navigation}: any) => {
    const { generatedOTP } = route.params;
    const [userOTP, setUserOTP] = useState('');
    const [timeLeft, setTimeLeft] = useState(30);
    const isVerified = useRef(false);
    
    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(prevTime => {
                if (prevTime <= 0) {
                    clearInterval(timer);
                    if(!isVerified.current){
                    Alert.alert('OTP hết hạn', 'Vui lòng đăng nhập lại để nhận mã mới.');
                    }
                    return 0;
                }
                return prevTime - 1;
            });
        }, 1000);

        // Dọn dẹp timer khi component unmount
        return () => clearInterval(timer);
    }, []);

    const handleVerifyOTP = () => {
        if (userOTP === generatedOTP) {
            isVerified.current = true;
            Alert.alert('Thành công', 'Xác thực thành công!');
            navigation.navigate('HomePage');
        }
        else {
            Alert.alert('Thất bại', 'OTP không chính xác');
        }
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
            
            <Text style={styles.title}>Nhập mã OTP</Text>
            <Text style={styles.timer}>Thời gian còn lại: {timeLeft}s</Text>
            
            <TextInput
                style={styles.input}
                placeholder="Nhập mã OTP"
                keyboardType="numeric"
                value={userOTP}
                onChangeText={setUserOTP}
                maxLength={6}
                editable={timeLeft > 0}
            />
            
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                    <Ionicons name="arrow-back" size={24} color="white" />
                </TouchableOpacity>
            </View>
            
            <TouchableOpacity 
                style={[
                    styles.button, 
                    timeLeft <= 0 && styles.disabledButton
                ]} 
                onPress={handleVerifyOTP}
                disabled={timeLeft <= 0}
            >
                <Text style={styles.buttonText}>Xác nhận</Text>
            </TouchableOpacity>
        </View>
    );
};

export default OTPPage;

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
    title: {
        fontSize: 24, 
        fontWeight: 'bold', 
        marginBottom: 20,
    },
    logoText: {
        fontSize: 28,
        fontWeight: 'bold',
    },
    timer: {
        fontSize: 16, 
        color: 'red', 
        marginBottom: 10
    },
    input: {
        borderWidth: 1, 
        borderColor: '#333',
        backgroundColor: '#fff', 
        padding: 10, 
        borderRadius: 20, 
        width: '80%', 
        marginBottom: 20, 
        fontSize: 18,
        textAlign: 'center',
    },
    button: {
        backgroundColor: '#F58700', 
        padding: 12, 
        borderRadius: 20, 
        width: '80%',
        borderColor: '#000',
        borderWidth: 1,
        alignItems: 'center',
    },
    disabledButton: {
        backgroundColor: '#ccc',
        borderColor: '#999',
    },
    buttonText: {
        color: '#fff', 
        textAlign: 'center', 
        fontWeight: 'bold', 
        fontSize: 16
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
});