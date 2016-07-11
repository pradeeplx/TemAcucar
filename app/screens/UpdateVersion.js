import React, { Component, Text } from 'react-native'
import GoogleAnalytics from 'react-native-google-analytics-bridge'

import SimpleScreen from "../components/SimpleScreen"
import Button from "../components/Button"
import BottomView from "../components/BottomView"
import BottomButton from "../components/BottomButton"

export default class UpdateVersion extends Component {
  componentDidMount() {
    GoogleAnalytics.trackScreenView('UpdateVersion')
  }

  render() {
    const { onIgnore, onUpdate, daysRemaining } = this.props
    return(
      <SimpleScreen headline="Nova versão disponível">
        <TextBox style={{marginBottom: 30}}>
          Há uma nova versão disponível. { daysRemaining <= 14 && `Sua versão vai expirar em ${daysRemaining} ${( daysRemaining == 1 ? 'dia' : 'dias')}. ` }Que tal atualizar?
        </TextBox>
        <Button onPress={onIgnore}>
          Continuar com a versão atual
        </Button>
        <BottomView>
          <BottomButton onPress={onUpdate}>
            Atualizar para a nova versão
          </BottomButton>
        </BottomView>
      </SimpleScreen>
    )    
  }
}
