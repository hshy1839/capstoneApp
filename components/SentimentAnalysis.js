import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Alert } from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';
import { useNavigation } from '@react-navigation/native';
import Footer  from './Footer';

const SentimentAnalysis = () => {
  const navigation = useNavigation();
  const [selectedDate, setSelectedDate] = useState(null);

  const gotoDiary = () => {
    if (selectedDate === null) {
      Alert.alert('알림', '날짜를 선택하세요 !!');
    } else {
      navigation.navigate('Diary', { selectedDate });
    }
  }

  return (
    <View style={styles.container}>
      <View style ={styles.title}>
        <Text style={styles.titleText}>감정 분석 일기</Text>
        <Text style={styles.subtitleText}>날짜를 선택 후 일기를 작성하세요</Text>
      </View>
      <ScrollView style = {styles.content}>
      <View style={styles.calendar}>
        <CalendarPicker
          selectedStartDate={selectedDate}
          selectedDate={selectedDate}
          onDateChange={setSelectedDate}
        />
      </View>
      <View style={styles.diaryLog}>
        <TouchableOpacity onPress={gotoDiary} style={styles.addDiaryBtn}>
          <Text style={styles.buttonText}>감정 일기장 쓰기</Text>
        </TouchableOpacity>
      </View>
      </ScrollView>
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content : {
    maxHeight : "90%",
  },
  title : {
    alignItems : 'center',
    marginTop : 20,
    marginBottom : 20,
  },
  titleText : {
    fontSize : 30,
    fontFamily : "SpaceGroteskBold"
  },
  subtitleText : {
    fontSize : 20,
    fontFamily : "SpaceGroteskBold",
    marginTop : 50,
  },
  addDiaryBtn: {
    borderColor: 'black',
    borderWidth: 1.5,
    width: '80%',
    height: 50,
    backgroundColor: '#0095f6',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 30,
    marginLeft : '10%',
    marginBottom : '50%',
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
  },
  calendar: {
    flex: 1,
    backgroundColor: 'white',
    marginTop : 50,
    alignContent : 'center',
    textAlign : 'center',
  },
  diaryLog: {
    flex: 1,
    width: '100%',
    backgroundColor: 'whitesmoke',
  },
});

export default SentimentAnalysis;
