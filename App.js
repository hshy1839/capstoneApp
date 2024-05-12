import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Main from './components/Main';
import Header from './components/Header'; // Header 컴포넌트 추가
import Profile from './components/Profile';
import Login from './components/Login';
import Signup from './components/Signup';
import Myinfo from './components/Myinfo';
import Post from './components/Post';
import PostDetail from './components/PostDetail';
import DepressionSurvey from './components/DepressionSurvey';
import SurveyResult from './components/SurveyResult';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Stack.Navigator>
        <Stack.Screen name="Main" component={Main} options={{header: () => <Header />}} />
        <Stack.Screen name="Profile" component={Profile} options={{header: () => <Header />}} />
        <Stack.Screen name="Login" component={Login} options={{header: () => <Header />}} />
        <Stack.Screen name="Signup" component={Signup} options={{header: () => <Header />}} />
        <Stack.Screen name="Myinfo" component={Myinfo} options={{header: () => <Header />}} />
        <Stack.Screen name="Post" component={Post} options={{header: () => <Header />}} />
        <Stack.Screen name="PostDetail" component={PostDetail} options={{header: () => <Header />}} />
        <Stack.Screen name="DepressionSurvey" component={DepressionSurvey} options={{header: () => <Header />}} />
        <Stack.Screen name="SurveyResult" component={SurveyResult} options={{header: () => <Header />}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
