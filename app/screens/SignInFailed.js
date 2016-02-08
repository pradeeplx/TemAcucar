import React, { Text } from 'react-native'
import { Actions } from 'react-native-router-flux'

import StyleSheets from "../styles/StyleSheets"
import SimpleScreen from "../components/SimpleScreen"
import Button from "../components/Button"

export default SignInFailed = () => (
  <SimpleScreen headline="Ooops! Seu login falhou :(">
    <Text style={[StyleSheets.label, StyleSheets.bigMarginBottom]}>
      Se você é usuário da versão antiga do Tem Açúcar, vai ser preciso criar uma nova senha.
    </Text>
    <Button onPress={Actions.requestPassword}>
      Criar uma nova senha
    </Button>
    <Text style={[StyleSheets.label, StyleSheets.margin]}>ou</Text>
    <Button onPress={Actions.signIn}>
      Tentar uma vez mais
    </Button>
  </SimpleScreen>
)