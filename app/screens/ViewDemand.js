import React, { Component, ScrollView, View, Platform, StyleSheet } from 'react-native'
import GoogleAnalytics from 'react-native-google-analytics-bridge'
import truncate from 'truncate'

import Colors from "../Colors"
import ReviewsContainer from "../containers/ReviewsContainer"
import BottomView from "../components/BottomView"
import BottomButton from "../components/BottomButton"
import Sentence from "../components/Sentence"
import NavBar from "../components/NavBar"
import DemandHeader from "../components/DemandHeader"
import DemandState from "../components/DemandState"
import DemandUserButtons from "../components/DemandUserButtons"

export default class ViewDemand extends Component {
  handleAccept() {
    const { demand, onCreateTransaction } = this.props
    onCreateTransaction(demand)
  }

  handleRefuse() {
    const { demand, onRefuseDemand } = this.props
    onRefuseDemand(demand)
  }

  handleFlag() {
    Alert.alert(
      'Pedido impróprio?',
      'Você tem certeza que quer denunciar este pedido como impróprio?',
      [{ text: 'Não', style: 'cancel' }, { text: 'Sim', onPress: () => {
        const { demand, onFlagDemand } = this.props
        onFlagDemand(demand)
      }}]
    )
  }

  componentDidMount() {
    GoogleAnalytics.trackScreenView('ViewDemand')
  }

  render() {
    const { auth: { currentUser }, demand, transactions, userDemands, adminDemands, onCompleteDemand, onCancelDemand, onReactivateDemand, admin } = this.props
    const { state, creatingTransaction } = demand
    const transactionDemands = transactions.list
    const showUserButtons = (currentUser.id === demand.user.id || (admin && currentUser.admin))
    const showButtons = !showUserButtons && (demand.state === 'notifying' || demand.state === 'active') && transactionDemands.map(demand => demand.id).indexOf(demand.id) < 0
    return (
      <View style={{
        flex: 1,
        alignSelf: 'stretch',
      }}>
        <NavBar title={truncate(demand.name, 30)} />
        <ScrollView style={{
          flex: 1,
          backgroundColor: Colors.white,
          paddingTop: 20,
        }}>
          <View style={{
            alignSelf: 'stretch',
            alignItems: 'center',
            paddingHorizontal: 10,
            paddingBottom: 110,
          }}>
            <View style={{
              flex: 1,
              alignSelf: 'stretch',
              paddingBottom: 20,
              marginBottom: 20,
              borderBottomWidth: StyleSheet.hairlineWidth,
              borderColor: Colors.beige,
            }}>
              <DemandHeader
                demand={demand}
                currentUser={currentUser}
                fullHeader={true} />
              <DemandState state={state} />
            </View>
            <ReviewsContainer {...this.props} user={demand.user} />
          </View>
        </ScrollView>
        { showButtons && <BottomView>
          <BottomButton onPress={this.handleAccept.bind(this)} isLoading={creatingTransaction}>
            Ajudar
          </BottomButton>
          <BottomButton secondary={true} onPress={this.handleRefuse.bind(this)}>
            Não posso
          </BottomButton>
        </BottomView> }
        { showUserButtons && <DemandUserButtons
          admin={admin}
          currentUser={currentUser}
          demand={demand}
          onComplete={onCompleteDemand}
          onCancel={onCancelDemand}
          onReactivate={onReactivateDemand}
        /> }
      </View>
    )
  }
}
