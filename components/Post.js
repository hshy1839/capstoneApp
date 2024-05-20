import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import Footer from './Footer';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

const DisplayPosts = () => {
  const [posts, setPosts] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState('');
  const navigation = useNavigation();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('http://172.16.2.102:3000/api/buddy/getboard');
        setPosts(response.data);
      } catch (error) {
        console.error('게시물을 불러오는 데 실패했습니다:', error);
      }
    };

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

  // 게시물 필터링 함수
  const filterPosts = (searchKeyword) => {
    return posts.filter((post) => {
      return post.title.toLowerCase().includes(searchKeyword.toLowerCase()) || post.content.toLowerCase().includes(searchKeyword.toLowerCase());
    });
  };

  // 검색 실행 함수
  const handleSearch = async () => {
    if (!searchKeyword) {
      try {
        const response = await axios.get('http://172.16.2.102:3000/api/buddy/getboard');
        setPosts(response.data);
      } catch (error) {
        console.error('게시물을 불러오는 데 실패했습니다:', error);
      }
      return;
    }
    
    const filteredPosts = filterPosts(searchKeyword);
    setPosts(filteredPosts);
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
      <ScrollView style={styles.scrollContainer}>
        {posts.map((post, index) => (
          <TouchableOpacity activeOpacity={0.8} key={index} style={styles.postContainer} onPress={() => handlePostDetail(post)}>
            <Text style={styles.title}>{post.title}</Text>
            <Text style={styles.content}>{post.content}</Text>
            <View style={styles.subInfo}>
            <Text style={styles.author}>게시자 : {post.username}</Text>
            <Text style={styles.date}> {new Date(post.created_at).toLocaleDateString()}</Text>
            </View>
          </TouchableOpacity>
        ))}
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
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 5,
    borderBottomWidth : 1.2,
    borderColor : 'black',
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
  scrollContainer: {
    maxHeight: '85%',
  },
  postContainer: {
    padding: 5,
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: 'black',
    borderTopWidth : 0,
  },
  title: {
    fontSize: 24,
    fontFamily: 'SpaceGroteskBold',
    marginBottom: 10,
  },
  content: {
    fontSize: 16,
    marginBottom: 10,
    fontFamily : 'SpaceGroteskRegular',
  },
  author: {
    fontSize: 16,
    color: 'gray',
    fontFamily: 'SpaceGroteskBold',
  },
  date: {
    fontSize: 16,
    color: 'gray',
    marginLeft : 'auto',
    fontFamily: 'SpaceGroteskBold',
  },
  subInfo : {
    flexDirection : 'row',
  }
});

export default DisplayPosts;
