import React, { View, Image, Dimensions } from 'react-native'
import Colors from "../Colors"

export default MapText = ({ children }) => (
  <View style={{
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,0.25)',
  }}>
    <Sentence style={{
      color: Colors.white, 
      textAlign: 'center',
      paddingVertical: 3,
    }}>
      { children }
    </Sentence>
  </View>
)
