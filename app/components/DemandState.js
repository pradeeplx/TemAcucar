import React from 'react'
import { View, StyleSheet } from 'react-native'
import { fontFactor } from "../helpers"
import Colors from "../Colors"

export default DemandState = ({ state, style }) => (
  <View style={[{
    borderRadius: 4,
    borderColor: Colors.white,
    borderWidth: StyleSheet.hairlineWidth,
    paddingVertical: 2,
    paddingHorizontal: 6,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  }, style]}>
    <Icon name={(state === 'completed' ? 'ios-checkmark-circle-outline' : (state === 'canceled' ? 'ios-close-circle-outline' : (state === 'flagged' ? 'ios-warning-outline' : 'ios-time-outline')))} style={{
      color: Colors.white,
      fontSize: 14 * fontFactor(),
      marginRight: 6,
    }} />
    <Sentence style={{
      fontSize: 8 * fontFactor(),
      color: Colors.white,
    }}>
      {(state === 'completed' ? 'Bem-sucedido' : (state === 'canceled' ? 'Cancelado' : (state === 'notifying' ? 'Perguntando pros vizinhos' : (state === 'flagged' ? 'Denunciado como impróprio' : 'Em andamento'))))}
    </Sentence>
  </View>
)
