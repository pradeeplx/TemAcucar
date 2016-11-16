import React from 'react'
import Colors from "../Colors"
import Button from "./Button"

export default FacebookButton = (props) => (
  <Button
    activityIndicatorColor={Colors.white}
    {...props}
    style={[{
      backgroundColor: Colors.facebook,
      borderColor: Colors.facebook,
    }, props.style]}
    textStyle={[{
      color: Colors.white,
    }, props.textStyle]}
  >
    {props.children}
  </Button>
)
