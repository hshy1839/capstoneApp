import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Footer from './Footer';
import axios from 'axios';

const DisplayPosts = () => {
  const [posts, setPosts] = useState([]);

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

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollContainer}>
        {posts.map((post, index) => (
          <View key={index} style={styles.postContainer}>
            <Text style={styles.title}>{post.title}</Text>
            <Text style={styles.content}>{post.content}</Text>
            <Text style={styles.author}>작성자: {post.username}</Text>
            <Text style={styles.date}>날짜: {post.created_at}</Text>
          </View>
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
  scrollContainer: {
    maxHeight: '90%',
  },
  postContainer: {
    marginBottom: 20,
    padding: 20,
    backgroundColor: "white",
    borderWidth: 1.5,
    borderColor: 'black',
    borderRadius: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  content: {
    fontSize: 20,
    marginBottom: 10,
  },
  author: {
    fontSize: 18,
    color: 'gray',
  },
});

export default DisplayPosts;
