import React from 'react'
import { fontFactor } from "../helpers"
import Colors from "../Colors"
import Sentence from "./Sentence"

export default NoTransactionDemands = () => (
  <Sentence style={{
    alignSelf: 'stretch',
    margin: 10,
    textAlign: 'center',
    fontSize: 10 * fontFactor(),
  }}>
    Você ainda não realizou nenhuma transação. Que tal começar agora mesmo fazendo um pedido?
  </Sentence>
)
