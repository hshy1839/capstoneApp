import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Footer from './Footer';
import { useRoute } from '@react-navigation/native';
import moment from 'moment';
import 'moment/locale/ko';

const Diary = () => {

  const route = useRoute();
  const { selectedDate } = route.params; // 전달받은 선택된 날짜
  const [diaryContent, setDiaryContent] = useState('');
  const [sentiment, setSentiment] = useState(null);
  const [showAnalyzeButton, setShowAnalyzeButton] = useState(true); // 감정 분석하기 버튼 상태 추가
  const client_id = "aa"; //z5hgn2e6c1
  const client_secret = "pIyDljkjtq5frD4oL62Y550OtegQ5G58nkj65fId";
  const url = "https://naveropenapi.apigw.ntruss.com/sentiment-analysis/v1/analyze";
  const formattedDate = selectedDate ? moment(selectedDate).format('YYYY.MM.DD dddd') : ''; // 날짜 포맷 변경

  const handleAnalyzeSentiment = async () => {
    const headers = {
      "X-NCP-APIGW-API-KEY-ID": client_id,
      "X-NCP-APIGW-API-KEY": client_secret,
      "Content-Type": "application/json"
    };
    const data = {
      content: diaryContent
    };

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(data)
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await response.json();
      setSentiment(result.document.sentiment);
      setShowAnalyzeButton(false); // 감정 분석이 완료되면 버튼 숨기기
    } catch (error) {
      console.error('There was an error!', error);
    }
  };

  const handleSaveDiary = () => {
    // 저장하기 버튼을 눌렀을 때의 동작 구현
    // 예를 들어, 일기를 저장하는 기능을 추가할 수 있습니다.
    console.log('일기 저장하기');
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollContainer}>
          <View style={styles.diaryBackground}></View>
          <Text style={styles.diaryTitle}>오늘의 하루를 기록해보세요</Text>
          <View style={styles.container}>
      <Text style={styles.selectedDate}> {formattedDate}</Text>
          <View style = {styles.dateBorder}></View>
    </View>
          <TextInput
            style={styles.input}
            multiline
            placeholder="일기를 작성하세요"
            value={diaryContent}
            onChangeText={text => setDiaryContent(text)}
          />
        {showAnalyzeButton && ( // showAnalyzeButton 상태에 따라 버튼 표시 여부 결정
          <TouchableOpacity onPress={handleAnalyzeSentiment} style={styles.analyzeBtn}>
            <Text style={styles.buttonText}>감정 분석하기</Text>
          </TouchableOpacity>
        )}
        {!showAnalyzeButton && ( // 감정 분석이 완료되면 버튼 표시
          <TouchableOpacity onPress={handleSaveDiary} style={styles.saveBtn}>
            <Text style={styles.buttonText}>저장하기</Text>
          </TouchableOpacity>
        )}
        {sentiment && (
          <Text style={styles.sentimentText}>감정상태 : {sentiment}</Text>
        )}
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
    maxHeight : '90%',
  },
  diaryContainer: {
    marginTop: 20,
    padding: 20,
    borderWidth: 1.5,
    borderColor: 'black',
    borderRadius: 15,
  },
  selectedDate :{
    marginTop : 50,
    color : 'salmon',
    fontFamily : "SpaceGroteskBold",
    fontSize : 26,
    textAlign : 'right',
    marginRight : 20,
  },
  dateBorder : {
    marginTop : 20,
    borderBottomWidth : 1.5,
    borderStyle : 'dashed',
    borderColor : 'salmon',
  },
  diaryTitle: {
    fontSize: 30,
    fontFamily: "SpaceGroteskBold",
    marginTop: 30,
    textAlign : 'center',
  },
  input: {
    marginTop: 20,
    textAlignVertical: 'top',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
    width: '95%',
    minHeight: 400,
    backgroundColor: "white",
    borderWidth : 1.5,
    borderColor: 'black',
    padding : 20,
    marginLeft : '2%',
    fontFamily : 'SpaceGroteskBold',
    fontSize : 20,
  },
  sentimentText: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: 'bold',
    color: 'blue',
  },
  analyzeBtn: {
    marginTop: 20,
    borderColor: 'black',
    borderWidth: 1.5,
    width: '80%',
    height: 50,
    backgroundColor: '#0095f6',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginLeft: '10%',
    fontFamily: 'SpaceGroteskBold',
    marginBottom : 40,
  },
  saveBtn: {
    marginTop: 20,
    borderColor: 'black',
    borderWidth: 1.5,
    width: '80%',
    height: 50,
    backgroundColor: '#4CAF50',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginLeft: '10%',
    fontFamily: 'SpaceGroteskBold',
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'SpaceGroteskBold',
    color: 'white',
  }
});

export default Diary;
