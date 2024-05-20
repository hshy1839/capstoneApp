import React, { useEffect, useState } from 'react';
import { View, TouchableOpacity, StyleSheet, Text, Keyboard, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import fonts from './Font';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Footer = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const [keyboardVisible, setKeyboardVisible] = useState(false);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setKeyboardVisible(true);
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setKeyboardVisible(false);
      }
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  const [loaded] = useFonts({
    SpaceGroteskRegular: fonts.spaceGroteskRegular,
    SpaceGroteskBold: fonts.spaceGroteskBold,
  });
  if (!loaded) {
    return null;
  }

  const goToProfile = async () => {
    try {
      const isLoggedIn = await AsyncStorage.getItem('isLoggedIn');
      if (!isLoggedIn) {
        Alert.alert(
          '알림',
          '로그인이 필요합니다.',
          [{ text: '확인', onPress: () => navigation.navigate('Login') }]
        );
      } else {
        navigation.navigate('Profile');
      }
    } catch (error) {
      console.error('사용자 정보 초기화에 실패했습니다:', error);
    }
  };

  const goToMain = () => {
    navigation.navigate('Main');
  };
  const gotoLogin = () => {
    navigation.navigate('Login');
  };
  const gotoSentiment = () => {
    navigation.navigate('SentimentAnalysis');
  };

  if (keyboardVisible) {
    return null; // 키보드가 켜져 있을 때 Footer를 렌더링하지 않음
  }

  return (
    <View style={styles.footer}>
      <TouchableOpacity style={styles.menuItem} onPress={goToMain}>
        <Ionicons name="home" size={27} color="black" />
        <Text style={styles.iconText}>Home</Text>
      </TouchableOpacity>

      <View style={styles.addCircle}>
        <View style={styles.blackCircle} />
        <TouchableOpacity
          onPress={gotoSentiment}
          style={[styles.menuItem, styles.addCircleContent]}
          activeOpacity={1}
        >
          <View style={styles.addCircleIconWrapper}>
            <View style={styles.addCircleIcon}>
              <Text style={styles.plus}>+</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.menuItem} onPress={goToProfile}>
        <Ionicons name="person" size={27} color="black" />
        <Text style={styles.iconText}>Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    backgroundColor: '#66CC99',
    flexDirection: 'row',
    borderTopWidth: 1.5,
    height: '10%',
  },
  hiddenFooter: {
    display: 'none',
  },
  menuItem: {
    alignItems: 'center',
    flex: 1,
    marginTop: 10,
  },
  addCircle: {
    top: -45,
    position: 'relative',
  },
  addCircleContent: {
    position: 'relative',
    zIndex: 2, // Ensure this is higher than the blackCircle
    borderRadius: 100,
  },
  addCircleIconWrapper: {
    overflow: 'hidden',
    borderRadius: 100,
  },
  addCircleIcon: {
    width: 70,
    height: 70,
    borderRadius: 100,
    borderColor: 'black',
    borderWidth: 1.5,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 2, // Ensure this is higher than the blackCircle
  },
  plus: {
    fontSize: 50,
    fontWeight: 'bold',
    color: 'black',
  },
  blackCircle: {
    position: 'absolute', // Change to absolute positioning
    backgroundColor: 'black',
    borderRadius: 100,
    width: 70,
    height: 70,
    top: 15,
    left: 5,
    zIndex: 1, // Lower zIndex so it appears behind
  },
  iconText: {
    marginTop: 5,
    color: 'black',
    fontFamily: 'SpaceGroteskBold',
  },
});

export default Footer;
