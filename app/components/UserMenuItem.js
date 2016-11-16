import React from 'react'
import { View, TouchableOpacity } from 'react-native'
import { fontFactor } from "../helpers"
import Colors from "../Colors"
import Sentence from "./Sentence"
import Icon from "./Icon"

export default UserMenuItem = ({ onPress, style, icon, iconSet, iconStyle, children, type }) => (
  <TouchableOpacity onPress={onPress} style={[{
    alignSelf: 'stretch',
    padding: 10,
    paddingBottom: 0,
    flexDirection: 'row',
    alignItems: 'center'
  }, style]}>
    <View style={{
      alignItems: 'center',
      width: 24 * fontFactor(),
    }}>
      <Icon name={icon} set={iconSet} style={[{
        fontSize: 24 * fontFactor(),
        color: (type == "light" ? Colors.white : Colors.white),
      }, iconStyle]} />
    </View>
    <Sentence style={{
      marginLeft: 8,
      fontSize: 16 * fontFactor(),
      color: (type == "light" ? Colors.white : Colors.white),
    }}>
      {children}
    </Sentence>
  </TouchableOpacity>
)
