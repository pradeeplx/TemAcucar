import React, { Component, View } from 'react-native'
import GoogleAnalytics from 'react-native-google-analytics-bridge'
import { Actions } from 'react-native-router-flux'

import BorderedScreen from "../components/BorderedScreen"
import Logo from "../components/Logo"
import Headline from "../components/Headline"
import OrSeparator from "../components/OrSeparator"
import Button from "../components/Button"

export default class Welcome extends Component {
  componentDidMount() {
    GoogleAnalytics.trackScreenView('Welcome')
  }

  render() {
    return(
      <BorderedScreen>
        <View style={{
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: 26,
        }}>
          <Logo />
        </View>
        <Headline style={{
          marginHorizontal: 60,
        }}>
          Compartilhe coisas com seus vizinhos
        </Headline>
        <Button onPress={Actions.signUp}>
          Quero me cadastrar
        </Button>
        <OrSeparator />
        <Button onPress={Actions.signIn} style={{paddingHorizontal: 35}}>
          Já tenho cadastro
        </Button>
      </BorderedScreen>
    )
  }
}
