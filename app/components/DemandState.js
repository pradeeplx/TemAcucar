import React, { View } from 'react-native'
import Colors from "../Colors"

export default DemandState = ({ state, style }) => (
  <View style={[{
    borderRadius: 4,
    backgroundColor: (state === 'completed' ? Colors.green : (state === 'canceled' ? Colors.red : Colors.gray)),
    paddingVertical: 5,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  }, style]}>
    <Icon name={(state === 'completed' ? 'ios-checkmark-circle-outline' : (state === 'canceled' ? 'ios-close-circle-outline' : (state === 'flagged' ? 'report' : 'ios-time-outline')))} style={{ 
      color: Colors.white,
      fontSize: 14,
      marginRight: 6,
    }} />
    <Sentence style={{
      fontSize: 8,
      color: Colors.white,
    }}>
      {(state === 'completed' ? 'Bem-sucedido' : (state === 'canceled' ? 'Cancelado' : (state === 'notifying' ? 'Perguntando pros vizinhos' : (state === 'flagged' ? 'Denunciado como impróprio' : 'Em andamento'))))}
    </Sentence>
  </View>
)
