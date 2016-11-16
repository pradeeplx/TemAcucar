import React from 'react'
import { View } from 'react-native'
import Colors from "../Colors"

export default WelcomeView = ({ children, style }) => (
  <View style={[{
    flex: 1,
    alignItems: 'center',
    backgroundColor: Colors.white,
  }, style]}>
    { children }
  </View>
)
