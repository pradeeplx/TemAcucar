import React, { Text } from 'react-native'
import Colors from "../Colors"

export default Headline = (props) => (
  <Text style={[{
    fontFamily: 'Avenir',
    color: Colors.gray,
    fontSize: 16,
    lineHeight: 18,
    textAlign: 'center',
    marginHorizontal: 20,
    marginBottom: 20,
  }, props.style]}>
    {props.children}
  </Text>
)
