import React, { View } from 'react-native'
import Colors from "../Colors"

export default Tip = ({ children, style }) => (
  <View style={[{
    borderTopWidth: 12,
    borderColor: Colors.lightBeige,
    backgroundColor: Colors.white,
    padding: 10,
    alignItems: 'center',
  }, style]}>
    { children }
  </View>
)
