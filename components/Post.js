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
    { id: 1, title: '우울해요', content: '너무 힘들어요' },
    { id: 2, title: '배고파요', content: '배고파서 힘이안나요 어떡하나요?' },
    { id: 3, title: '테스트 제목이에요', content: '테스트 내용이에요' },
    { id: 4, title: '행복이란 뭘까', content: '뭔지 모르겠어 진짜' },
    { id: 5, title: '우울해요', content: '너무 힘들어요' },
    { id: 6, title: '저녁 뭐먹음 다들?', content: '저녁 메뉴 추천 좀 받을게' },
    { id: 7, title: '테스트 제목이에요', content: '테스트 내용이에요' },
    { id: 8, title: '테스트 제목이에요', content: '테스트 내용이에요' },
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
    backgroundColor: 'whitesmoke',
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
    backgroundColor : 'white',
  },
  searchButton: {
    padding: 10,
    backgroundColor: '#0095f6',
    borderRadius: 5,
  },
  scrollViewContent: {
    padding: 5,
  },
  postContainer: {
    backgroundColor: 'white',
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
