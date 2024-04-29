import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native'; // useRoute 추가
import { useFonts } from 'expo-font';
import fonts from './Font';
import Footer from './Footer';

const Profile = () => {
  // 가상의 사용자 데이터

  const [loaded] = useFonts({
    SpaceGroteskRegular: fonts.spaceGroteskRegular,
    SpaceGroteskBold: fonts.spaceGroteskBold,
  });
  if (!loaded) {
    return null;
  }

  const user = {
    username: 'jeongmin',
    profileImage: require('../assets/icon.png'),
    followers: 1000,
    following: 500,
    userposts: 3,
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <View style={styles.userInfo}>
        <Image source={user.profileImage} style={styles.profileImage} />
        <Text style={styles.username}>{user.username}</Text>
      </View>
      {/* 팔로워와 팔로잉 수 */}
      <View style={styles.stats}>
        <Text style={styles.statsText}>{user.userposts} posts</Text>
        <Text style={styles.statsText}>{user.followers} followers</Text>
        <Text style={styles.statsText}>{user.following} following</Text>
      </View>
      <Footer />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dddddd',
    fontFamily: 'SpaceGroteskBold',
  },
  contentContainer: {
    flexGrow: 1,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#dddddd',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginRight: 20,
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
    borderBottomWidth: 1,
    borderColor: 'black',
  },
  statsText: {
    color: 'black',
  },
  posts: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 0,
  },
  post: {
    width: '33%',
    aspectRatio: 1,
    marginTop: 15,
    borderWidth: 1,
    borderColor: 'black',
  },
});

export default Profile;
