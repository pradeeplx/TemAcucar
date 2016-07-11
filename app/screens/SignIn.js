import React, { Component, Text } from 'react-native'
import GoogleAnalytics from 'react-native-google-analytics-bridge'
import { Actions } from 'react-native-router-flux'

import Colors from "../Colors"
import SimpleScreen from "../components/SimpleScreen"
import BottomView from "../components/BottomView"
import BottomButton from "../components/BottomButton"
import Button from "../components/Button"
import SignUpLink from "../components/SignUpLink"

export default class SignIn extends Component {
  componentDidMount() {
    GoogleAnalytics.trackScreenView('SignIn')
  }

  render() {
    const { onFacebook } = this.props
    return(
      <SimpleScreen navBar={true} navBarTitle="Já possui cadastro?" logo="complete">
        <Button onPress={Actions.signInForm} style={{marginBottom: 20}}>
          Entre com seu e-mail
        </Button>
        <SignUpLink />
        <BottomView>
          <BottomButton onPress={onFacebook} style={{ backgroundColor: Colors.facebook }}>
            Entre com seu Facebook
          </BottomButton>
        </BottomView>
      </SimpleScreen>
    )
  }
}
