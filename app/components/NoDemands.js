import React from 'react-native'
import { fontFactor } from "../helpers"
import Colors from "../Colors"
import Sentence from "./Sentence"
import Tip from "./Tip"

export default NoDemands = ({ text }) => (
  <Tip style={{borderTopWidth: 0}}>
    <Sentence style={{
      alignSelf: 'stretch',
      marginHorizontal: 10,
      textAlign: 'center',
      fontSize: 10 * fontFactor(),
    }}>
      { `${text || 'Você ainda não recebeu pedidos dos seus vizinhos'}. Que tal agitar sua vizinhança pedindo algo que você precisa?` }
    </Sentence>
  </Tip>
)
