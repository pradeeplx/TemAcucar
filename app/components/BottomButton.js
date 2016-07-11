import React, { Platform } from 'react-native'
import ReactNativeButton from 'apsl-react-native-button'
import Colors from "../Colors"

export default BottonButton = (props) => (
  <ReactNativeButton 
    {...props}
    activityIndicatorColor={Colors.white}
    textStyle={[{
      textAlign: 'center',
      color: Colors.white,
      fontSize: 14,
      fontFamily: (Platform.OS === 'ios' ? 'Avenir' : 'Roboto'),
    }, props.textStyle]}
    disabledStyle={[{
      opacity: 0.6,
    }, props.disabledStyle]}
    style={[{
      flex: 1,
      height: 70,
      backgroundColor: Colors.pink,
      borderWidth: 0,
      borderRadius: 0,
      alignSelf: 'stretch',
      paddingHorizontal: 0,
      paddingVertical: 0,
      marginBottom: 0,
    }, props.style]}
  >
    {props.children}
  </ReactNativeButton>
)
