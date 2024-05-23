import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Footer from './Footer';

const LifeCycle = () => {
  const getInfo = () => {
    // 데이터 가져오는 로직 구현
  };

  const sleepData = [
    { day: '월', value: 7 },
    { day: '화', value: 6 },
    { day: '수', value: 7 },
    { day: '목', value: 7.5 },
    { day: '금', value: 8 },
    { day: '토', value: 8 },
    { day: '일', value: 7 },
  ];

  const remSleepData = [
    { day: '월', value: 2 },
    { day: '화', value: 2.5 },
    { day: '수', value: 2 },
    { day: '목', value: 3.2 },
    { day: '금', value: 2.5 },
    { day: '토', value: 2.5 },
    { day: '일', value: 2 },
  ];

  const stepsData = [
    { day: '월', value: 3000 },
    { day: '화', value: 4500 },
    { day: '수', value: 6000 },
    { day: '목', value: 8000 },
    { day: '금', value: 7500 },
    { day: '토', value: 8500 },
    { day: '일', value: 7000 },
  ];

  return (
    <View  style = {styles.allContainer}>
    <ScrollView contentContainerStyle={styles.container}>
      <TouchableOpacity style={styles.getButton} onPress={getInfo}>
        <Text style={styles.getButtonText}>가져오기</Text>
      </TouchableOpacity>
      <View style={styles.chartContainer}>
        <Text style={styles.title}>수면</Text>
        <View style={styles.graph}>
          {sleepData.map((data, index) => (
            <View key={index} style={[styles.bar, { height: data.value * 10 }]}>
              <Text style={styles.barLabel}>{data.day}</Text>
            </View>
          ))}
        </View>
      </View>
      <View style={styles.chartContainer}>
        <Text style={styles.title}>RAM 수면</Text>
        <View style={styles.graph}>
          {remSleepData.map((data, index) => (
            <View key={index} style={[styles.bar, { height: data.value * 10 }]}>
              <Text style={styles.barLabel}>{data.day}</Text>
            </View>
          ))}
        </View>
      </View>
      <View style={styles.chartContainer}>
        <Text style={styles.title}>걸음 수</Text>
        <View style={styles.graph}>
          {stepsData.map((data, index) => (
            <View key={index} style={[styles.bar, { height: data.value / 100 }]}>
              <Text style={styles.barLabel}>{data.day}</Text>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
    <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  allContainer : {
    flex : 1,
  },
  container: {
    flexGrow: 1,
    backgroundColor: 'aquamarine',
    alignItems: 'center',
    justifyContent: 'center',
  },
  chartContainer: {
    marginTop: 20,
    marginBottom : 20,
  },
  title: {
    fontSize: 28,
    fontFamily: 'SpaceGroteskBold',
    marginBottom: 10,
  },
  getButton: {
    backgroundColor: 'skyblue',
    width: '25%',
    height: '5%',
    borderWidth: 1.5,
    borderColor: 'black',
    alignSelf: 'center',
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  getButtonText: {
    color: 'white',
    fontFamily: 'SpaceGroteskBold',
    fontSize: 20,
  },
  graph: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    width: '90%',
    height: 200,
    backgroundColor: 'white',
    borderWidth: 1.5,
    borderColor: 'black',
  },
  bar: {
    width: 50,
    backgroundColor: 'orange',
    alignItems: 'center',
    borderWidth : 1,
    borderColor : 'black'
  },
  barLabel: {
    marginTop: 5,
    fontSize: 16,
    fontFamily : 'SpaceGroteskBold'
  },
});

export default LifeCycle;
