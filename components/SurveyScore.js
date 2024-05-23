import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

const LifeCycle = () => {
  
  const sleepData = [
    { date: '월', value: 7 },
    { date: '화', value: 6 },
    { date: '수', value: 7 },
    { date: '목', value: 7.5 },
    { date: '금', value: 8 },
    { date: '토', value: 8 },
    { date: '일', value: 7 },
  ];

  // 다른 데이터도 유사한 방식으로 처리할 수 있습니다.

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        {/* 다른 컴포넌트들을 여기에 추가하세요 */}
        <View style={styles.chartContainer}>
          <Text style={styles.title}>수면</Text>
          {sleepData.map((item, index) => (
            <View key={index} style={styles.dataPoint}>
              <Text style={styles.date}>{item.date}</Text>
              <View style={[styles.bar, { height: item.value * 10 }]} />
            </View>
          ))}
        </View>
        {/* 다른 그래프들도 유사한 방식으로 추가할 수 있습니다. */}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'aquamarine',
  },
  scrollViewContainer: {
    flexGrow: 1,
  },
  chartContainer: {
    marginTop: 20,
    marginBottom: 20,
    backgroundColor: 'white',
    borderWidth: 1.5,
    borderColor: 'black',
    width: '95%',
    alignSelf: 'center',
  },
  title: {
    marginTop: 10,
    marginLeft: 20,
    fontSize: 28,
    fontFamily: 'SpaceGroteskBold',
    marginBottom: 25,
  },
  dataPoint: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  date: {
    fontSize: 18,
    fontFamily: 'SpaceGroteskBold',
  },
  bar: {
    backgroundColor: 'skyblue',
    width: 30,
    borderRadius: 5,
  },
});

export default LifeCycle;
