import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity, SafeAreaView, Animated } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { useFonts } from 'expo-font';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import fonts from './Font';
import Footer from './Footer';

const Profile = () => {
  const [loaded] = useFonts({
    SpaceGroteskRegular: fonts.spaceGroteskRegular,
    SpaceGroteskBold: fonts.spaceGroteskBold,
  });

  const navigation = useNavigation();
  const onPressMyInfo = async() => {
  
      try {
        // AsyncStorage에서 사용자 정보 삭제
        await AsyncStorage.removeItem('userInfo');
        // 프로필 페이지 다시 불러오기
        fetchUserInfo();
      } catch (error) {
        console.error('사용자 정보 초기화에 실패했습니다:', error);
      };
    navigation.navigate('Myinfo'); // MyInfo 스크린으로 이동
  };

  const [fadeAnim] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(
      fadeAnim,
      {
        toValue: 1,
        duration: 2000, // 2초 동안 애니메이션 진행
        useNativeDriver: true, // 네이티브 드라이버 사용
      }
    ).start();
  }, []);

  if (!loaded) {
    return null;
  }

  const user = {
    username: '정민',
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollViewContent}>
        <View style={styles.userInfo}>
          <Animated.Text style={[styles.username, { opacity: fadeAnim }]}>안녕하세요</Animated.Text>
          <Animated.Text style={[styles.username, { opacity: fadeAnim }]}>{user.username} 님</Animated.Text>
        </View>
        <View style={styles.stats}></View>
        <View style={styles.componentContainer}>
          <View style={styles.component1}>
            <Text style={styles.component1Text}>Status</Text>
            <View style={styles.iconContainer}>
            <View style={styles.smileyIcons}>
              <FontAwesome5 name="smile" size={70} color="green" />
              <Text style={styles.testText}>CES-D 검사</Text>
            </View>
            <View style={styles.smileyIcons}>
              <FontAwesome5 name="smile" size={70} color="green" />
              <Text style={styles.testText}>생활 패턴</Text>
            </View>
            <View style={styles.smileyIcons}>
              <FontAwesome5 name="smile" size={70} color="green" />
              <Text style={styles.testText}>감정 일기</Text>
            </View>
            </View>
          </View>
          <View style={styles.component2} >
            <Text style={styles.component2Text}>내 정보</Text>
            <TouchableOpacity style= {styles.checkMyinfo} onPress={onPressMyInfo}>
              <Text style = {styles.myinfoBtn}>확인하기</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.component3}>
            <Text style={styles.component3Text}>라이프 패턴</Text>
            <TouchableOpacity style={styles.checkLifeCycle}>
              <Text style={styles.lifecycleBtn}>확인하기</Text>
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
    backgroundColor: 'cornflowerblue',
  },
  scrollViewContent: {
    maxHeight: '90%',
  },
  userInfo: {
    flex:1,
    marginTop : 50,
  },
  username: {
    fontSize: 40,
    fontFamily : 'SpaceGroteskBold',
    color: 'white',
    textAlign : 'left',
    marginLeft : 20,
  },
  componentContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginTop: 50,
    backgroundColor: 'white',
    borderTopStartRadius: 30,
    borderWidth: 2.5,
    borderColor: 'black',
    paddingHorizontal: 15,
  },  
  component1: {
    borderRadius: 0,
    width: '90%',
    height : '40%',
    padding: 20,
    marginBottom: 20,
    marginTop : 10,
    left: 15,
    flexDirection: 'column',
  },
  component1Text: {
    fontSize: 40,
    marginLeft: -10,
    fontFamily: 'SpaceGroteskBold',
    color : 'black',
  },
  statusText1: {
    marginTop : 108,
    fontSize: 20,
    fontFamily: 'SpaceGroteskBold',
    color : 'black',
  },
  component2: {
    width: '100%',
    borderTopWidth: 1.5,
    borderColor: 'black',
    paddingHorizontal : 10,
    marginTop: 20,
    flexDirection: 'row',
  },
  component2Text: {
    marginTop : 15,
    fontSize: 30,
    fontFamily: 'SpaceGroteskBold',
  },
  component3: {
    width: '100%',
    padding: 6,
    marginBottom: 40, // 여백 추가
    borderTopWidth: 1.5,
    borderColor: 'black',
    flexDirection: 'row',
    paddingHorizontal : 10,
  },
  text3Container : {
    flexDirection :"column",
  },
  component3Text: {
    marginTop : 15,
    fontSize: 30,
    fontFamily: 'SpaceGroteskBold',
  },
  checkMyinfo : {
    marginTop : 15,
    marginLeft : 'auto',
    backgroundColor : '#0095f6',
    borderWidth : 1.5,
    borderRadius : 5,
  },
  myinfoBtn: {
    backgroundColor: 'transparent', // 배경색 투명으로 설정
    paddingHorizontal: 10, // 텍스트 주변의 가로 여백
    paddingVertical: 8, 
    color : 'white',
    fontFamily : 'SpaceGroteskBold',
    fontSize : 16,
  },
  checkLifeCycle : {
    marginTop : 20,
    marginLeft : 'auto',
    backgroundColor : '#0095f6',
    borderWidth : 1.5,
    borderRadius : 5,
  },
  lifecycleBtn: {
    backgroundColor: 'transparent', // 배경색 투명으로 설정
    paddingHorizontal: 10, // 텍스트 주변의 가로 여백
    paddingVertical: 8, 
    color : 'white',
    fontFamily : 'SpaceGroteskBold',
    fontSize : 16,
  },
  smileyIcons: {
    flexDirection: 'column',
    alignItems: 'center',
    marginRight : '20%',
    marginLeft : '-5%',
    marginTop : 30,
  },
  testText: {
    marginLeft: 5,
    fontSize: 20,
    marginTop : 10,
    fontFamily: 'SpaceGroteskBold',
    color: 'black',
  },
  iconContainer : {
    flexDirection : 'row',
  }
});

export default Profile;
