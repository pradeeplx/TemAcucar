import React, { Component, View } from 'react-native'
import GoogleAnalytics from 'react-native-google-analytics-bridge'
import { Actions } from 'react-native-router-flux'

import SimpleScreen from "../components/SimpleScreen"
import Button from "../components/Button"
import BottomView from "../components/BottomView"
import BottomButton from "../components/BottomButton"

export default class Welcome extends Component {
  componentDidMount() {
    GoogleAnalytics.trackScreenView('Welcome')
  }

  render() {
    return(
      <SimpleScreen logo="complete" headline="Compartilhe coisas com seus vizinhos">
        <Button onPress={Actions.signIn}>
          Já tenho cadastro
        </Button>
        <BottomView>
          <BottomButton onPress={Actions.signUp}>
            Quero me cadastrar
          </BottomButton>
        </BottomView>
      </SimpleScreen>
    )
  }
}
