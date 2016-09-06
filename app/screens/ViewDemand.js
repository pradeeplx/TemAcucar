import React, { Component, Alert, ScrollView, View, Platform, StyleSheet } from 'react-native'
import GoogleAnalytics from 'react-native-google-analytics-bridge'
import truncate from 'truncate'

import { fontFactor } from "../helpers"
import Colors from "../Colors"
import ReviewsContainer from "../containers/ReviewsContainer"
import Button from "../components/Button"
import BottomView from "../components/BottomView"
import BottomButton from "../components/BottomButton"
import Sentence from "../components/Sentence"
import NavBar from "../components/NavBar"
import DemandState from "../components/DemandState"
import DemandUserButtons from "../components/DemandUserButtons"
import UserImage from "../components/UserImage"

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

  handleViewTransaction() {
    const { transactions, demand, onViewTransaction } = this.props
    const transactionDemands = transactions.list
    const transactionIndex = transactionDemands.map(demand => demand.id).indexOf(demand.id)
    if (transactionIndex > -1) {
      const transaction = transactionDemands[transactionIndex].transactions[0]
      if (transaction) {
        onViewTransaction(transaction)
      }
    }
  }

  componentDidMount() {
    GoogleAnalytics.trackScreenView('ViewDemand')
  }

  render() {
    const { auth: { currentUser }, demand, transactions, userDemands, adminDemands, onCompleteDemand, onCancelDemand, onReactivateDemand, admin } = this.props
    const { name, description, distance, created_at, user, state, creatingTransaction } = demand
    const transactionDemands = transactions.list
    const transactionIndex = transactionDemands.map(demand => demand.id).indexOf(demand.id)
    const showUserButtons = (currentUser.id === user.id || (admin && currentUser.admin))
    const showButtons = !showUserButtons && (demand.state === 'notifying' || demand.state === 'active') && transactionIndex < 0
    return (
      <View style={{
        flex: 1,
        alignSelf: 'stretch',
      }}>
        <NavBar title={truncate(demand.name, 30)} style={{borderBottomWidth: 0}} />
        <ScrollView style={{
          flex: 1,
          backgroundColor: Colors.lightBeige,
        }}>
          <View style={{
            alignItems: 'center',
            paddingBottom: 90,
          }}>
            <View style={{
              flex: 1,
              alignSelf: 'stretch',
              alignItems: 'center',
              paddingHorizontal: 10,
              paddingVertical: 20,
              backgroundColor: Colors.blue,
            }}>
              <UserImage source={{uri: user.image_url}} size={64} />
              <Sentence style={[{
                color: Colors.white,
                fontSize: 14 * fontFactor(),
                marginTop: 10,
              }, (Platform.OS === 'ios' ? { fontFamily: 'Avenir-Black' } : { fontWeight: 'bold' })]}>
                { name }
              </Sentence>
              <View style={{
                flexDirection: 'row',
              }}>
                <Sentence style={{
                  color: Colors.black,
                  fontSize: 12 * fontFactor(),
                }}>
                  { currentUser.id === user.id ? 'Você' : user.first_name + ' ' + user.last_name } { 'pediu '}
                </Sentence>
                <TimeAgo time={created_at} lowerCase={true} style={{
                  color: Colors.black,
                  fontSize: 12 * fontFactor(),
                }} />
              </View>
              <Sentence style={{
                color: Colors.white,
              }}>
                A { distance > 1 ? `${Math.round(distance)}km` : `${Math.round(distance * 1000)}m` }
              </Sentence>
              <Sentence style={[{
                color: Colors.white,
                fontSize: 10 * fontFactor(),
                marginTop: 10,
              }]}>
                { description }
              </Sentence>
              { showUserButtons && <DemandState state={state} style={{marginTop: 10}} /> }
              { !showUserButtons && (state === 'notifying' || state === 'active') &&
                <Button
                  secondary={true}
                  style={{marginTop: 10}}
                  onPress={this.handleFlag.bind(this)}
                >
                  Denunciar pedido
                </Button>
              }
            </View>
            { !showUserButtons && state === 'completed' &&
              <View style={{
                alignItems: 'center',
                paddingHorizontal: 10,
                paddingVertical: 20,
                backgroundColor: Colors.white,
                borderColor: Colors.gray,
                borderBottomWidth: StyleSheet.hairlineWidth,
              }}>
                <Icon name='ios-checkmark-circle-outline' style={{ 
                  color: Colors.green,
                  fontSize: 20 * fontFactor(),
                  marginBottom: 6,
                }} />
                <Sentence style={[{
                  color: Colors.green,
                  fontSize: 12 * fontFactor(),
                  textAlign: 'center',
                }]}>
                  {user.first_name} já conseguiu um(a) {name}.
                </Sentence>
              </View>
            }
            { !showUserButtons && state === 'flagged' &&
              <View style={{
                alignItems: 'center',
                paddingHorizontal: 10,
                paddingVertical: 20,
                backgroundColor: Colors.white,
                borderColor: Colors.gray,
                borderBottomWidth: StyleSheet.hairlineWidth,
              }}>
                <Icon name='ios-warning-outline' style={{ 
                  color: Colors.darkBeige,
                  fontSize: 20 * fontFactor(),
                  marginBottom: 6,
                }} />
                <Sentence style={[{
                  color: Colors.darkBeige,
                  fontSize: 12 * fontFactor(),
                  textAlign: 'center',
                }]}>
                  Este pedido foi marcado como impróprio e está em pausa enquanto é analisado pelos nossos moderadores.
                </Sentence>
              </View>
            }
            { !showUserButtons && state === 'canceled' &&
              <View style={{
                alignItems: 'center',
                paddingHorizontal: 10,
                paddingVertical: 20,
                backgroundColor: Colors.white,
                borderColor: Colors.gray,
                borderBottomWidth: StyleSheet.hairlineWidth,
              }}>
                <Icon name='ios-close-circle-outline' style={{ 
                  color: Colors.red,
                  fontSize: 20 * fontFactor(),
                  marginBottom: 6,
                }} />
                <Sentence style={[{
                  color: Colors.red,
                  fontSize: 12 * fontFactor(),
                  textAlign: 'center',
                }]}>
                  Este pedido foi cancelado e não está mais disponível.
                </Sentence>
              </View>
            }
            { !showUserButtons && (state === 'active') && (transactionIndex > -1) &&
              <View style={{
                alignItems: 'center',
                paddingHorizontal: 10,
                paddingVertical: 20,
                backgroundColor: Colors.white,
                borderColor: Colors.gray,
                borderBottomWidth: StyleSheet.hairlineWidth,
              }}>
                <Sentence style={[{
                  color: Colors.gray,
                  fontSize: 12 * fontFactor(),
                  textAlign: 'center',
                }]}>
                  Você já está conversando com {user.first_name} sobre este pedido.
                </Sentence>
                <Button
                  secondary={true}
                  style={{
                    marginTop: 10,
                    borderColor: Colors.gray,
                  }}
                  textStyle={{
                    color: Colors.pink,
                  }}
                  onPress={this.handleViewTransaction.bind(this)}
                >
                  Ver conversa
                </Button>
              </View>
            }
            <ReviewsContainer {...this.props} user={user} />
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
