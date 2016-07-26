import React from 'react-native'
import { fontFactor } from "../helpers"
import Colors from "../Colors"
import TextBox from "./TextBox"

export default OrSeparator = () => (
  <TextBox style={{
    margin: 10,
    fontSize: 14 * fontFactor(),
    color: Colors.gray,
  }}>
    ou
  </TextBox>
)
