import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity, TextInput } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { useFonts } from 'expo-font';
import fonts from './Font';
import Footer from './Footer';

const ProfileInfo = ({ label, value,  editable, onChangeText }) => {
  return (
    <View style={styles.profileInfoContainer}>
      <Text style={styles.profileInfoLabel}>{label}</Text>
      <View style={styles.profileInfoContent}>
        {editable ? (
          <TextInput
            style={styles.profileInfoValue}
            value={value}
            onChangeText={onChangeText}
          />
        ) : (
          <Text style={styles.profileInfoValue}>{value}</Text>
        )}
      </View>
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

  const [userInfo, setUserInfo] = useState({
    username: 'jeongmin',
    password : '1111',
    profileImage: require('../assets/profile.jpg'),
    followers: 1000,
    following: 500,
    userposts: 3,
    phoneNumber: '010-8864-1839',
    email: 'example@example.com',
  });

  const [editable, setEditable] = useState(false);

  const toggleEditable = () => {
    setEditable(!editable);
  };

  const saveChanges = () => {
    // 여기에 수정된 정보를 저장하는 로직을 추가할게요.
    setEditable(false); // 수정 가능 상태 비활성화
  };

  const editMyinfo = () => {
    toggleEditable(); // 수정 가능 상태 토글
  };

  
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollViewContent}>
        <View style={styles.componentContainer}>
          <View style={styles.component1Background} />
          <View style={styles.component1}>
            <Text style={styles.component1Text}>내 정보</Text>
            <ProfileInfo
              label="이름"
              value={userInfo.username}
              editable={editable}
              onChangeText={(text) =>
                setUserInfo((prevState) => ({ ...prevState, username: text }))
              }
            />
            <ProfileInfo
              label="비밀번호"
              value={userInfo.password}
              editable={editable}
              onChangeText={(text) =>
                setUserInfo((prevState) => ({ ...prevState, password: text }))
              }
            />
            <ProfileInfo
              label="전화번호"
              value={userInfo.phoneNumber}
              editable={editable}
              onChangeText={(text) =>
                setUserInfo((prevState) => ({ ...prevState, phoneNumber: text }))
              }
            />
            <ProfileInfo
              label="이메일"
              value={userInfo.email}
              editable={editable}
              onChangeText={(text) =>
                setUserInfo((prevState) => ({ ...prevState, email: text }))
              }
            />
            {editable ? (
              <TouchableOpacity style={styles.saveButton} onPress={saveChanges}>
                <Text style={styles.buttonText}>저장하기</Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity style={styles.loginButton} onPress={editMyinfo}>
                <Text style={styles.buttonText}>수정하기</Text>
              </TouchableOpacity>
            )}
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
    marginBottom : 30,
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
    marginBottom: 10,
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
    marginTop: 15,
    borderColor: 'black',
  },
  profileInfoLabel: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  profileInfoContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileInfoValue: {
    fontSize: 20,
    color: 'black',
    marginRight: 10, // 값과 수정 버튼 사이의 간격 조정
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
    marginTop : 80,
    marginBottom : 20,
  },
  saveButton : {
    borderColor : 'black',
    borderWidth : 1.5,
    width: '100%',
    height: 50,
    backgroundColor: '#0095f6',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    fontFamily : 'SpaceGroteskBold',
    marginTop : 60,
    marginBottom : 40,
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
  passwordBtn: {
    backgroundColor: '#ccc',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
  passwordBtnText: {
    color: 'white',
    fontSize: 16,
    fontFamily: 'SpaceGroteskBold',
  },
});

export default Profile;
