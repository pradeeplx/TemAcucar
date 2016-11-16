import React, { Component } from 'react'
import { Alert, View, Text } from 'react-native'
import Colors from "../Colors"
import BottomView from "./BottomView"
import BottomButton from "./BottomButton"

export default class DemandUserButtons extends Component {
  handleComplete() {
    Alert.alert(
      'Concluir pedido?',
      'Você tem certeza que quer concluir este pedido?',
      [{ text: 'Não', style: 'cancel' }, { text: 'Sim', onPress: () => {
        const { demand, onComplete } = this.props
        onComplete(demand)
      }}]
    )
  }

  handleCancel() {
    Alert.alert(
      'Cancelar pedido?',
      'Você tem certeza que quer cancelar este pedido?',
      [{ text: 'Não', style: 'cancel' }, { text: 'Sim', onPress: () => {
        const { demand, onCancel } = this.props
        onCancel(demand)
      }}]
    )
  }

  handleReactivate() {
    Alert.alert(
      'Reativar pedido?',
      'Você tem certeza que quer reativar este pedido?',
      [{ text: 'Não', style: 'cancel' }, { text: 'Sim', onPress: () => {
        const { demand, onReactivate } = this.props
        onReactivate(demand)
      }}]
    )
  }

  render() {
    const { demand, admin, onComplete, onCancel, onReactivate } = this.props
    const { state, completing, canceling, reactivating } = demand
    const canComplete = (onComplete && (state === 'notifying' || state === 'active'))
    const canCancel = (onCancel && (state === 'notifying' || state === 'active'  || (state === 'flagged' && admin)))
    const canReactivate = (onReactivate && (state === 'completed' || ((state === 'flagged' || state === 'canceled') && admin)))
    if (canReactivate && canCancel) {
      return (
        <BottomView>
          <BottomButton
            onPress={this.handleReactivate.bind(this)}
            isLoading={reactivating}
          >
            Reativar pedido
          </BottomButton>
          <BottomButton
            onPress={this.handleCancel.bind(this)}
            isLoading={canceling}
            secondary={true}
          >
            Cancelar pedido
          </BottomButton>
        </BottomView>
      )
    }
    if (canReactivate) {
      return (
        <BottomView>
          <BottomButton
            onPress={this.handleReactivate.bind(this)}
            isLoading={reactivating}
          >
            Reativar pedido
          </BottomButton>
        </BottomView>
      )
    }
    if (canComplete && canCancel) {
      return (
        <BottomView>
          <BottomButton
            onPress={this.handleComplete.bind(this)}
            isLoading={completing}
          >
            { admin ? 'Concluir pedido' : 'Já consegui' }
          </BottomButton>
          <BottomButton
            onPress={this.handleCancel.bind(this)}
            isLoading={canceling}
            secondary={true}
          >
            Cancelar pedido
          </BottomButton>
        </BottomView>
      )
    }
    return null
  }
}
