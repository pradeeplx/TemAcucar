import React from 'react'
import { Platform, View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { fontFactor } from "../helpers"
import Colors from "../Colors"
import Sentence from "./Sentence"
import LogoIcon from "./LogoIcon"
import Icon from "./Icon"

export default TopBar = ({ onMenuOpen }) => (
  <View style={{
    marginTop: (Platform.OS == 'ios' ? 20 : 0),
    height: 40 * fontFactor(),
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    borderColor: Colors.pink,
    borderBottomWidth: 1,
  }}>
    <View style={{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <Sentence style={[{
        fontSize: 14 * fontFactor(),
      }, (Platform.OS === 'ios' ? { fontFamily: 'Avenir-Black' } : { fontWeight: 'bold' })]}>
        Tem Açúcar?
      </Sentence>
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
        fontSize: 28 * fontFactor(),
      }} />
    </TouchableOpacity>
  </View>
)
