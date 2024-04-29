import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Header from './Header';
import Footer from './Footer';
import quotes from './Quotes'; // quotes.js에서 명언 데이터 가져오기
import fonts from './Font';

const Main = () => {
  // 임의의 명언 선택
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];
 
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.content}>
        <View style = {styles.quoteBackgroundContainer}/>
        <View style={styles.quoteContainer}>
          <Text style={styles.quoteText}>{randomQuote}</Text>
        </View>
      </ScrollView>
      <Footer />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dddddd',
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  quoteBackgroundContainer : {
    backgroundColor: 'black',
    width: '95%',
    height: 60,
    zIndex : -1,
    borderRadius: 10,
    borderWidth: 1.5,
    justifyContent: 'center', 
    alignItems: 'center',
    position : 'absolute',
    top : 10,
    left : 8,
    marginTop : 20,
  },
  quoteContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    width: '95%',
    height: 60,
    padding: 20,
    marginBottom: 20,
    borderWidth: 1.5,
    borderColor: 'black',
    marginTop : 20,
  },
  quoteText: {
    fontFamily: 'black',
    textAlign: 'center',
  },
});

export default Main;
