import React, { View, StyleSheet } from 'react-native'
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
        width: 8,
        height: 8,
        borderRadius: 4,
        marginHorizontal: 4,
      }}/>
    )) }
  </View>
)
