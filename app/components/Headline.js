import React from 'react'
import { Platform } from 'react-native'
import { fontFactor } from "../helpers"
import Colors from "../Colors"
import Sentence from "./Sentence"

export default Headline = (props) => (
  <Sentence style={[{
    color: Colors.gray,
    fontSize: 16 * fontFactor(),
    textAlign: 'center',
    marginHorizontal: 20,
    marginBottom: 20,
  }, (Platform.OS === 'ios' ? { fontFamily: 'Avenir-Medium' } : { fontWeight: 'bold' }), props.style]}>
    {props.children}
  </Sentence>
)
