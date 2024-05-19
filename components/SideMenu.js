// SideMenu.js
import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const SideMenu = ({ closeMenu }) => {
  return (
    <View style={styles.menuContainer}>
      {/* 메뉴 내용 */}
      <TouchableOpacity activeOpacity={0.8} style={styles.menuItem} onPress={closeMenu}>
        <Text style={styles.menuText}>Menu Item 1</Text>
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.8} style={styles.menuItem} onPress={closeMenu}>
        <Text style={styles.menuText}>Menu Item 2</Text>
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.8} style={styles.menuItem} onPress={closeMenu}>
        <Text style={styles.menuText}>Menu Item 3</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  menuContainer: {
    flex: 1, // 화면에 꽉 차도록 설정
    backgroundColor: '#ffffff',
    paddingTop: 100, // 메뉴 아이템들을 위에서 많이 떨어뜨림
    paddingHorizontal: 20,
  },
  menuItem: {
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#dddddd',
  },
  menuText: {
    fontSize: 18,
    fontFamily: 'SpaceGroteskRegular',
  },
});

export default SideMenu;
