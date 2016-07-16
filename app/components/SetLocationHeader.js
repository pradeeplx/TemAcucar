import React, { View, Platform, StyleSheet } from 'react-native'
import Colors from "../Colors"
import Headline from "./Headline"

export default SetLocationHeader = (props) => (
  <View style={{
    borderColor: Colors.pink,
    borderBottomWidth: StyleSheet.hairlineWidth,
    alignSelf: 'stretch',
  }}>
    <Headline style={{
      marginTop: (Platform.OS === 'ios' ? 10 : 5),
      marginBottom: 5,
    }}>
      Onde você mora?
    </Headline>
  </View>
)
