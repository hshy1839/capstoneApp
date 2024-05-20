import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // 네비게이션 훅 추가
import { useFonts } from 'expo-font';
import Footer from './Footer';
import axios from 'axios';
import Header from './Header';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation(); // 네비게이션 객체 생성

  const handleLogin = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.post(`http://172.16.2.102:3000/api/buddy/login`, {
        username,
       password,
      });
  
      if (response.status === 200) {
        const user = response.data;
        if (user) {
          if (user.is_active === 1) {
            onLogin(true);
            navigation.navigate('Main'); // 메인 화면으로 이동
          } else {
            alert('비활성화된 계정입니다.');
          }
        } else {
          alert('아이디 또는 비밀번호를 확인하세요.');
        }
      } else if (response.status === 401) {
        const errorMessage = response.data;
        if (errorMessage === '아이디 또는 비밀번호가 올바르지 않습니다.') {
          alert('아이디 또는 비밀번호를 확인하세요.');
        } else if (errorMessage === '비활성화된 계정입니다') {
          alert('비활성화된 계정입니다.');
        } else {
          alert('서버 오류가 발생했습니다.');
        }
      } else {
        alert('서버 오류가 발생했습니다.');
      }
    } catch (error) {
      console.error('로그인 오류:', error);
      alert('아이디 또는 비밀번호가 올바르지 않습니다.');
    }
  };

  
  const handleSignup = () => {
    navigation.navigate('Signup');
  };

  return (
    <View style={styles.container}>
      <View style={styles.backgroundContainer} />
      <View style={styles.loginContainer}>
        <Text style={styles.title}>Buddy</Text>
        <TextInput
          style={styles.input}
          placeholder="아이디"
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          style={styles.input}
          placeholder="비밀번호"
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
        />
        <View style={styles.loginBtnContainer} />
        <TouchableOpacity activeOpacity={0.8} style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <View style={styles.signupBtnContainer} />
        <TouchableOpacity activeOpacity={0.8} style={styles.signupButton} onPress={handleSignup}>
          <Text style={styles.buttonText}>Sign up</Text>
        </TouchableOpacity>
      </View>
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fafad2',
  },
  backgroundContainer: {
    backgroundColor: 'black',
    top: 100,
    width: 300,
    height: 400,
    borderRadius: 20,
    right: 24,
    zIndex: -1,
    position: 'absolute',
  },
  loginContainer: {
    
    top: 35,
    width: 300,
    height: 400,
    marginBottom : 100,
    backgroundColor: 'white',
    borderRadius: 20,
    borderWidth: 1.5,
    justifyContent: 'center', // 수직 가운데 정렬
    alignItems: 'center', // 수평 가운데 정렬
  },
  title: {
    fontSize: 32,
    marginBottom: 30,
    fontFamily: 'SpaceGroteskBold',
  },
  usernameInputContainer: {
    backgroundColor: 'black',
    width: '80%',
    height: 50,
    zIndex: -2,
    borderRadius: 5,
    borderWidth: 1.5,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 110,
    right: 25,
  },
  passwordInputContainer: {
    backgroundColor: 'black',
    width: '80%',
    height: 50,
    zIndex: -2,
    borderRadius: 5,
    borderWidth: 1.5,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 180,
    right: 25,
  },
  input: {
    backgroundColor: 'white',
    width: '80%',
    height: 50,
    borderWidth: 1,
    borderColor: 'black', // 검은색 테두리 설정
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
    fontSize: 16,
    fontFamily: 'SpaceGroteskBold',
  },
  loginButton: {
    borderColor: 'black',
    borderWidth: 1.5,
    width: '80%',
    height: 50,
    backgroundColor: '#0095f6',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginBottom: 10,
    fontFamily: 'SpaceGroteskBold',
  },
  loginBtnContainer: {
    backgroundColor: 'black',
    width: '80%',
    height: 50,
    zIndex: -1,
    borderRadius: 5,
    borderWidth: 1.5,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 250,
    right: 25,
  },
  signupBtnContainer: {
    backgroundColor: 'black',
    width: '80%',
    height: 50,
    zIndex: -1,
    borderRadius: 5,
    borderWidth: 1.5,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 310,
    right: 25,
  },
  signupButton: {
    borderColor: 'black',
    borderWidth: 1.5,
    width: '80%',
    height: 50,
    backgroundColor: '#ccc', // 회원가입 버튼 색상 변경
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'SpaceGroteskBold',
    color: 'white',
  },
});

export default Login;
