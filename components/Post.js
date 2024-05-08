import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import Footer from './Footer';

const Post = ({ title, content, onPress }) => {
  return (
    <TouchableOpacity style={styles.postContainer} onPress={onPress}>
      <View>
      <Text style={styles.postTitle}>{title}</Text>
      <Text style={styles.postContent}>{content}</Text>
      </View>
      <View style = {styles.borderBottom}/>
    </TouchableOpacity>
  );
};

const Board = ({ navigation }) => {
  const [searchKeyword, setSearchKeyword] = useState('');
  // 게시물 목록
  const posts = [
    { id: 1, title: '안웃으면 만원드림 ㅋㅋㅋㅋ', content: '형들 이거보셈 ㅋㅋㅋ' },
    { id: 2, title: '더우면 개추', content: '목돌아간 흑우없제?' },
    { id: 3, title: '닝라ㅜ니아루달', content: 'ㅈㄱㄴ' },
    { id: 4, title: '식권삽니다', content: '장당 3000원 쿨거 ㄱㄱ' },
    { id: 5, title: '안웃으면 만원드림 ㅋㅋㅋㅋ', content: '형들 이거보셈 ㅋㅋㅋ' },
    { id: 6, title: '더우면 개추', content: '목돌아간 흑우없제?' },
    { id: 7, title: '닝라ㅜ니아루달', content: 'ㅈㄱㄴ' },
    { id: 8, title: '식권삽니다', content: '장당 3000원 쿨거 ㄱㄱ' },
    // 필요한 만큼 게시물을 추가할 수 있습니다.
  ];

  // 게시물 클릭 시 상세 내용으로 이동하는 함수
  const handlePressPost = (postId) => {
    // 상세 내용 화면으로 이동
    navigation.navigate('PostDetail', { postId });
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchBar}>
        <TextInput
          style={styles.searchInput}
          placeholder="검색어를 입력하세요"
          onChangeText={(text) => setSearchKeyword(text)}
          value={searchKeyword}
        />
        <TouchableOpacity style={styles.searchButton}>
          <FontAwesome5 name="search" size={20} color="white" />
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.scrollViewContent}>
        {posts.map((post) => (
          <Post
            key={post.id}
            title={post.title}
            content={post.content}
            onPress={() => handlePressPost(post.id)}
          />
        ))}
      </ScrollView>
    <Footer/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 5,
  },
  searchInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    paddingVertical: 8,
    paddingHorizontal: 10,
    marginRight: 10,
  },
  searchButton: {
    padding: 10,
    backgroundColor: 'blue',
    borderRadius: 5,
  },
  scrollViewContent: {
    padding: 5,
  },
  postContainer: {
    backgroundColor: 'transparent',
    padding: 10,
    borderColor: 'black',
  },
  borderBottom : {
    marginTop : 10,
    borderBottomWidth : 1.2,
    borderColor : 'black',

  },
  postTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'black',
  },
  postContent: {
    fontSize: 16,
    color: 'black',
  },
});

export default Board;
