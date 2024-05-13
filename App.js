import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Main from './components/Main';
import Header from './components/Header';
import Profile from './components/Profile';
import Login from './components/Login';
import Signup from './components/Signup';
import Myinfo from './components/Myinfo';
import Post from './components/Post';
import PostDetail from './components/PostDetail';
import DepressionSurvey from './components/DepressionSurvey';
import SurveyScore from './components/SurveyScore';
import SentimentAnalysis from './components/SentimentAnalysis';
import Diary from './components/Diary';
import Setting from './components/Setting';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createStackNavigator();

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const getIsLoggedIn = async () => {
      try {
        const storedIsLoggedIn = await AsyncStorage.getItem('isLoggedIn');
        if (storedIsLoggedIn !== null) {
          setIsLoggedIn(JSON.parse(storedIsLoggedIn));
        }
      } catch (error) {
        console.error(error);
      }
    };

    getIsLoggedIn();
  }, []);

  const handleLogin = async (loginStatus) => {
    try {
      setIsLoggedIn(loginStatus);
      await AsyncStorage.setItem('isLoggedIn', JSON.stringify(loginStatus));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Stack.Navigator>
        <Stack.Screen name="Main" component={Main} options={{ header: () => <Header />, isLoggedIn: isLoggedIn, setIsLoggedIn: setIsLoggedIn }} />
        <Stack.Screen name="Profile" component={Profile} options={{ header: () => <Header />, isLoggedIn: isLoggedIn, setIsLoggedIn: setIsLoggedIn }} />
        <Stack.Screen name="Login" component={Login} options={{ header: () => <Header />, isLoggedIn: isLoggedIn, setIsLoggedIn: setIsLoggedIn }} />
        <Stack.Screen name="Signup" component={Signup} options={{ header: () => <Header />, isLoggedIn: isLoggedIn, setIsLoggedIn: setIsLoggedIn }} />
        <Stack.Screen name="Myinfo" component={Myinfo} options={{ header: () => <Header />, isLoggedIn: isLoggedIn, setIsLoggedIn: setIsLoggedIn }} />
        <Stack.Screen name="Post" component={Post} options={{ header: () => <Header />, isLoggedIn: isLoggedIn, setIsLoggedIn: setIsLoggedIn }} />
        <Stack.Screen name="PostDetail" component={PostDetail} options={{ header: () => <Header />, isLoggedIn: isLoggedIn, setIsLoggedIn: setIsLoggedIn }} />
        <Stack.Screen name="DepressionSurvey" component={DepressionSurvey} options={{ header: () => <Header />, isLoggedIn: isLoggedIn, setIsLoggedIn: setIsLoggedIn }} />
        <Stack.Screen name="SurveyScore" component={SurveyScore} options={{ header: () => <Header />, isLoggedIn: isLoggedIn, setIsLoggedIn: setIsLoggedIn }} />
        <Stack.Screen name="SentimentAnalysis" component={SentimentAnalysis} options={{ header: () => <Header />, isLoggedIn: isLoggedIn, setIsLoggedIn: setIsLoggedIn }} />
        <Stack.Screen name="Diary" component={Diary} options={{ header: () => <Header />, isLoggedIn: isLoggedIn, setIsLoggedIn: setIsLoggedIn }} />
        <Stack.Screen name="Setting" component={Setting} options={{ headerShown: false, isLoggedIn: isLoggedIn, setIsLoggedIn: setIsLoggedIn }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
