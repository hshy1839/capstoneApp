import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Animated } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SurveyScore = ({ score }) => {
    const navigation = useNavigation();
    const goToHome = () => {
        navigation.navigate('Main');
    };
    const goToSurvey = () => {
        navigation.navigate('DepressionSurvey');
    };

    // 스코어에 따른 문구
    const [scoreMessage, setScoreMessage] = useState('');
    // 애니메이션을 위한 Opacity 값
    const [fadeAnim] = useState(new Animated.Value(0));
    const [fadeScoreText] = useState(new Animated.Value(0));

    // score 값이 변경될 때마다 애니메이션 및 문구 업데이트
    useEffect(() => {
        // scoreMessage 설정
        setScoreMessage(
            score <= 15
                ? '정상입니다.'
                : score <= 20
                ? '보통수준으로 스트레스 관리가 필요합니다.'
                : score <= 24
                ? '주의가 필요한 수준으로, 2주 이상 지속된다면 전문의 상담이 필요합니다.'
                : '매우 심각한 수준으로 반드시 정신건강의학과 전문의 상담과 도움이 필요합니다.'
        );
        // fadeIn 애니메이션 적용
        Animated.sequence([
            Animated.timing(
                fadeScoreText,
                {
                    toValue: 1,
                    duration: 1000,
                    useNativeDriver: true
                }
            ),
            Animated.timing(
                fadeAnim,
                {
                    toValue: 1,
                    duration: 500,
                    useNativeDriver: true
                }
            )
        ]).start();
    }, [score, fadeAnim, fadeScoreText]);

    return (
        <View style={styles.container}>
            <View style={styles.scoreBackground}></View>
            <View style={styles.scoreContainer}>
                <Text style={styles.title}>귀하의 우울증(CES-D)</Text>
                <Animated.Text style={[styles.scoreText, { opacity: fadeScoreText }]}>검진 결과는 {score} 점,</Animated.Text>
                <Animated.Text style={[styles.message, { opacity: fadeAnim }]}>
                    {scoreMessage}
                </Animated.Text>
                <TouchableOpacity style={styles.backButton} onPress={goToHome}>
                    <Text style={styles.backButtonText}>홈으로</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.backButton}>
                    <Text style={styles.backButtonText}>저장 하기</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'mediumturquoise',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    title: {
        fontSize: 30,
        fontFamily: 'SpaceGroteskBold',
        marginBottom: 20,
        textAlign: 'center',
        marginTop: 50
    },
    scoreText: {
        fontSize: 30,
        fontFamily: 'SpaceGroteskBold',
        marginBottom: 20,
        textAlign: 'center',
        marginTop : 40,
    },
    message: {
        fontSize: 28,
        fontFamily: 'SpaceGroteskBold',
        textAlign: 'center',
        marginBottom: 40,
        marginTop: 30,
    },
    backButton: {
        borderColor: 'black',
        borderWidth: 1.5,
        width: '80%',
        height: 50,
        backgroundColor: '#0095f6',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        marginBottom: 10,
        fontFamily: 'SpaceGroteskBold',
        marginLeft: '10%',
    },
    backButtonText: {
        fontSize: 18,
        fontFamily: 'SpaceGroteskBold',
        color: 'white',
    },
    scoreContainer: {
        backgroundColor: 'white',
        width: '100%',
        height: 500,
        borderWidth: 1.5,
        borderColor: 'black',
        borderRadius: 15,
    },
    scoreBackground: {
        backgroundColor: 'black',
        width: '100%',
        height: 500,
        zIndex: -1,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: 30,
        left: 25,
    }
});

export default SurveyScore;
