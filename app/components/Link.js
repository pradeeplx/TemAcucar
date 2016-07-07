import React, { TouchableOpacity } from 'react-native'
import Colors from "../Colors"
import Sentence from "./Sentence"

export default Link = ({ style, onPress, children }) => (
  <TouchableOpacity onPress={onPress}>
    <Sentence style={[{
      fontSize: 14,
      color: Colors.brown,
    }, style]}>
      {children}
    </Sentence>
  </TouchableOpacity>
)
