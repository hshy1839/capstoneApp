import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput, RefreshControl } from 'react-native';
import { FontAwesome5, EvilIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import Footer from './Footer';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

const DisplayPosts = () => {
  const [posts, setPosts] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState('');
  const [refreshing, setRefreshing] = useState(false);
  const navigation = useNavigation();

  const fetchPosts = async () => {
    try {
      const response = await axios.get('http://3.37.54.62:3000/api/buddy/getboard');
      setPosts(response.data);
    } catch (error) {
      console.error('게시물을 불러오는 데 실패했습니다:', error);
      setPosts([]); // API 호출이 실패하면 posts를 빈 배열로 설정
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handlePostDetail = (post) => {
    const date = new Date(post.created_at);
    const formattedDate = date.toISOString().split('T')[0];
    navigation.navigate('PostDetail', { 
      title: post.title,
      content: post.content,
      username: post.username,
      created_at: formattedDate
    });
  };

  const onRefresh = async () => {
    setRefreshing(true);
    await fetchPosts();
    setRefreshing(false);
  };

  const filterPosts = (searchKeyword) => {
    return posts.filter((post) => {
      return post.title.toLowerCase().includes(searchKeyword.toLowerCase()) || post.content.toLowerCase().includes(searchKeyword.toLowerCase());
    });
  };

  const handleSearch = async () => {
    if (!searchKeyword) {
      await fetchPosts();
      return;
    }

    const filteredPosts = filterPosts(searchKeyword);
    setPosts(filteredPosts);
  };

  const createPost = () => {
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
        <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
          <FontAwesome5 name="search" size={20} color="white" />
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.scrollContainer}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        {Array.isArray(posts) && posts.slice().reverse().map((post, index) => (
          <TouchableOpacity activeOpacity={0.8} key={index} style={styles.postContainer} onPress={() => handlePostDetail(post)}>
            <Text style={styles.title}>{post.title}</Text>
            <Text style={styles.content} numberOfLines={1}>{post.content}</Text>
            <View style={styles.subInfo}>
              <Text style={styles.author}>{post.username}</Text>
              <Text style={styles.seperateBar}> | </Text>
              <Text style={styles.date}>{new Date(post.created_at).toLocaleDateString()}</Text>
              <View style={styles.commentContainer}>
              <MaterialCommunityIcons name="comment-text-outline" size={16} color="orange" style={styles.commentIcon} />
            <Text style={styles.comment}> 0</Text>
            </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <TouchableOpacity style={styles.createBtn} onPress={createPost}>
        <EvilIcons name="pencil" size={20} color="black" style={styles.createBtnIcon} />
        <Text style={styles.createBtnText}>글쓰기</Text>
      </TouchableOpacity>
      <Footer />
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
    borderBottomWidth: 1.2,
    borderColor: 'black',
  },
  searchInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    paddingVertical: 8,
    paddingHorizontal: 10,
    marginRight: 10,
    backgroundColor: 'white',
  },
  searchButton: {
    padding: 10,
    backgroundColor: '#0095f6',
    borderRadius: 5,
  },
  scrollContainer: {
    maxHeight: '100%',
  },
  postContainer: {
    padding: 5,
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: 'black',
    borderTopWidth: 0,
  },
  title: {
    fontSize: 20,
    fontFamily: 'SpaceGroteskBold',
    marginBottom: 10,
  },
  content: {
    fontSize: 16,
    marginBottom: 15,
    fontFamily: 'SpaceGroteskRegular',
  },
  author: {
    fontSize: 16,
    color: 'gray',
    fontFamily: 'SpaceGroteskBold',
  },
  seperateBar : {
    fontSize : 16,
    color : 'gray',
    fontFamily : 'SpaceGroteskRegular',
    marginLeft : 5,
    marginRight : 3,
  },
  date: {
    marginTop : 2,
    fontSize: 15,
    color: 'gray',
    fontFamily: 'SpaceGroteskRegular',
  },
  subInfo: {
    flexDirection: 'row',
  },
  createBtn: {
    marginBottom: -50,
    top: -100,
    opacity: 0.9,
    backgroundColor: 'grey',
    width: '22%',
    height: '6%',
    alignSelf: 'center',
    borderWidth: 1.5,
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  createBtnText: {
    fontSize: 20,
    color: 'white',
    fontFamily: 'SpaceGroteskBold',
  },
  createBtnIcon: {
    color: 'white',
  },
  commentContainer : {
    flexDirection : 'row',
    marginLeft : 'auto',
    marginRight : 15,
  },
  comment : {
    fontSize : 14,
    color : 'orange',
    marginLeft : 5,
    fontFamily : 'SpaceGroteskBold'
  },
});

export default DisplayPosts;
