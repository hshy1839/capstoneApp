import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Post from './Post';

const PostDetailScreen = ({ route }) => {
    // 이전 화면에서 전달된 게시물 id를 받아옵니다.
    const { postId, title, content } = route.params;

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.content}>{content}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: 'white',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    content: {
        fontSize: 16,
    },
});

export default PostDetailScreen;
