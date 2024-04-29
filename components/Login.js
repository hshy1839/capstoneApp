import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // 네비게이션 훅 추가
import { useFonts } from 'expo-font';
import Footer from './Footer';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation(); // 네비게이션 객체 생성

  const handleLogin = () => {
    console.log('username :', username);
    console.log('Password:', password);
    navigation.navigate('Main');
  };

  const handleSignup = () => {
    navigation.navigate('Signup'); // Signup 페이지로 이동
  };

  return (
    <View style={styles.container}>
         <View style={styles.backgroundContainer} />
      <View style={styles.loginContainer}>
        <Text style={styles.title}>Capstone</Text>
        {/* <View style={styles.usernameInputContainer} /> */}
        <TextInput
          style={styles.input}
          placeholder="아이디"
          value={username}
          onChangeText={setUsername}
        />
        {/* <View style={styles.passwordInputContainer} /> */}
        <TextInput
          style={styles.input}
          placeholder="비밀번호"
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
        />
        <View style = {styles.loginBtnContainer}/>
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <View style = {styles.signupBtnContainer}/>
        <TouchableOpacity style={styles.signupButton} onPress={handleSignup}>
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
    backgroundColor: '#dddddd',
  },
  backgroundContainer : {
    backgroundColor : 'black',
    top : 100,
    width : 300,
    height : 400,
    borderRadius : 20,
    right : 24,
    zIndex : -1,
    position: 'absolute',
  },
  loginContainer : {
    marginTop : -100,
    width: 300,
    height: 400,
    backgroundColor: 'white',
    borderRadius: 20,
    borderWidth: 1.5,
    justifyContent: 'center', // 수직 가운데 정렬
    alignItems: 'center', // 수평 가운데 정렬
  },
  title: {
    fontSize: 32,
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
  passwordInputContainer : {
    backgroundColor: 'black',
    width: '80%',
    height: 50,
    zIndex : -2,
    borderRadius: 5,
    borderWidth: 1.5,
    justifyContent: 'center', 
    alignItems: 'center',
    position : 'absolute',
    top : 180,
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
    marginBottom: 20,
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
    marginBottom: 10,
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
    top : 250,
    right : 25,
  },
  signupBtnContainer : {
    backgroundColor: 'black',
    width: '80%',
    height: 50,
    zIndex : -1,
    borderRadius: 5,
    borderWidth: 1.5,
    justifyContent: 'center', 
    alignItems: 'center',
    position : 'absolute',
    top : 310,
    right : 25,
  },
  signupButton: {
    borderColor : 'black',
  borderWidth : 1.5,
    width: '80%',
    height: 50,
    backgroundColor: '#ccc', // 회원가입 버튼 색상 변경
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 18,
    fontFamily : 'SpaceGroteskBold',
    color: 'white',
  },
});

export default Login;
