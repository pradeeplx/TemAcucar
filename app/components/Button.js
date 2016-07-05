import React from 'react-native'
import ReactNativeButton from 'apsl-react-native-button'
import Colors from "../Colors"

export default Button = (props) => (
  <ReactNativeButton 
    {...props}
    activityIndicatorColor={Colors.white}
    textStyle={[{
      textAlign: 'center',
      color: Colors.white,
      fontSize: 12,
      fontFamily: 'Avenir',
      lineHeight: 16,
    }, props.textStyle]}
    disabledStyle={[{
      opacity: 0.6,
    }, props.disabledStyle]}
    style={[{
      height: 36,
      alignSelf: 'center',
      borderWidth: 0,
      borderRadius: 24,
      paddingHorizontal: 30,
      paddingVertical: 0,
      backgroundColor: Colors.pink,
      marginBottom: 0,
    }, props.style]}
  >
    {props.children}
  </ReactNativeButton>
)
