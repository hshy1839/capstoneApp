import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import Footer from './Footer';
import { EvilIcons } from '@expo/vector-icons';

const Post = ({ title, content, username, onPress, date }) => {
  return (
    <TouchableOpacity activeOpacity={0.8} style={styles.postContainer} onPress={onPress}>
      <View>
      <Text style={styles.postTitle}>{title}</Text>
      <Text style={styles.postContent}>{content}</Text>
      <View style = {styles.poster}>
      <Text style={styles.postUsername}>{username}</Text>
      <Text style={styles.postDate}>{date}</Text>
      </View>
      </View>
      <View style = {styles.borderBottom}/>
    </TouchableOpacity>
  );
};

const Board = ({ navigation }) => {
  const [searchKeyword, setSearchKeyword] = useState('');
  // 게시물 목록
  const posts = [
    { id: 1, title: '우울함을 이겨내는 방법', content: '우울함이 깊어지면 어떻게 해야 할지 모르겠어요. 조언 부탁드립니다.' , username : 'buddy', date : '24-05-19'},
    { id: 2, title: '우울할 때 해야 할 일', content: '우울할 때 어떤 활동을 하면 좋을까요? 제가 할 수 있는 게 있을까요?', username : 'user1', date : '24-05-18' },
    { id: 3, title: '우울증에 대해 알고 싶어요', content: '우울증은 무엇인가요? 어떻게 대처해야 하나요?', username : 'user2', date : '24-05-18' },
    { id: 4, title: '치료 경험 공유해주세요', content: '우울증 치료를 받은 경험 있는 분들, 어떻게 치료를 받았나요? 효과는 있었나요?', username : 'user3', date : '24-05-17' },
    { id: 5, title: '마음이 너무 무겁습니다', content: '마음이 너무 무겁고 우울해요. 이럴 때는 어떻게 해야 할까요?', username : 'user4', date : '24-05-17' },
    { id: 6, title: '마음이 아플 때 읽기 좋은 글?', content: '마음이 아플 때 읽을만한 글이나 시를 추천해주세요. 위로가 될 만한 내용이면 좋겠어요.', username : 'user5', date : '24-05-17' },
    { id: 7, title: '우울증 관련 서적 추천해주세요', content: '우울증에 대해 더 알고 싶어요. 좋은 책이나 자료가 있다면 추천해주세요.', username : 'user6', date : '24-05-16' },
    { id: 8, title: '친구가 우울해하는데 어떻게 도와줄까요?', content: '친구가 우울해하는데, 어떻게 도와줄 수 있을까요? 조언 부탁드려요.', username : 'user7', date : '24-05-16' },
    // 필요한 만큼 게시물을 추가할 수 있습니다.
  ];
  // 게시물 클릭 시 상세 내용으로 이동하는 함수
  const handlePressPost = (postId) => {
    // 상세 내용 화면으로 이동
    navigation.navigate('PostDetail', { postId });
  };

  const goToCreate = () => {
    navigation.navigate('CreatePost');
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
        <TouchableOpacity activeOpacity={0.8} style={styles.searchButton}>
          <FontAwesome5 name="search" size={20} color="white" />
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.scrollViewContent}>
        {posts.map((post) => (
          <Post
            key={post.id}
            title={post.title}
            content={post.content}
            username = {post.username}
            date = {post.date}
            onPress={() => handlePressPost(post.id)}
          />
        ))}
      </ScrollView>
      <View style={styles.btnContainer}>
      <TouchableOpacity style={styles.postCreateBtn} onPress={goToCreate}>
        <Text style={styles.postBtnText}>글쓰기</Text>
      <EvilIcons name="pencil" size={26} color="white" style = {styles.postBtnIcon} />
      </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafad2",
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 5,
    borderBottomWidth : 1,
    borderBottomColor : 'black',
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
    marginBottom : 0,
    maxHeight : '90%',
  },
  postContainer: {
    backgroundColor: 'white',
    padding: 8,
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
    fontFamily : 'SpaceGroteskRegular',
  },
  postUsername : {
    fontSize : 14,
    color : 'black',
    fontFamily : 'SpaceGroteskBold',
  },
  postDate : {
    fontsize : 14,
    color : 'black',
    fontFamily : 'SpaceGroteskBold'
  },
  poster : {
    marginTop : 10,
    paddingHorizontal : 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  postCreateBtn: {
    opacity : 0.9,
    backgroundColor: 'grey',
    width: 100,
    height: 50,
    alignSelf: 'center',
    borderWidth: 1.5,
    borderRadius: 20,
    flexDirection : 'row'
  },
  postBtnText: {
    marginTop : 10,
    marginLeft : 20,
    color: 'white',
    fontFamily: 'SpaceGroteskBold',
    fontSize: 20,
  },
  postBtnIcon : {
    marginTop : 10,
  },
  btnContainer : {
    backgroundColor: 'transparent',
    position : 'absolute',
    top : 620,
    left : 130
  },
});

export default Board;
