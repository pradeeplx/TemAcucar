import React, { Component } from 'react'
import { Text } from 'react-native'
import GoogleAnalytics from 'react-native-google-analytics-bridge'
import { Actions } from 'react-native-router-flux'

import SimpleScreen from "../components/SimpleScreen"
import Button from "../components/Button"
import BottomView from "../components/BottomView"
import BottomButton from "../components/BottomButton"

export default class SignInFailed extends Component {
  componentDidMount() {
    GoogleAnalytics.trackScreenView('SignInFailed')
  }

  render() {
    return(
      <SimpleScreen headline="Ooops! Seu login falhou :(">
        <TextBox style={{marginBottom: 30}}>
          Se você está cadastrado na versão antiga do Tem Açúcar, precisa criar uma nova senha.
        </TextBox>
        <Button onPress={Actions.signInForm}>
          Tentar outra vez
        </Button>
        <BottomView>
          <BottomButton onPress={Actions.requestPassword}>
            Criar nova senha
          </BottomButton>
        </BottomView>
      </SimpleScreen>
    )
  }
}
