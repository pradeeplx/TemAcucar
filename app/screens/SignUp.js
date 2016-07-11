import React, { Component, Text } from 'react-native'
import GoogleAnalytics from 'react-native-google-analytics-bridge'
import { Actions } from 'react-native-router-flux'

import Colors from "../Colors"
import SimpleScreen from "../components/SimpleScreen"
import Button from "../components/Button"
import BottomView from "../components/BottomView"
import BottomButton from "../components/BottomButton"
import SignInLink from "../components/SignInLink"

export default class SignUp extends Component {
  componentDidMount() {
    GoogleAnalytics.trackScreenView('SignUp')
  }

  render() {
    const { onFacebook } = this.props
    return(
      <SimpleScreen navBar={true} navBarTitle="Quer se cadastrar?"  logo="complete">
        <Button onPress={Actions.signUpForm} style={{marginBottom: 20}}>
          Cadastre-se com seu e-mail
        </Button>
        <SignInLink />
        <BottomView>
          <BottomButton onPress={onFacebook} style={{ backgroundColor: Colors.facebook }}>
            Cadastre-se com o Facebook
          </BottomButton>
        </BottomView>
      </SimpleScreen>
    )
  }
}
