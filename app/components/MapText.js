import React, { View, Image, Dimensions } from 'react-native'
import Colors from "../Colors"

export default MapText = ({ children }) => (
  <View style={{
    position: 'absolute',
    bottom: 10,
    left: 0,
    right: 0,
    alignItems: 'center',
  }}>
    <View style={{
      backgroundColor: Colors.white,
      paddingVertical: 4,
      paddingHorizontal: 30,
      borderRadius: 12,
    }}>
      <Sentence style={{
        color: Colors.blue, 
        textAlign: 'center',
      }}>
        { children }
      </Sentence>
    </View>
  </View>
)
