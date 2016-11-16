import React, { Component } from 'react'
import { View, Alert } from 'react-native'
import { Actions } from 'react-native-router-flux'
import GoogleAnalytics from 'react-native-google-analytics-bridge'
import GiftedSpinner from 'react-native-gifted-spinner'

import Colors from "../Colors"
import NavBar from "../components/NavBar"
import SetLocation from "../components/SetLocation"

export default class EditLocation extends Component {
  componentDidMount() {
    GoogleAnalytics.trackScreenView('EditLocation')
  }

  handleBack() {
    const { addressChanged } = this.props.location
    if (!addressChanged) {
      Actions.pop()
      return
    }
    Alert.alert(
      'Cancelar alterações?',
      'Você ainda não confirmou seu novo endereço. Deseja cancelar as alterações?',
      [{ text: 'Não', style: 'cancel' }, { text: 'Sim', onPress: () => {
        Actions.pop()
      }}]
    )
  }

  render() {
    const { location: { startingUp } } = this.props
    return(
      <View style={{
        flex: 1,
        backgroundColor: Colors.white,
      }}>
        <NavBar title="Alterar endereço" onBack={this.handleBack.bind(this)} />
        { startingUp ? <GiftedSpinner style={{ marginTop: 20 }} /> : <SetLocation {...this.props} /> }
      </View>
    )
  }
}
