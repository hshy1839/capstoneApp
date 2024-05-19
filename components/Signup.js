import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // 네비게이션 훅 추가
import { useFonts } from 'expo-font';
import Footer from './Footer';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Signup = ({ }) => {
  const [userData, setUserData] = useState({
    username: '',
    password: '',
    email: '',
    name: '',
    birthdate: '',
    phoneNumber: '',
    is_active: 1
  });


  const navigation = useNavigation(); // 네비게이션 객체 생성

  const handleSignup = async () => {
    try {
      const response = await axios.post('http://192.168.25.58:3000/api/buddy/signup', userData);
  
      if (response.status === 200) {
        const user = response.data;
        if (user) {
          if (user.is_active = 1) {
            navigation.navigate('Main'); // 메인 화면으로 이동
            alert('환영해요 !!'); // 회원가입 성공시 환영 메시지 출력
          } else {
            alert('비활성화된 계정입니다.');
          }
        } else {
          alert('회원가입에 실패했습니다.');
        }
      } else if (response.status === 401) {
        const errorMessage = response.data;
        if (errorMessage === '이미 존재하는 아이디입니다.') {
          alert('이미 존재하는 아이디입니다.');
        } else {
          alert('회원가입에 실패했습니다.');
        }
      } else {
        alert('서버 오류가 발생했습니다.');
      }
    } catch (error) {
      console.error('회원가입 오류:', error);
      alert('회원가입에 실패했습니다.');
    }
  };
  

  return (
    <View style={styles.container}>
         <View style={styles.backgroundContainer} />
      <View style={styles.loginContainer}>
        <Text style={styles.title}>회원가입</Text>
        <TextInput
          style={styles.input}
          placeholder="아이디"
          value={userData.username}
          onChangeText={(username) => setUserData(prevState => ({ ...prevState, username }))}
        />
        <TextInput
          style={styles.input}
          placeholder="이름"
          value={userData.name}
          onChangeText={(name) => setUserData(prevState => ({ ...prevState, name }))}
        />
        <TextInput
          style={styles.input}
          placeholder="비밀번호"
          secureTextEntry={true}
          value={userData.password}
          onChangeText={(password) => setUserData(prevState => ({ ...prevState, password }))}
        />
        <TextInput
          style={styles.input}
          placeholder="핸드폰"
          value={userData.phoneNumber}
          onChangeText={(phoneNumber) => setUserData(prevState => ({ ...prevState, phoneNumber }))}
        />
        <TextInput
          style={styles.input}
          placeholder="이메일"
          value={userData.email}
          onChangeText={(email) => setUserData(prevState => ({ ...prevState, email }))}
        />
        <TextInput
          style={styles.input}
          placeholder="생년 월 일"
          value={userData.birthdate}
          onChangeText={(birthdate) => setUserData(prevState => ({ ...prevState, birthdate }))}
        />
        <View style = {styles.loginBtnContainer}/>
        <TouchableOpacity activeOpacity={0.8} style={styles.loginButton} onPress={handleSignup}>
          <Text style={styles.buttonText}>Join</Text>
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
    backgroundColor: '#dddddd',
  },
  backgroundContainer : {
    backgroundColor : 'black',
    top : 20,
    width : 300,
    height : 570,
    borderRadius : 20,
    right : 24,
    zIndex : -1,
    position: 'absolute',
  },
  loginContainer : {
    marginTop : -80,
    width: 300,
    height: 570,
    backgroundColor: 'white',
    borderRadius: 20,
    borderWidth: 1.5,
    justifyContent: 'center', // 수직 가운데 정렬
    alignItems: 'center', // 수평 가운데 정렬
  },
  title: {
    fontSize: 32,
    marginTop : 0,
    marginBottom: 30,
    fontFamily : 'SpaceGroteskBold',
  },
  usernameInputContainer :{
    backgroundColor: 'black',
    width: '80%',
    height: 50,
    zIndex : -2,
    borderRadius: 5,
    borderWidth: 1.5,
    justifyContent: 'center', 
    alignItems: 'center',
    position : 'absolute',
    top : 110,
    right : 25,
  },
  input: {
    backgroundColor : 'white',
    width: '80%',
    height: 50,
    borderWidth: 1,
    borderColor: 'black', // 검은색 테두리 설정
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 5,
    fontSize: 16,
    fontFamily : 'SpaceGroteskBold',
  },
  loginButton: {
    borderColor : 'black',
    borderWidth : 1.5,
    width: '80%',
    height: 50,
    backgroundColor: '#0095f6',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 30,
    fontFamily : 'SpaceGroteskBold',
  },
  loginBtnContainer : {
    backgroundColor: 'black',
    width: '80%',
    height: 50,
    zIndex : -1,
    borderRadius: 5,
    borderWidth: 1.5,
    justifyContent: 'center', 
    alignItems: 'center',
    position : 'absolute',
    top : 475,
    right : 28,
  },
  buttonText: {
    fontSize: 18,
    fontFamily : 'SpaceGroteskBold',
    color: 'white',
  },
});

export default Signup;
