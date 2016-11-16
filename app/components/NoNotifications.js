import React from 'react'
import { fontFactor } from "../helpers"
import Colors from "../Colors"
import Sentence from "./Sentence"

export default NoNotifications = () => (
  <Sentence style={{
    alignSelf: 'stretch',
    margin: 10,
    textAlign: 'center',
    fontSize: 10 * fontFactor(),
  }}>
    Nenhuma novidade ainda. Que tal começar a interagir agora mesmo fazendo um pedido?
  </Sentence>
)
