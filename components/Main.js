import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Header from './Header';
import Footer from './Footer';

const Main = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // 메뉴를 열거나 닫는 함수
    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };
  
  return (
    <SafeAreaView style={styles.container}>
      {/* 포스트 목록 */}
      <ScrollView style={styles.content}>
        {/* 포스트 1 */}
        <View style={styles.post}>
          <Text style={styles.postTitle}>포스트 제목</Text>
          <Text style={styles.postContent}>포스트 내용</Text>
        </View>

        {/* 포스트 2 */}
        <View style={styles.post}>
          <Text style={styles.postTitle}>포스트 제목</Text>
          <Text style={styles.postContent}>포스트 내용</Text>
        </View>

        {/* 포스트 3 */}
        <View style={styles.post}>
          <Text style={styles.postTitle}>포스트 제목</Text>
          <Text style={styles.postContent}>포스트 내용</Text>
        </View>
        <View style={styles.post}>
          <Text style={styles.postTitle}>포스트 제목</Text>
          <Text style={styles.postContent}>포스트 내용</Text>
        </View>
      </ScrollView>
      <Footer/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dddddd', // 배경색을 흰색으로 지정
    fontFamily: 'SpaceGroteskBold',
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  post: {
    marginBottom: 20,
    padding: 10,
    backgroundColor: '#f0f0f0', // 포스트 배경색을 연한 회색으로 지정
    borderRadius: 10,
  },
  postTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  postContent: {
    fontSize: 16,
  },
});

export default Main;
