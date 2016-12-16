import React from 'react'
import { Platform, StyleSheet } from 'react-native'
import { fontFactor } from "../helpers"
import ReactNativeButton from 'apsl-react-native-button'
import Colors from "../Colors"

export default Button = ({ textStyle, disabledStyle, secondary, style, children }, ...props) => (
  <ReactNativeButton
    activityIndicatorColor={secondary ? Colors.white : Colors.pink}
    {...props}
    textStyle={[{
      textAlign: 'center',
      color: (secondary ? Colors.white : Colors.pink),
      fontSize: (secondary ? 10 : 12) * fontFactor(),
      fontFamily: (Platform.OS === 'ios' ? 'Avenir' : 'Roboto'),
    }, textStyle]}
    disabledStyle={[{
      opacity: 0.6,
    }, disabledStyle]}
    style={[{
      height: (secondary ? 24 : 36) * fontFactor(),
      alignSelf: 'center',
      borderRadius: (secondary ? 12 : 18) * fontFactor(),
      paddingHorizontal: (secondary ? 20 : 30),
      paddingVertical: 0,
      marginBottom: 0,
      borderWidth: StyleSheet.hairlineWidth,
      borderColor: (secondary ? Colors.white : Colors.gray),
    }, style]}
  >
    {children}
  </ReactNativeButton>
)
