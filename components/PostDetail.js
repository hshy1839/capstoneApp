import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const PostDetailScreen = ({ route }) => {
    // 이전 화면에서 전달된 게시물 정보를 받아옵니다.
    const { title, content, username, created_at } = route.params;

    return (
        <View style={styles.container}>
            <View style={styles.postContainer}>
            <Text style={styles.author}>{username}</Text>
            <Text style={styles.date}>{new Date(created_at).toLocaleDateString()}</Text>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.content}>{content}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fafad2',
    },
    postContainer : {
        backgroundColor : 'white',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    content: {
        fontSize: 16,
    },
    author: {
        fontSize: 18,
        color: 'gray',
        marginBottom: 5,
    },
    date: {
        fontSize: 16,
        color: 'gray',
    },
});

export default PostDetailScreen;
