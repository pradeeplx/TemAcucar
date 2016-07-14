import React, { Platform, StyleSheet } from 'react-native'
import ReactNativeButton from 'apsl-react-native-button'
import Colors from "../Colors"

export default Button = (props) => (
  <ReactNativeButton 
    activityIndicatorColor={props.secondary ? Colors.white : Colors.pink}
    {...props}
    textStyle={[{
      textAlign: 'center',
      color: (props.secondary ? Colors.white : Colors.pink),
      fontSize: (props.secondary ? 10 : 12),
      fontFamily: (Platform.OS === 'ios' ? 'Avenir' : 'Roboto'),
    }, props.textStyle]}
    disabledStyle={[{
      opacity: 0.6,
    }, props.disabledStyle]}
    style={[{
      height: (props.secondary ? 24 : 36),
      alignSelf: 'center',
      borderRadius: (props.secondary ? 12 : 18),
      paddingHorizontal: (props.secondary ? 20 : 30),
      paddingVertical: 0,
      marginBottom: 0,
      borderWidth: StyleSheet.hairlineWidth,
      borderColor: (props.secondary ? Colors.white : Colors.gray),
    }, props.style]}
  >
    {props.children}
  </ReactNativeButton>
)
