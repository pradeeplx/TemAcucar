import React, { Text, Platform } from 'react-native'
import { fontFactor } from "../helpers"
import Colors from "../Colors"

export default Sentence = (props) => (
  <Text style={[{
    color: Colors.brown,
    fontFamily: (Platform.OS === 'ios' ? 'Avenir' : 'Roboto'),
    fontSize: 12 * fontFactor(),
  }, props.style]}>
    {props.children}
  </Text>
)
