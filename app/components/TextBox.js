import React from 'react'
import { Platform } from 'react-native'
import Sentence from "./Sentence"

export default TextBox = ({ style, children }) => (
  <Sentence style={[{
    marginHorizontal: 16,
    textAlign: 'center',
  }, style]}>
    {children}
  </Sentence>
)
