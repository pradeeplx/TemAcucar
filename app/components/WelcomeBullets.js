import React from 'react'
import { View, StyleSheet } from 'react-native'
import { fontFactor } from "../helpers"
import Colors from "../Colors"

export default WelcomeBullets = ({ active }) => (
  <View style={{
    flexDirection: 'row',
    marginVertical: 20,
  }}>
    { [1, 2, 3, 4, 5].map((index) => (
      <View key={index} style={{
        backgroundColor: (active === index ? Colors.blue : Colors.white),
        borderColor: (active === index ? Colors.blue : Colors.gray),
        borderWidth: StyleSheet.hairlineWidth,
        width: 8 * fontFactor(),
        height: 8 * fontFactor(),
        borderRadius: 4 * fontFactor(),
        marginHorizontal: 4 * fontFactor(),
      }}/>
    )) }
  </View>
)
