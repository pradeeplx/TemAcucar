import React, { View } from 'react-native'

export default BottomView = ({ children, style }) => (
  <View style={[{
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  }, style]}>
    { children }
  </View>
)
