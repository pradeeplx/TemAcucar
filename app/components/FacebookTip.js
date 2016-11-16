import React from 'react'
import { fontFactor } from "../helpers"
import Colors from "../Colors"
import Tip from "./Tip"
import Sentence from "./Sentence"
import FacebookButton from "./FacebookButton"

export default FacebookTip = ({ onPress, loading, title }) => (
  <Tip>
    <Sentence style={{
      color: Colors.black,
      fontSize: 10 * fontFactor(),
      marginBottom: 10,
      textAlign: 'center',
      marginHorizontal: 40,
    }}>
      { title || 'Quer ter acesso a funcionalidades incríveis?' }
    </Sentence>
    <FacebookButton
      onPress={onPress}
      isLoading={loading}
      style={{
        width: 220 * fontFactor(),
      }}
    >
      Conecte sua conta do Facebook
    </FacebookButton>
  </Tip>
)
