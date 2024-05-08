import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image } from 'react-native';
import { useFonts } from 'expo-font';
import fonts from './Font';
import Footer from './Footer';

const DepressionSurvey = () => {

  const [loaded] = useFonts({
    SpaceGroteskRegular: fonts.spaceGroteskRegular,
    SpaceGroteskBold: fonts.spaceGroteskBold,
  });

  const [page, setPage] = useState(-1); // 페이지 인덱스를 상태로 관리
  const [score, setScore] = useState(0); // 점수를 상태로 관리

  const questionsPerPage = 4; // 한 페이지에 보여질 질문 수

  const questions = [
    {
      id: 1,
      title: '1. 평소에는 아무렇지도 않은 일들이 귀찮게 느껴졌다.',
      options: ['극히 드물다\n(0~1일)', '가끔\n(1~2일)', '자주\n(3~4일)', '거의 대부분\n(5~7일)'],
    },
    {
      id: 2,
      title: '2. 먹고 싶지 않았다, 입맛이 없었다.',
      options: ['극히 드물다\n(0~1일)', '가끔\n(1~2일)', '자주\n(3~4일)', '거의 대부분\n(5~7일)'],
    },
    {
      id: 3,
      title: '3. 가족이나 친구가 도와주더라도 울적한 기분을 떨쳐버릴 수 없었다.',
      options: ['극히 드물다\n(0~1일)', '가끔\n(1~2일)', '자주\n(3~4일)', '거의 대부분\n(5~7일)'],
    },
    {
      id: 4,
      title: '4. 다른 사람들만큼 능력이 있다고 느꼈다.',
      options: ['극히 드물다\n(0~1일)', '가끔\n(1~2일)', '자주\n(3~4일)', '거의 대부분\n(5~7일)'],
    },
    {
      id: 5,
      title: '5. 무슨 일을 하던 정신을 집중하기 힘들었다.',
      options: ['극히 드물다\n(0~1일)', '가끔\n(1~2일)', '자주\n(3~4일)', '거의 대부분\n(5~7일)'],
    },
    {
      id: 6,
      title: '6. 우울했다.',
      options: ['극히 드물다\n(0~1일)', '가끔\n(1~2일)', '자주\n(3~4일)', '거의 대부분\n(5~7일)'],
    },
    {
      id: 7,
      title: '7. 하는 일마다 힘들게 느껴졌다.',
      options: ['극히 드물다\n(0~1일)', '가끔\n(1~2일)', '자주\n(3~4일)', '거의 대부분\n(5~7일)'],
    },
    {
      id: 8,
      title: '8. 미래에 대하여 희망적이라고 느꼈다.',
      options: ['극히 드물다\n(0~1일)', '가끔\n(1~2일)', '자주\n(3~4일)', '거의 대부분\n(5~7일)'],
    },
    {
      id: 9,
      title: '9. 내 인생은 실패작이라는 생각이 들었다.',
      options: ['극히 드물다\n(0~1일)', '가끔\n(1~2일)', '자주\n(3~4일)', '거의 대부분\n(5~7일)'],
    },
    {
      id: 10,
      title: '10. 두려움을 느꼈다.',
      options: ['극히 드물다\n(0~1일)', '가끔\n(1~2일)', '자주\n(3~4일)', '거의 대부분\n(5~7일)'],
    },
    {
      id: 11,
      title: '11. 잠을 설쳤다, 잠을 잘 이루지 못했다.',
      options: ['극히 드물다\n(0~1일)', '가끔\n(1~2일)', '자주\n(3~4일)', '거의 대부분\n(5~7일)'],
    },
    {
      id: 12,
      title: '12. 행복했다.',
      options: ['극히 드물다\n(0~1일)', '가끔\n(1~2일)', '자주\n(3~4일)', '거의 대부분\n(5~7일)'],
    },
    {
      id: 13,
      title: '13. 평소보다 말을 적게 했다, 말수가 줄었다.',
      options: ['극히 드물다\n(0~1일)', '가끔\n(1~2일)', '자주\n(3~4일)', '거의 대부분\n(5~7일)'],
    },
    {
      id: 14,
      title: '14. 세상에 홀로 있는 듯 한 외로음을 느꼈다.',
      options: ['극히 드물다\n(0~1일)', '가끔\n(1~2일)', '자주\n(3~4일)', '거의 대부분\n(5~7일)'],
    },
    {
      id: 15,
      title: '15. 사람들이 나에게 차갑게 대하는 것 같았다.',
      options: ['극히 드물다\n(0~1일)', '가끔\n(1~2일)', '자주\n(3~4일)', '거의 대부분\n(5~7일)'],
    },
    {
      id: 16,
      title: '16. 생활이 즐거웠다.',
      options: ['극히 드물다\n(0~1일)', '가끔\n(1~2일)', '자주\n(3~4일)', '거의 대부분\n(5~7일)'],
    },
    {
      id: 17,
      title: '17. 갑자기 울음이 나왔다.',
      options: ['극히 드물다\n(0~1일)', '가끔\n(1~2일)', '자주\n(3~4일)', '거의 대부분\n(5~7일)'],
    },
    {
      id: 18,
      title: '18. 슬픔을 느꼈다.',
      options: ['극히 드물다\n(0~1일)', '가끔\n(1~2일)', '자주\n(3~4일)', '거의 대부분\n(5~7일)'],
    },
    {
      id: 19,
      title: '19. 사람들이 나를 싫어하는 것 같았다.',
      options: ['극히 드물다\n(0~1일)', '가끔\n(1~2일)', '자주\n(3~4일)', '거의 대부분\n(5~7일)'],
    },
    {
      id: 20,
      title: '20. 도무지 무엇을 시작할 기운이 나지 않았다.',
      options: ['극히 드물다\n(0~1일)', '가끔\n(1~2일)', '자주\n(3~4일)', '거의 대부분\n(5~7일)'],
    },
  ];

  // 현재 페이지에 보여질 질문들을 계산합니다.
  const startIndex = page * questionsPerPage;
  const endIndex = startIndex + questionsPerPage;
  const questionsToShow = questions.slice(startIndex, endIndex);

  const handleNextPage = () => {
    setPage(page + 1);
  };

  const handleStartSurvey = () => {
    setPage(0); // 시작하기 버튼을 누르면 첫 번째 질문 페이지로 이동
  };

  const isLastPage = page === Math.ceil(questions.length / questionsPerPage) - 1;

  const [answers, setAnswers] = useState({});


  const handleOptionSelect = (questionId, option) => {
    const question = questions.find(q => q.id === questionId);
    const prevOption = answers[questionId];
    let prevScore = 0;
    let newScore = 0;
  
    // 이전에 선택한 옵션과 해당하는 점수 계산
    if (prevOption) {
      if (questionId === 4 || questionId === 8 || questionId === 12 || questionId === 16) {
        switch (prevOption) {
          case '극히 드물다\n(0~1일)':
            prevScore = -1;
            break;
          case '가끔\n(1~2일)':
            prevScore = -2;
            break;
          case '자주\n(3~4일)':
            prevScore = -3;
            break;
          case '거의 대부분\n(5~7일)':
            prevScore = -4;
            break;
          default:
            break;
        }
      } else {
        switch (prevOption) {
          case '극히 드물다\n(0~1일)':
            prevScore = 1;
            break;
          case '가끔\n(1~2일)':
            prevScore = 2;
            break;
          case '자주\n(3~4일)':
            prevScore = 3;
            break;
          case '거의 대부분\n(5~7일)':
            prevScore = 4;
            break;
          default:
            break;
        }
      }
    }
  
    // 새로운 옵션과 해당하는 점수 계산
    if (questionId === 4 || questionId === 8 || questionId === 12 || questionId === 16) {
      switch (option) {
        case '극히 드물다\n(0~1일)':
          newScore = -1;
          break;
        case '가끔\n(1~2일)':
          newScore = -2;
          break;
        case '자주\n(3~4일)':
          newScore = -3;
          break;
        case '거의 대부분\n(5~7일)':
          newScore = -4;
          break;
        default:
          break;
      }
    } else {
      switch (option) {
        case '극히 드물다\n(0~1일)':
          newScore = 1;
          break;
        case '가끔\n(1~2일)':
          newScore = 2;
          break;
        case '자주\n(3~4일)':
          newScore = 3;
          break;
        case '거의 대부분\n(5~7일)':
          newScore = 4;
          break;
        default:
          break;
      }
    }
  
    // 중복 감점 방지를 위한 조건 추가
    let updatedScore = score;
    updatedScore = score - prevScore + newScore;
  
    // 점수 및 선택한 옵션 저장
    setScore(updatedScore);
    setAnswers({ ...answers, [questionId]: option });
  };
  
  

  const handleSubmission = () => {
    // 최종 점수 계산
    let finalScore = score;
    // 최종 점수 출력 또는 다른 작업 수행
    console.log('최종 점수:', finalScore);
  };

  const OptionButton = ({ questionId, option }) => {
    return (
      <TouchableOpacity
        style={[
          styles.optionButton,
          answers[questionId] === option && styles.selectedOption,
        ]}
        onPress={() => handleOptionSelect(questionId, option)}
      >
        {answers[questionId] === option && <View style={styles.innerCircle} />}
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollViewContent}>
        <View style={styles.componentContainer}>
          <View style={styles.component1Background} />
          <View style={styles.component1}>
            {page === -1 ? ( // 초기 페이지
              <View style={styles.initialPage}>
                <Text style={styles.initialText}>이 검사는 CES-D 라는 공식 우울증 검사에요</Text>
                <Image source={require('../assets/profile.jpg')} style={styles.Image} />
                <TouchableOpacity
                  style={styles.startButton}
                  onPress={handleStartSurvey}
                >
                  <Text style={styles.buttonText}>시 작 하 기</Text>
                </TouchableOpacity>
              </View>
            ) : (
              // 질문 페이지
              <>
                <Text style={styles.component1Text}>우울증 설문조사</Text>
                {questionsToShow.map((question, index) => (
                  <View key={index} style={styles.questionContainer}>
                    <Text style={styles.questionText}>{question.title}</Text>
                    <View style={styles.optionsContainer}>
                      {question.options.map((option, index) => (
                        <View key={index} style={styles.optionContainer}>
                          <OptionButton questionId={question.id} option={option} />
                          <Text style={styles.optionText}>{option}</Text>
                        </View>
                      ))}
                    </View>
                  </View>
                ))}
                <View style={styles.buttonContainer}>
                  {page !== 0 && (
                    <TouchableOpacity
                      style={styles.surveyButton}
                      onPress={() => setPage(page - 1)}
                    >
                      <Text style={styles.buttonText}>이전</Text>
                    </TouchableOpacity>
                  )}
                  {isLastPage ? (
                    <TouchableOpacity
                      style={styles.surveyButton}
                      onPress={handleSubmission}
                    >
                      <Text style={styles.buttonText}>제출</Text>
                    </TouchableOpacity>
                  ) : (
                    <TouchableOpacity
                      style={styles.surveyButton}
                      onPress={handleNextPage}
                      disabled={isLastPage}
                    >
                      <Text style={styles.buttonText}>다음</Text>
                    </TouchableOpacity>
                  )}
                </View>
              </>
            )}
          </View>
        </View>
      </ScrollView>
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff44',
  },
  scrollViewContent: {
    maxHeight: '90%',
  },
  componentContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  component1Background: {
    backgroundColor: 'black',
    width: '90%',
    height: 3400,
    zIndex: -1,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 5,
    left: 20,
  },
  component1: {
    backgroundColor: 'white',
    borderRadius: 10,
    width: '90%',
    padding: 20,
    marginBottom: 20,
    borderWidth: 1.5,
    borderColor: 'black',
    left: 15,
  },
  component1Text: {
    fontSize: 40,
    width: '100%',
    height: 40,
    top: -15,
    marginLeft: -10,
    fontFamily: 'SpaceGroteskBold',
    marginBottom: 40,
    marginTop: 10,
  },
  initialPage: {
    alignItems: 'center',
    height: 700,
    padding: 30,
  },
  initialText: {
    fontSize: 30,
    marginBottom: 20,
    fontFamily: 'SpaceGroteskRegular',
    fontWeight: 'bold',
  },
  startButton: {
    backgroundColor: '#0095f6',
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 5,
    marginTop: 100,
  },
  startButtonText: {
    color: 'white',
    fontFamily: 'SpaceGroteskBold',
  },
  questionContainer: {
    marginBottom: 20,
  },
  questionText: {
    fontSize: 18,
    fontFamily: 'SpaceGroteskBold',
    marginBottom: 20,
  },
  optionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 100,
  },
  optionContainer: {
    alignItems: 'center',
  },
  optionButton: {
    width: 30, // Adjust width as needed
    height: 30,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedOption: {
    backgroundColor: 'black', // Change color as needed
  },
  optionText: {
    fontSize: 14,
    fontFamily: 'SpaceGroteskBold',
    color: 'black',
    textAlign: 'center',
    marginTop: 5,
  },
  surveyButton: {
    borderColor: 'black',
    borderWidth: 1.5,
    width: '50%',
    height: 50,
    backgroundColor: '#0095f6',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginBottom: 10,
    fontFamily: 'SpaceGroteskBold',
    marginLeft: 5,
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'SpaceGroteskBold',
    color: 'white',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  Image: {
    padding: 20,
    width: 300,
    height: 400,
  }
});

export default DepressionSurvey;