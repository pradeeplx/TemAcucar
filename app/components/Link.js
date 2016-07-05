import React, { Text, TouchableOpacity } from 'react-native'
import Colors from "../Colors"

export default Link = ({ style, onPress, children }) => (
  <TouchableOpacity onPress={onPress}>
    <Text style={[{
      fontFamily: 'Avenir',
      fontSize: 14,
      color: Colors.brown,
    }, style]}>
      {children}
    </Text>
  </TouchableOpacity>
)
