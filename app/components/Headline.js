import React, { Platform } from 'react-native'
import Colors from "../Colors"
import Sentence from "./Sentence"

export default Headline = (props) => (
  <Sentence style={[{
    color: Colors.gray,
    fontSize: 16,
    textAlign: 'center',
    marginHorizontal: 20,
    marginBottom: 20,
  }, (Platform.OS === 'ios' ? { fontFamily: 'Avenir-Medium' } : { fontWeight: 'bold' }), props.style]}>
    {props.children}
  </Sentence>
)
