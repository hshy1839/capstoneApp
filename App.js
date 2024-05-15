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
    const fetchIsLoggedIn = async () => {
      try {
        const storedIsLoggedIn = await AsyncStorage.getItem('isLoggedIn');
        if (storedIsLoggedIn !== null) {
          setIsLoggedIn(JSON.parse(storedIsLoggedIn));
        }
      } catch (error) {
        console.error('Error fetching isLoggedIn value:', error);
      }
    };

    fetchIsLoggedIn();
  }, []);


  const handleLogin = async (loginStatus) => {
    try {
      setIsLoggedIn(loginStatus);
      console.log(loginStatus);
      await AsyncStorage.setItem('isLoggedIn', JSON.stringify(loginStatus));
      console.log("Login status stored successfully.");
      console.log(isLoggedIn);
    } catch (error) {
      console.error('Error storing login status:', error);
    }
  };

  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Stack.Navigator>
        <Stack.Screen name="Main" component={Main} options={{ header: (props) => <Header {...props} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} /> }} />
        <Stack.Screen name="Profile" component={Profile} options={{ header: (props) => <Header {...props} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} /> }} />
        <Stack.Screen
          name="Login"
          options={{
            header: (props) => <Header {...props} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
          }}
        >
          {props => <Login {...props} onLogin={handleLogin} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />}
        </Stack.Screen>

        <Stack.Screen name="Signup" component={Signup} options={{ header: (props) => <Header {...props} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} /> }} />
        <Stack.Screen name="Myinfo" component={Myinfo} options={{ header: (props) => <Header {...props} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} /> }} />
        <Stack.Screen name="Post" component={Post} options={{ header: (props) => <Header {...props} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} /> }} />
        <Stack.Screen name="PostDetail" component={PostDetail} options={{ header: (props) => <Header {...props} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} /> }} />
        <Stack.Screen name="DepressionSurvey" component={DepressionSurvey} options={{ header: (props) => <Header {...props} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} /> }} />
        <Stack.Screen name="SurveyScore" component={SurveyScore} options={{ header: (props) => <Header {...props} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} /> }} />
        <Stack.Screen name="SentimentAnalysis" component={SentimentAnalysis} options={{ header: (props) => <Header {...props} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} /> }} />
        <Stack.Screen name="Diary" component={Diary} options={{ header: (props) => <Header {...props} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} /> }} />
        <Stack.Screen
          name="Setting"
          options={{ headerShown: false }}
        >
          {props => <Setting {...props} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
