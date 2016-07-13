import React, { Platform } from 'react-native'
import ReactNativeButton from 'apsl-react-native-button'
import Colors from "../Colors"

export default BottonButton = (props) => {
  const { secondary, buttonsCount, viewWidth, children, style, textStyle, disabledStyle } = props
  return (
    <ReactNativeButton 
      activityIndicatorColor={Colors.white}
      {...props}
      textStyle={[{
        textAlign: 'center',
        color: Colors.white,
        fontSize: 14,
      }, (Platform.OS === 'ios' ? { fontFamily: 'Avenir-Black' } : { fontWeight: 'bold' }), textStyle]}
      disabledStyle={[{
        opacity: 0.6,
      }, disabledStyle]}
      style={[{
        flex: 1,
        alignSelf: 'stretch',
        height: 70,
        backgroundColor: (secondary ? Colors.beige : Colors.pink),
        borderWidth: 0,
        borderRadius: 0,
        paddingHorizontal: 0,
        paddingVertical: 0,
        marginBottom: 0,
        width: (viewWidth / buttonsCount)
      }, style]}
    >
      {children}
    </ReactNativeButton>
  )
}
