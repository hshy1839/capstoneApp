import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView, TouchableOpacity, Alert } from 'react-native';
import Footer from './Footer';
import { useRoute, useNavigation } from '@react-navigation/native';
import axios from 'axios';

const CreatePost = () => {
  const route = useRoute();
  const navigation = useNavigation();

  const [postData, setPostData] = useState({
    title: '',
    content: ''
  });

  const savePost = async () => {
    try {
      const response = await axios.post('http://172.16.2.102:3000/api/buddy/board', postData);

      if (response.status === 200) {
        const responseData = response.data;
        if (responseData.success) {
          // 게시물이 성공적으로 저장된 경우
          navigation.navigate('Post'); // 메인 화면으로 이동
          Alert.alert('성공', '게시물이 성공적으로 저장되었습니다.');
        } else {
          // 게시물 저장에 실패한 경우
          Alert.alert('실패', '게시물 저장에 실패했습니다.');
        }
      }
    } catch (error) {
      console.error('저장 오류:', error);
      Alert.alert('오류', '게시물 저장 중 오류가 발생했습니다.');
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.boardBackground}></View>
        <Text style={styles.boardTitle}>게시판</Text>
        <View style={styles.dateBorder}></View>
        <TextInput
          style={styles.titleInput}
          placeholder="제목을 입력하세요"
          value={postData.title}
          onChangeText={text => setPostData({ ...postData, title: text })}
        />
        <TextInput
          style={styles.contentInput}
          multiline
          placeholder="내용을 입력하세요"
          value={postData.content}
          onChangeText={text => setPostData({ ...postData, content: text })}
        />
        <TouchableOpacity style={styles.saveBtn} onPress={savePost}>
          <Text style={styles.saveBtnText}>게시하기</Text>
        </TouchableOpacity>
      </ScrollView>
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafad2",
  },
  scrollContainer: {
    maxHeight: '90%',
  },
  dateBorder: {
    marginTop: 20,
    borderBottomWidth: 1.5,
    borderStyle: 'dashed',
    borderColor: 'salmon',
  },
  boardTitle: {
    fontSize: 30,
    fontFamily: "SpaceGroteskBold",
    marginTop: 30,
    textAlign: 'center',
  },
  titleInput: {
    marginTop: 20,
    borderRadius: 5,
    padding: 10,
    width: '95%',
    backgroundColor: "white",
    borderWidth: 1.5,
    borderColor: 'black',
    paddingHorizontal: 20,
    marginLeft: '2%',
    fontFamily: 'SpaceGroteskBold',
    fontSize: 20,
  },
  contentInput: {
    marginTop: 20,
    textAlignVertical: 'top',
    borderRadius: 5,
    padding: 10,
    width: '95%',
    minHeight: 400,
    backgroundColor: "white",
    borderWidth: 1.5,
    borderColor: 'black',
    paddingHorizontal: 20,
    marginLeft: '2%',
    fontFamily: 'SpaceGroteskBold',
    fontSize: 20,
  },
  saveBtn : {
    borderColor: 'black',
    borderWidth: 1.5,
    width: '80%',
    height: 50,
    backgroundColor: '#0095f6',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginTop : 20,
    marginBottom: 50,
    alignSelf : 'center',
    fontFamily: 'SpaceGroteskBold',
  },
  saveBtnText : {
    fontSize: 18,
    fontFamily: 'SpaceGroteskBold',
    color: 'white',
  }
});

export default CreatePost;
