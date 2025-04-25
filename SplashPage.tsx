import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import type { NavigationProp } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
const SplashPage = ({ navigation }: { navigation: NavigationProp<any> }) => {
    return (
        <View style={styles.container}>
            {/* Background */}
            <Image 
                source={require('./assets/Tower.jpg')} 
                style={{ width: 700, height: 1000, opacity:0.5 }}
                resizeMode="contain"
                
            />

            {/* Logo */}
            <View style={styles.logoWrapper}>
                <Text style={[styles.logoText, { color: '#F05A28' }]}>F</Text>
                <Text style={[styles.logoText, { color: '#522E91' }]}>INEXUS</Text>
            </View>
            
            {/* Nút đăng ký và đăng nhập */}
            <View style={styles.footerContainer}>
                <TouchableOpacity 
                    style={styles.signupButton} 
                    onPress={() => navigation.navigate('Register')}
                >
                    <Text style={styles.buttonText}>Đăng ký</Text>
                </TouchableOpacity>
                
                <TouchableOpacity 
                    style={styles.signinButton} 
                    onPress={() => navigation.navigate('Login')}
                >
                    <Text style={styles.buttonText}>Đăng nhập</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
       
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
    footerContainer: {
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        paddingVertical: 60,
        alignItems: 'center',
        position: 'absolute',
        borderWidth: 1.5,          
        borderColor: '#000000',
        bottom: 0,
        left: 0,
        right: 0,
    },
    signupButton: {
        backgroundColor: '#89CFF0',
        padding: 10,
        width: '80%',
        alignItems: 'center',
        marginBottom: 30,
        borderRadius: 20,
        borderWidth: 1.5,          
        borderColor: '#000000',
        opacity: 0.7
    },
    signinButton: {
        backgroundColor: '#F0F8FF',
        padding: 10,
        width: '80%',
        alignItems: 'center',
        marginBottom: 20,
        borderRadius: 20,
        borderWidth: 1.5,          
        borderColor: '#000000',
        opacity: 0.7
    },
    buttonText: {
        color: '#000000',
        fontSize: 18,
        fontWeight: 'bold'
    },
});

export default SplashPage;
