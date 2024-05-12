import React from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native'; // useRoute 추가
import { useFonts } from 'expo-font';
import fonts from './Font';

const Footer = () => {
  const navigation = useNavigation();
  const route = useRoute(); // 현재 라우트 정보 가져오기

  const [loaded] = useFonts({
    SpaceGroteskRegular: fonts.spaceGroteskRegular,
    SpaceGroteskBold: fonts.spaceGroteskBold,
  });
  if (!loaded) {
    return null;
  }
  const goToProfile = () => {
    navigation.navigate('Profile');
  };
  const goToMain = () => {
    navigation.navigate('Main');
  };
  const gotoLogin = () => {
    navigation.navigate('Login');
  }
  const gotoSentiment = () => {
    navigation.navigate('SentimentAnalysis');
  }

  return (
    <View style={[styles.footer, styles.fixedFooter]}>
      <TouchableOpacity style={styles.menuItem} onPress={goToMain}>
        <Ionicons name="home" size={27} color="black" />
        <Text style={styles.iconText}>Home</Text>
      </TouchableOpacity>

      <View style={styles.addCircle}>
        <View style={styles.blackCircle} />
        <TouchableOpacity
          onPress={gotoSentiment}
          style={[styles.menuItem, styles.addCircleContent]}
          activeOpacity={1} // 터치될 때 투명해지는 효과 제거
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
    justifyContent: 'space-around',
    borderTopWidth: 1.5,
  },
  fixedFooter: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  menuItem: {
    alignItems: 'center',
    flex: 1, // 각 아이콘의 너비를 동일하게 설정
    marginTop : 10,
  },
  addCircle: {
    top: -45,
    position: 'relative',
  },
  addCircleContent: {
    position: 'relative',
    zIndex: 1,
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
  },
  plus: {
    fontSize: 50,
    fontWeight: 'bold',
    color: 'black',
  },
  blackCircle: {
    position: 'absolute',
    backgroundColor: 'black',
    borderRadius: 100,
    width: 70,
    height: 70,
    top: 15,
    left: 5,
  },
  iconText: {
    marginTop: 5,
    color: 'black',
    fontFamily: 'SpaceGroteskBold',
  },
});

export default Footer;
