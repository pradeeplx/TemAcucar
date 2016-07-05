import React, { Platform, View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import Colors from "../Colors"
import Sentence from "./Sentence"
import LogoIcon from "./LogoIcon"
import Icon from "./Icon"

export default TopBar = ({ onMenuOpen }) => (
  <View style={{
    marginTop: (Platform.OS == 'ios' ? 20 : 0),
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    borderColor: Colors.pink,
    borderBottomWidth: StyleSheet.hairlineWidth,
  }}>
    <View style={{
      flex: 1, 
      flexDirection: 'row', 
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      {true == true && <LogoIcon />}
    </View>
    <TouchableOpacity onPress={onMenuOpen} style={{
      paddingHorizontal: 10,
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      justifyContent: 'center',
    }}>
      <Icon name="ios-menu" style={{
        color: Colors.brown,
        fontSize: 28,
      }} />
    </TouchableOpacity>
  </View>
)
