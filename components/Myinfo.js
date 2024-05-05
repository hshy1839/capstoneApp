import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { useFonts } from 'expo-font';
import fonts from './Font';
import Footer from './Footer';

const ProfileInfo = ({ label, value }) => {
  return (
    <View style={styles.profileInfoContainer}>
      <Text style={styles.profileInfoLabel}>{label}</Text>
      <Text style={styles.profileInfoValue}>{value}</Text>
    </View>
  );
};

const Profile = () => {
  const [loaded] = useFonts({
    SpaceGroteskRegular: fonts.spaceGroteskRegular,
    SpaceGroteskBold: fonts.spaceGroteskBold,
  });

  if (!loaded) {
    return null;
  }

  const user = {
    username: 'jeongmin',
    password : '1111',
    profileImage: require('../assets/profile.jpg'),
    followers: 1000,
    following: 500,
    userposts: 3,
    phoneNumber: '010-8864-1839',
    email: 'example@example.com',
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollViewContent}>
        <View style={styles.userInfo}>
          <Image source={user.profileImage} style={styles.profileImage} />
          <Text style={styles.username}>{user.username}</Text>
        </View>
        <View style={styles.stats}></View>
        <View style={styles.componentContainer}>
          <View style={styles.component1Background} />
          <View style={styles.component1}>
            <Text style={styles.component1Text}>내 정보</Text>
            <ProfileInfo label="이름" value={user.username} />
            <ProfileInfo label="비밀번호" value={user.password} >
                <TouchableOpacity style = {styles.passwordBtn}>
                    <Text style={styles.passwordBtnText}>수정</Text>
                    </TouchableOpacity>
            </ProfileInfo>
            <ProfileInfo label="전화번호" value={user.phoneNumber} />
            <ProfileInfo label="이메일" value={user.email} />
            <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.buttonText}>수정하기</Text>
        </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff99',
  },
  scrollViewContent: {
    maxHeight : '90%',
  },
  userInfo: {
    flexDirection: 'column',
    alignItems: 'center',
    width: 150,
    height: 150,
    marginLeft: '30%',
    marginTop: '5%',
    borderRadius: 20,
    borderColor: 'black',
    borderWidth: 1.5,
    backgroundColor: 'white',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginTop: 12,
  },
  username: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  stats: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 20,
    width: 340,
    left: 10,
    borderBottomWidth: 1,
    borderColor: 'black',
  },
  statsText: {
    color: 'black',
  },
  componentContainer: {
    flexDirection: 'column', // 세로 정렬
    justifyContent: 'space-between', // 요소들 간 간격을 동일하게 배치
    marginTop: 20,
  },
  component1Background: {
    backgroundColor: 'black',
    width: '90%',
    height: 500,
    zIndex: -1,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 5,
    left: 20,
  },
  component1: {
    backgroundColor: 'white',
    borderRadius: 10,
    width: '90%',
    height: 500,
    padding: 20,
    marginBottom: 20,
    borderWidth: 1.5,
    borderColor: 'black',
    left: 15,
  },
  component1layoutIcon: {
    width: '100%',
    height: 100,
    top: -190,
    left: 190,
  },
  component1Text: {
    fontSize: 30,
    width: '100%',
    height: 40,
    top: -15,
    marginLeft: -10,
    fontFamily: 'SpaceGroteskBold',
  },
  statusText: {
    fontSize: 20,
    width: '100%',
    height: 100,
    top: -50,
    left: 50,
    fontFamily: 'SpaceGroteskBold',
  },
  // ProfileInfo 컴포넌트 스타일
  profileInfoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderWidth: 1,
    marginTop : 15,
    borderColor: 'black',
  },
  profileInfoLabel: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  profileInfoValue: {
    fontSize: 20,
    color: 'black',
  },
  loginButton: {
    borderColor : 'black',
    borderWidth : 1.5,
    width: '100%',
    height: 50,
    backgroundColor: '#0095f6',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    fontFamily : 'SpaceGroteskBold',
    marginTop : 100,
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
  buttonText: {
    fontSize: 18,
    fontFamily : 'SpaceGroteskBold',
    color: 'white',
  },
});

export default Profile;
