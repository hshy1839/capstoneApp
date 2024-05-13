import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, StatusBar  } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import Login from './Login';

const Header = ({isLoggedIn}) => {
  const navigation = useNavigation();
  const route = useRoute();

  const goBack = () => {
    navigation.goBack();
  };
  const goToLogin = () => {
    navigation.navigate('Login');
  };
  
  return (
    <View style={styles.header}>
      <StatusBar backgroundColor="#66CC99" barStyle="dark-content" />
      {/* 뒤로가기 버튼이 있을 경우에만 렌더링 */}
      {route.name !== 'Main' && (
        <TouchableOpacity style={styles.backButton} onPress={goBack}>
          <Ionicons name="arrow-back" size={27} color="black" />
        </TouchableOpacity>
      )}
      <Text style={styles.headerTitle}>Buddy       </Text>
      {isLoggedIn !== true && (
        <TouchableOpacity style={styles.accountButton} onPress={goToLogin}>
          <Ionicons name="person-circle-outline" size={40} color="black" />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#66CC99',
    borderBottomWidth: 1.5,
    borderBottomColor: 'black',
    paddingVertical: 15,
    paddingHorizontal: 10,
  },
  headerTitle: {
    fontSize: 28,
    color: 'black',
    fontFamily: 'SpaceGroteskBold',
    marginTop : 15,
    marginLeft: 10, // 왼쪽 여백 추가하여 좌측 정렬
  },
  backButton: {
    marginTop: 20,
    marginRight: 10, // 뒤로가기 버튼과의 간격을 조정
  },
  accountButton : {
    marginTop : 18,
    marginLeft : 'auto',
    marginRight : 10,
  },
});

export default Header;
