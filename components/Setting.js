import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, StatusBar, ScrollView, Touchable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Footer from './Footer';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Setting = ({isLoggedIn, setIsLoggedIn }) => {
    const navigation = useNavigation();
    const route = useRoute();

    const goBack = () => {
        navigation.goBack();
    };
    const goToMyinfo = () => {
        navigation.navigate('Myinfo');
    };
    // const handleLogout = async () => {
    //     try {
    //         setIsLoggedIn(false);
    //         await AsyncStorage.setItem('isLoggedIn', JSON.stringify(false));
    //         navigation.navigate('Login');
    //     } catch (error) {
    //         console.error('Error during logout:', error);
    //     }
    // };
    const handleLogout = async () => {
        try {
          const response = await fetch('http://172.16.2.102:3000/api/buddy/logout', {
            method: 'POST',
          });
      
          if (response.ok) {
            setIsLoggedIn(false); 
            await AsyncStorage.removeItem('isloggedIn'); 
            navigation.navigate('Main');
          } else {
            throw new Error('response.ok안됨');
          }
        } catch (error) {
          console.error('로그아웃 오류:', error);
          alert('로그아웃에 실패했습니다.');
        }
      };

    return (
        <View style={styles.container}>
            <ScrollView style={styles.scrollViewContent} contentContainerStyle={styles.scrollViewContainer}>
                <View style={styles.header}>
                    <StatusBar backgroundColor="white" barStyle="dark-content" />
                    {route.name !== 'Main' && (
                        <TouchableOpacity activeOpacity={0.8} style={styles.backButton} onPress={goBack}>
                            <Ionicons name="arrow-back" size={27} color="black" />
                        </TouchableOpacity>
                    )}
                    <Text style={styles.headerTitle}>Settings</Text>
                </View>
                <View style={styles.bodyContainer}>
                    <View style={styles.containerContainer}>
                <TouchableOpacity activeOpacity={0.8} style = {styles.elementsContainer} onPress={goToMyinfo}>
                <View style={styles.elements}>
                <MaterialCommunityIcons name="account-outline" size={40} color="black"  />
                <Text style = {styles.accountText}>account</Text>
                </View>
                </TouchableOpacity>

                <View style={styles.borderTop}></View>
                <TouchableOpacity activeOpacity={0.8} style = {styles.elementsContainer} onPress={handleLogout}>
                <View style={styles.elements}>
                <MaterialCommunityIcons name="exit-to-app" size={40} color="black" />
                <Text style = {styles.accountText}>Logout</Text>
                </View>
                </TouchableOpacity>

                <View style={styles.borderTop}></View>
                <TouchableOpacity activeOpacity={0.8} style = {styles.elementsContainer}>
                <View style={styles.elements}>
                <MaterialCommunityIcons name="account-outline" size={40} color="black"  />
                <Text style = {styles.accountText}>setting2</Text>
                </View>
                </TouchableOpacity>

                <View style={styles.borderTop}></View>
                <TouchableOpacity activeOpacity={0.8} style = {styles.elementsContainer}>
                <View style={styles.elements}>
                <MaterialCommunityIcons name="account-outline" size={40} color="black"  />
                <Text style = {styles.accountText}>setting3</Text>
                </View>
                </TouchableOpacity>
                <View style={styles.borderTop}></View>
                <View style = {styles.elementsContainer}>
                <View style={styles.elements}>
                <Text style = {styles.accountText}>version</Text>
                <Text style = {styles.accountText2}>0.0.0.1</Text>
                </View>
                </View>
                </View>
                </View>
            </ScrollView>
            <Footer />
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fafad2',
    },
    bodyContainer : {
        backgroundColor : 'white',
        width : '95%',
        marginTop : 10,
        justifyContent : 'center',
        marginLeft : 'auto',
        marginRight : 'auto',
        paddingBottom : 30,
        height : '75%',
        borderWidth : 1.5,
        borderColor : 'black',
        borderRadius : 15,
    },
    containerContainer : {
        marginTop : '-60%',
    },
    scrollViewContent: {
        flex: 1,
    },
    scrollViewContainer: {
        flexGrow: 1,
    },
    borderTop: {
        borderWidth: 0.5,
        borderColor: 'lightgray',
        marginTop: 0,
        width: '90%',
        marginLeft: '5%',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        paddingVertical: 15,
        paddingHorizontal: 20,
        marginTop: 10,
        width : '100%',
    },
    headerTitle: {
        fontSize: 28,
        color: 'black',
        fontFamily: 'SpaceGroteskBold',
        marginTop: 15,
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    backButton: {
        marginTop: 20,
        marginRight: 10,
    },
    elementsContainer: {
        paddingHorizontal: 20,
        paddingVertical : 10,
    },
    elements: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    accountText: {
        marginTop: 5,
        fontSize: 30,
        fontFamily: 'SpaceGroteskBold',
        marginLeft: 10,
    },
    accountText2 : {
        fontSize : 25,
        fontFamily : 'spaceGroteskRegular',
        marginTop : 10,
        color : 'grey',
        marginLeft: 'auto',
        marginRight : 10,
    },
});

export default Setting;
