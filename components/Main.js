import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity, SafeAreaView, ViewBase } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
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
        {/* <View style = {styles.quoteBackgroundContainer}/> */}
        <View style={styles.quoteContainer}>
          <Text style={styles.quoteText}>{randomQuote}</Text>
        </View>
        <View style = {styles.componentContainer}>
        <View style = {styles.component1Background}/>
        <TouchableOpacity style={styles.component1}>
          <View style= {styles.component1layout}>
            <View style = {styles.component1layoutIcon}>
          <Ionicons name="book" size={26} color="black" />
          </View>
          <Text style = {styles.component1Text}>
            Book
          </Text>
          </View>
        </TouchableOpacity>
        <View style = {styles.component2Background}/>
        <TouchableOpacity style = {styles.component2}>
        <View style= {styles.component2layout}>
            <View style = {styles.component2layoutIcon}>
            <AntDesign name="smile-circle" size={26} color="black" />
          </View>
          <Text style = {styles.component2Text}>
            Smile
          </Text>
          </View>
        </TouchableOpacity>
        </View>
        <View style = {styles.componentContainer2}>
        <View style = {styles.component1Background}/>
        <TouchableOpacity style={styles.component1}>
          <View style= {styles.component3layout}>
            <View style = {styles.component3layoutIcon}>
            <AntDesign name="caretright" size={26} color="white" />
          </View>
          <Text style = {styles.component3Text}>
            Youtube
          </Text>
          </View>
        </TouchableOpacity>
        <View style = {styles.component2Background}/>
        <TouchableOpacity style = {styles.component2}>
        <View style= {styles.component4layout}>
            <View style = {styles.component4layoutIcon}>
            <AntDesign name="customerservice" size={26} color="black" />
          </View>
          <Text style = {styles.component4Text}>
            Customerservice
          </Text>
          </View>
        </TouchableOpacity>
        </View>
        <View style = {styles.scheduleBackground}/>
        <TouchableOpacity style = {styles.schedule}></TouchableOpacity>
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
    height: 73,
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
    height: 73,
    padding: 20,
    marginBottom: 20,
    borderWidth: 1.5,
    borderColor: 'black',
    marginTop : 20,
  },
  quoteText: {
    fontFamily: 'BlackHanSansRegular',
    textAlign: 'center',
    fontSize : 15,
    fontWeight : 'bold',
  },
  component1Background : {
    backgroundColor: 'black',
    width: '45%',
    height: 135,
    zIndex : -1,
    borderRadius: 10,
    justifyContent: 'center', 
    alignItems: 'center',
    position : 'absolute',
    top : 25,
    left : 4,
  },
  component1 : {
    backgroundColor: '#fff',
    borderRadius: 10,
    width: '45%',
    height: 135,
    padding: 20,
    marginBottom: 20,
    borderWidth: 1.5,
    borderColor: 'black',
    marginTop : 20,
  },
  component1layoutIcon : {
    width : '100%',
    height : 100,
    marginLeft : 35,
  },
  component1Text : {
    fontSize :25,
    width : '100%',
    height : 100,
    top : -55,
    marginLeft : -10,
    fontFamily : 'SpaceGroteskBold',
  },
  component2Background : {
    backgroundColor: 'black',
    width: '45%',
    height: 135,
    zIndex : -1,
    borderRadius: 10,
    justifyContent: 'center', 
    alignItems: 'center',
    position : 'absolute',
    top : 25,
    left : 170,
  },
  component2 : {
    backgroundColor: '#fff',
    borderRadius: 10,
    width: '45%',
    height: 135,
    padding: 20,
    marginBottom: 20,
    borderWidth: 1.5,
    borderColor: 'black',
    marginTop : 20,
    right : 10,
  },
  component2layoutIcon : {
    width : '100%',
    height : 100,
    marginLeft : 35,
  },
  component2Text : {
    fontSize :25,
    width : '100%',
    height : 100,
    top : -55,
    marginLeft : -10,
    fontFamily : 'SpaceGroteskBold',
  },
  componentContainer: {
    flexDirection: 'row', // 가로 정렬
    justifyContent: 'space-between', // 요소들 간 간격을 동일하게 배치
    marginTop: 20,
  },
  component1layout : {
    backgroundColor: '#33cccc',
    borderRadius: 10,
    width: '136%',
    height : 60,
    padding: 20,
    right : 18,
    top : -19,
  },
  component2layout : {
    backgroundColor: '#cc66ff',
    borderRadius: 10,
    width: '136%',
    height : 60,
    padding: 20,
    right : 18,
    top : -19,
  },
  component3layoutIcon : {
    width : '100%',
    height : 100,
    marginLeft : 35,
  },
  component3Text : {
    fontSize :25,
    width : '100%',
    height : 100,
    top : -55,
    marginLeft : -10,
    fontFamily : 'SpaceGroteskBold',
  },
  component3layout : {
    backgroundColor: 'red',
    borderRadius: 10,
    width: '136%',
    height : 60,
    padding: 20,
    right : 18,
    top : -19,
  },
  component4layoutIcon : {
    width : '100%',
    height : 100,
    marginLeft : 35,
  },
  component4Text : {
    fontSize :25,
    width : '100%',
    height : 100,
    top : -55,
    marginLeft : -10,
    fontFamily : 'SpaceGroteskBold',
  },
  component4layout : {
    backgroundColor: 'orange',
    borderRadius: 10,
    width: '136%',
    height : 60,
    padding: 20,
    right : 18,
    top : -19,
  },
  componentContainer2: {
    flexDirection: 'row', // 가로 정렬
    justifyContent: 'space-between', // 요소들 간 간격을 동일하게 배치
    marginTop: -10,
  },
  scheduleBackground : {
    backgroundColor: 'black',
    width: '90%',
    height: 60,
    zIndex : -1,
    borderRadius: 10,
    position : 'absolute',
    top : 500,
    left : 14,
  },
  schedule : {
    backgroundColor: '#fff',
    borderRadius: 10,
    width: '90%',
    height: 60,
    marginLeft : 20,
    borderWidth: 1.5,
    borderColor: 'black',
    marginTop : 20,
    right : 10,
  },
});

export default Main;
