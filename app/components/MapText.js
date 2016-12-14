import React from 'react'
import { View, Image, Platform } from 'react-native'
import { fontFactor } from "../helpers"
import Colors from "../Colors"
import Sentence from "./Sentence"

export default MapText = ({ children }) => (
  <View style={{
    position: 'absolute',
    bottom: 6,
    left: 0,
    right: 0,
    alignItems: 'center',
  }}>
    <View style={{
      backgroundColor: Colors.white,
      paddingVertical: 3,
      paddingHorizontal: 30,
      borderRadius: 12,
    }}>
      <Sentence style={[{
        color: Colors.blue,
        textAlign: 'center',
        fontSize: 10 * fontFactor(),
      }, (Platform.OS === 'ios' ? { fontFamily: 'Avenir-Black' } : { fontWeight: 'bold' })]}>
        { children }
      </Sentence>
    </View>
  </View>
)
