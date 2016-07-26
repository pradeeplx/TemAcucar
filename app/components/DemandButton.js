import React from 'react-native'
import { fontFactor } from "../helpers"
import Button from "./Button"

export default DemandButton = (props) => (
  <Button
    {...props}
    style={[{
      flex: 1,
      paddingVertical: 0,
      height: 30 * fontFactor(),
    }, props.style]}
  >
    {props.children}
  </Button>
)
