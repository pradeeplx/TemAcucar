import React, { Component, Text } from 'react-native'
import GoogleAnalytics from 'react-native-google-analytics-bridge'
import { Actions } from 'react-native-router-flux'

import { fontFactor } from "../helpers"
import SimpleScreen from "../components/SimpleScreen"
import Headline from "../components/Headline"
import TextBox from "../components/TextBox"
import Button from "../components/Button"
import BottomView from "../components/BottomView"
import BottomButton from "../components/BottomButton"

export default class ReviewEmail extends Component {
  componentDidMount() {
    GoogleAnalytics.trackScreenView('ReviewEmail')
    this.props.onShowToast()
  }

  render() {
    const { auth: { currentUser: { email } }, onConfirm } = this.props
    return(
      <SimpleScreen>
        <Headline style={{
          fontSize: 14 * fontFactor(),
          marginBottom: 10
        }}>
          {email}
        </Headline>
        <TextBox style={{marginBottom: 20}}>
          Você usa esse e-mail diariamente? Não vamos te mandar spam mas precisamos do seu e-mail para te conectar com seus vizinhos.
        </TextBox>
        <Button onPress={Actions.updateEmail} style={{paddingHorizontal: 34}}>
          Não, quero alterar
        </Button>
        <BottomView>
          <BottomButton onPress={onConfirm}>
            Sim, uso este e-mail
          </BottomButton>
        </BottomView>
      </SimpleScreen>
    )
  }
}
