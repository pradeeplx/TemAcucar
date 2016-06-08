import React, { Platform, View, Text, TouchableOpacity } from 'react-native'
import Colors from "../Colors"
import Sentence from "./Sentence"
import LogoIcon from "./LogoIcon"
import Icon from "./Icon"

export default TopBar = ({ onMenuOpen }) => (
  <View style={{
    marginTop: (Platform.OS == 'ios' ? 20 : 0),
    height: 36,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
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
      <Icon name="menu" style={{
        color: Colors.yellow,
        fontSize: 28,
      }} />
    </TouchableOpacity>
  </View>
)
