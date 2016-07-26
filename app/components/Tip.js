import React, { View } from 'react-native'
import { fontFactor } from "../helpers"
import Colors from "../Colors"

export default Tip = ({ children, style }) => (
  <View style={[{
    borderTopWidth: 12,
    borderColor: Colors.lightBeige,
    backgroundColor: Colors.white,
    padding: 10 * fontFactor(),
    alignItems: 'center',
  }, style]}>
    { children }
  </View>
)
