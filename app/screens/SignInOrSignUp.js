import React, { Component } from 'react'
import { View } from 'react-native'
import GoogleAnalytics from 'react-native-google-analytics-bridge'
import { Actions } from 'react-native-router-flux'

import SimpleScreen from "../components/SimpleScreen"
import Button from "../components/Button"
import BottomView from "../components/BottomView"
import BottomButton from "../components/BottomButton"

export default class SignInOrSignUp extends Component {
  componentDidMount() {
    GoogleAnalytics.trackScreenView('SignInOrSignUp')
  }

  render() {
    return(
      <SimpleScreen logo="complete" headline="Compartilhe coisas com seus vizinhos">
        <Button onPress={Actions.signInForm}>
          Já tenho cadastro
        </Button>
        <BottomView>
          <BottomButton onPress={Actions.signUpForm}>
            Quero me cadastrar
          </BottomButton>
        </BottomView>
      </SimpleScreen>
    )
  }
}
