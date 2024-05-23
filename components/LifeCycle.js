import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { LineChart } from 'expo-chart-kit';
import Footer from './Footer';

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

  const remSleepData = [
    { date: '월', value: 2 },
    { date: '화', value: 2.5 },
    { date: '수', value: 2 },
    { date: '목', value: 3.2 },
    { date: '금', value: 2.5 },
    { date: '토', value: 2.5 },
    { date: '일', value: 2 },
  ];

  const stepsData = [
    { date: '월', value: 3000 },
    { date: '화', value: 4500 },
    { date: '수', value: 6000 },
    { date: '목', value: 8000 },
    { date: '금', value: 7500 },
    { date: '토', value: 8500 },
    { date: '일', value: 7000 },
  ];

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        <TouchableOpacity style={styles.getButton} onPress={getInfo}>
          <Text style={styles.getButtonText}>가져오기</Text>
        </TouchableOpacity>
        <View style={styles.chartContainer}>
          <Text style={styles.title}>수면</Text>
          <LineChart
            data={{
              labels: sleepData.map(item => item.date),
              datasets: [{ data: sleepData.map(item => item.value) }]
            }}
            width={320}
            height={200}
            yAxisSuffix="시간"
            chartConfig={{
              backgroundGradientFrom: 'white',
              backgroundGradientTo: '#fff',
              decimalPlaces: 1,
              color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
              propsForDots: { r: "6", strokeWidth: "2", stroke: "#ffa726", labelColor: "#0000FF" } // 파란색
            }}
          />
        </View>
        <View style={styles.chartContainer}>
          <Text style={styles.title}>RAM 수면</Text>
          <LineChart
            data={{
              labels: remSleepData.map(item => item.date),
              datasets: [{ data: remSleepData.map(item => item.value) }]
            }}
            width={320}
            height={200}
            yAxisSuffix="시간"
            chartConfig={{
              backgroundGradientFrom: '#fff',
              backgroundGradientTo: '#fff',
              decimalPlaces: 1,
              color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
              propsForDots: { r: "6", strokeWidth: "2", stroke: "#ffa726", labelColor: "#0000FF" } // 파란색
            }}
          />
        </View>
        <View style={styles.chartContainer}>
          <Text style={styles.title}>걸음 수</Text>
          <LineChart
            data={{
              labels: stepsData.map(item => item.date),
              datasets: [{ data: stepsData.map(item => item.value) }]
            }}
            width={320}
            height={200}
            yAxisSuffix="걸음"
            chartConfig={{
              backgroundGradientFrom: '#fff',
              backgroundGradientTo: '#fff',
              decimalPlaces: 0,
              color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
              propsForDots: { r: "6", strokeWidth: "2", stroke: "#ffa726", labelColor: "#0000FF" } // 파란색
            }}
          />
        </View>
      </ScrollView>
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  scrollViewContainer: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    backgroundColor: 'aquamarine',
  },
  chartContainer: {
    marginTop : 20,
    marginBottom: 20,
    backgroundColor : 'white',
    borderWidth : 1.5,
    borderColor : 'black',
    width : '95%',
    alignSelf : 'center',
  },
  title: {
    marginTop : 10,
    marginLeft : 20,
    fontSize: 28,
    fontFamily : 'SpaceGroteskBold',
    marginBottom: 25,
  },
  getButton : {
    backgroundColor : 'skyblue',
    width : '25%',
    height : '5%',
    borderWidth : 1.5,
    borderColor : 'black',
    alignSelf : 'center',
    marginTop : 10,
  },
  getButtonText : {
    color : 'white',
    fontFamily : 'SpaceGroteskBold',
    fontSize : 20,
    textAlign : 'center',
    marginTop : 10,
  }
});

export default LifeCycle;

