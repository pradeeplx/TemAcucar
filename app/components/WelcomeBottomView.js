import React, { View, Platform, Dimensions } from 'react-native'
import Colors from "../Colors"

export default WelcomeBottomView = ({ children, style }) => {
  const dimensions = Dimensions.get('window')
  const height = dimensions.height * dimensions.scale
  const smallScreen = height <= 320
  return (
    <View style={[{
      position: 'absolute',
      bottom: (smallScreen ? 154 : (Platform.OS === 'ios' ? 32 : 60)),
      left: 0,
      right: 0,
      alignItems: 'center',
    }, style]}>
      { children }
    </View>
  )
}
