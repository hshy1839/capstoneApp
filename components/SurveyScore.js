import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SurveyScore = ({ score }) => {

    const navigation = useNavigation();
    const goToHome = () => {
        navigation.navigate('Main');
    };
    const goToSurvey = () => {
        navigation.navigate('DepressionSurvey');
      };
  return (
    <View style={styles.container}>
        <View style = {styles.scoreBackground}></View>
        <View style = {styles.scoreContainer}>
      <Text style={styles.title}>귀하의 우울증(CES-D)</Text>
      <Text style={styles.scoreText}>검진 결과는 {score} 점</Text>
      <Text style={styles.message}>
        {score <= 15
          ? '정상입니다.'
          : score <= 20
          ? '보통수준으로 스트레스 관리가 필요합니다.'
          : score <= 24
          ? '주의가 필요한 수준으로, 2주 이상 지속된다면 전문의 상담이 필요합니다.'
          : '매우 심각한 수준으로 반드시 정신건강의학과 전문의 상담과 도움이 필요합니다.'}
      </Text>
      <TouchableOpacity style={styles.backButton}  onPress={goToHome}>
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
    backgroundColor: '#ffff44',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 30,
    fontFamily: 'SpaceGroteskBold',
    marginBottom: 20,
    textAlign : 'center',
    marginTop : 50
  },
  scoreText: {
    fontSize: 30,
    fontFamily: 'SpaceGroteskBold',
    marginBottom: 20,
    textAlign : 'center',
  },
  message: {
    fontSize: 30,
    fontFamily: 'SpaceGroteskBold',
    textAlign: 'center',
    marginBottom: 40,
  },
  backButton: {
    borderColor : 'black',
    borderWidth : 1.5,
    width: '80%',
    height: 50,
    backgroundColor: '#0095f6',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginBottom: 10,
    fontFamily : 'SpaceGroteskBold',
    marginLeft : '10%',
  },
  backButtonText: {
    fontSize: 18,
    fontFamily : 'SpaceGroteskBold',
    color: 'white',
  },
  scoreContainer : {
    backgroundColor : 'white',
    width : '100%',
    height : 500,
    borderWidth : 1.5,
    borderColor : 'black',
    borderRadius : 15,
  },
  scoreBackground : {
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
