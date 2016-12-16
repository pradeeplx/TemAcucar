import React from 'react'
import Colors from "../Colors"
import Button from "./Button"

export default FacebookButton = ({ style, textStyle, children }, ...props) => (
  <Button
    activityIndicatorColor={Colors.white}
    {...props}
    style={[{
      backgroundColor: Colors.facebook,
      borderColor: Colors.facebook,
    }, style]}
    textStyle={[{
      color: Colors.white,
    }, textStyle]}
  >
    {children}
  </Button>
)
