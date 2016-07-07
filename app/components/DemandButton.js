import React from 'react-native'
import Button from "./Button"

export default DemandButton = (props) => (
  <Button
    {...props}
    style={[{
      flex: 1,
      paddingVertical: 0,
      height: 30,
    }, props.style]}
  >
    {props.children}
  </Button>
)
