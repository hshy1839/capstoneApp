import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SurveyScore = ({ score }) => {

    const navigation = useNavigation();
    const goToHome = () => {
        navigation.navigate('Main');
    };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>우울증 검사 결과</Text>
      <Text style={styles.scoreText}>최종 점수: {score}</Text>
      <Text style={styles.message}>
        {score <= 10
          ? '우울증 증상이 거의 없는 것으로 판단됩니다. 하지만 지속적인 우울감이나 다른 어려움이 있을 경우 전문가와 상담하는 것이 좋습니다.'
          : score <= 20
          ? '우울증 증상이 경미한 것으로 판단됩니다. 주의 깊은 관찰과 일상적인 스트레스 관리가 필요합니다.'
          : score <= 30
          ? '우울증 증상이 중간 정도로 판단됩니다. 전문가와 상담하여 추가적인 조치를 취하는 것이 좋습니다.'
          : '우울증 증상이 심각한 것으로 판단됩니다. 즉시 전문가와 상담하는 것이 필요합니다.'}
      </Text>
      <TouchableOpacity style={styles.backButton}  onPress={goToHome}>
        <Text style={styles.backButtonText}>홈으로</Text>
      </TouchableOpacity>
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
  },
  scoreText: {
    fontSize: 24,
    fontFamily: 'SpaceGroteskRegular',
    marginBottom: 20,
  },
  message: {
    fontSize: 18,
    fontFamily: 'SpaceGroteskRegular',
    textAlign: 'center',
    marginBottom: 40,
  },
  backButton: {
    backgroundColor: '#0095f6',
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 5,
  },
  backButtonText: {
    color: 'white',
    fontFamily: 'SpaceGroteskBold',
  },
});

export default SurveyScore;
