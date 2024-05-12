import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';
import { useNavigation } from '@react-navigation/native';

const SentimentAnalysis = () => {
  const navigation = useNavigation();
  const [selectedDate, setSelectedDate] = useState(null);

  const gotoDiary = () => {
    navigation.navigate('Diary');
  }

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.calendar}>
          <CalendarPicker
            selectedStartDate={selectedDate}
            selectedDate={selectedDate}
          />
        </View>
        <View style={styles.diaryLog}>
          <TouchableOpacity onPress={gotoDiary} style={styles.addDiaryBtn}>
            <Text style={styles.buttonText}>감정 일기장 쓰기</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
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
  scrollView: {
    flex: 1,
    width: '100%',
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
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
  },
  calendar: {
    width: '100%',
    backgroundColor: 'white',
  },
  diaryLog: {
    width: '100%',
    backgroundColor: 'blue',
  },
});

export default SentimentAnalysis;
