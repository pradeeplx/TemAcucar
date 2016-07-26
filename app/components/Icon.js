import React from 'react-native'
import Ionicon from 'react-native-vector-icons/Ionicons'
import { fontFactor } from "../helpers"
import Colors from "../Colors"

export default Icon = ({name, set, size, color, style}) => {
  return (
    <Ionicon
      name={name || 'account-circle'}
      size={size || (18 * fontFactor())}
      color={color || Colors.brown}
      style={[{
        // marginHorizontal: 10,
      }, style]}
    />
  )
}
