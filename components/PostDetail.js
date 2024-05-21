import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const PostDetailScreen = ({ route }) => {
    // 이전 화면에서 전달된 게시물 정보를 받아옵니다.
    const { title, content, username, created_at } = route.params;

    return (
        <View style={styles.container}>
            <View style={styles.postContainer}>
            <Text style={styles.title}>{title}</Text>
            <View style={styles.itemContainer}> 
            <Text style={styles.author}>작성자 : {username}</Text>
            <Text> | </Text>
            <Text style={styles.date}>날짜 : {new Date(created_at).toLocaleDateString()}</Text>
            <View style={styles.commentTitleContainer}>
            <MaterialCommunityIcons name="comment-text-outline" size={18} color="orange" style={styles.commentTitleIcon} />
            <Text style={styles.commentTitle}>0</Text>
            </View>
            </View>
            <View style={styles.contentBar}></View>
            <Text style={styles.content}>{content}</Text>
            <View style={styles.contentBar}></View>
            <View style={styles.commentContainer}>
            <MaterialCommunityIcons name="comment-text-outline" size={18} color="black" style={styles.commentIcon} />
            <Text style={styles.commentCount}>댓글 0개</Text>
            </View>
            <View style={styles.contentBar}></View>
            <View style={styles.comment}>
                <Text>댓글 1입니다</Text></View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fafad2',
    },
    postContainer : {
        backgroundColor : 'white',
        borderWidth : 1.5,
        borderColor : 'black',
        padding : 10,
    },
    itemContainer : {
        flexDirection : 'row'
    },
    title: {
        marginTop : 30,
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    content: {
        marginTop : 30,
        fontSize: 20,
        fontFamily : 'SpaceGroteskBold',
        color : 'black',
        height : 120,
    },
    author: {
        fontSize: 16,
        color: 'green',
        marginRight: 5,
        fontFamily: 'SpaceGroteskRegular',
    },
    date: {
        fontSize: 16,
        color: 'grey',
        marginLeft: 5,
        fontFamily: 'SpaceGroteskRegular',
    },
    commentContainer : {
        marginTop : 15,
        flexDirection : 'row',
        marginRight : 10,
    },
    commentCount : {
        color : 'black',
        fontSize : 16,
        marginLeft : 5,
    },
    commentTitleContainer : {
        marginLeft : 'auto',
        flexDirection : 'row',
        marginRight : 15,
    },
    commentTitle : {
        color : 'orange',
        fontSize : 16,
        marginLeft : 5,
    },
    contentBar : {
        marginTop : 30,
        borderBottomWidth : 0.5,
    },
});

export default PostDetailScreen;
