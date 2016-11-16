import React from 'react'
import { Platform } from 'react-native'
import Sentence from "./Sentence"

export default TextBox = (props) => (
  <Sentence style={[{
    marginHorizontal: 16,
    textAlign: 'center',
  }, props.style]}>
    {props.children}
  </Sentence>
)
