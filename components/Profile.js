import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { useFonts } from 'expo-font';
import fonts from './Font';
import Footer from './Footer';

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
    profileImage: require('../assets/profile.jpg'),
    followers: 1000,
    following: 500,
    userposts: 3,
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
          <TouchableOpacity style={styles.component1}>
            <Text style={styles.component1Text}>Status</Text>
            <Text style={styles.statusText}>Fucking Great!</Text>
            <View style={styles.component1layoutIcon}>
              <FontAwesome5 name="smile-wink" size={80} color="green" />
            </View>
          </TouchableOpacity>
          <View style={styles.component2Background} />
          <TouchableOpacity style={styles.component2}>
            <Text style={styles.component2Text}>뭐넣지</Text>
            <Text style={styles.statusText}>내용임</Text>
            <View style={styles.component2layoutIcon}>
              <FontAwesome5 name="smile-wink" size={80} color="green" />
            </View>
          </TouchableOpacity>
          <View style={styles.component3Background} />
          <TouchableOpacity style={styles.component3}>
            <Text style={styles.component3Text}>뭐넣지2</Text>
            <Text style={styles.statusText}>내용임</Text>
            <View style={styles.component3layoutIcon}>
              <FontAwesome5 name="smile-wink" size={80} color="green" />
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dddddd',
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
    height: 135,
    zIndex: -1,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 5,
    left: 20,
  },
  component1: {
    backgroundColor: '#ffffcc',
    borderRadius: 10,
    width: '90%',
    height: 135,
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
    height: 100,
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
  component2Background: {
    backgroundColor: 'black',
    width: '90%',
    height: 135,
    zIndex: -1,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    marginTop: 180,
    left: 20,
  },
  component2: {
    backgroundColor: '#3399ff',
    borderRadius: 10,
    width: '90%',
    height: 135,
    padding: 20,
    marginBottom: 20,
    borderWidth: 1.5,
    borderColor: 'black',
    marginTop: 20,
    left: 15,
  },
  component2Text: {
    fontSize: 30,
    width: '100%',
    height: 100,
    top: -15,
    marginLeft: -10,
    fontFamily: 'SpaceGroteskBold',
  },
  component3Background: {
    backgroundColor: 'black',
    width: '90%',
    height: 135,
    zIndex: -1,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    marginTop: 355,
    left: 20,
  },
  component3: {
    backgroundColor: 'orange',
    borderRadius: 10,
    width: '90%',
    height: 135,
    padding: 20,
    marginBottom: 40, // 여백 추가
    borderWidth: 1.5,
    borderColor: 'black',
    marginTop: 20,
    left: 15,
  },
  component3Text: {
    fontSize: 30,
    width: '100%',
    height: 100,
    top: -15,
    marginLeft: -10,
    fontFamily: 'SpaceGroteskBold',
  },
});

export default Profile;
