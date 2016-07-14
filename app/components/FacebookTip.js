import React from 'react-native'
import Colors from "../Colors"
import Tip from "./Tip"
import Sentence from "./Sentence"
import FacebookButton from "./FacebookButton"

export default FacebookTip = ({ onPress, loading, title }) => (
  <Tip>
    <Sentence style={{
      color: Colors.black,
      fontSize: 10,
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
        width: 220,
      }}
    >
      Conecte sua conta do Facebook
    </FacebookButton>
  </Tip>
)
