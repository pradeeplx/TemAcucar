import React, { Component } from 'react'
import { View, ActivityIndicator } from 'react-native'
import LoadMore from "../components/LoadMore"
import TransactionDemand from "../components/TransactionDemand"
import NoTransactionDemands from "../components/NoTransactionDemands"

export default TransactionDemands = ({ onList, onView, onViewDemand, onComplete, onCancel, onReactivate, demands, listing, canList, currentUser }) => (
  <View >
    { demands.map((demand, index) => (
      <TransactionDemand
        key={demand.id}
        demand={demand}
        index={index}
        currentUser={currentUser}
        onView={onView}
        onViewDemand={onViewDemand}
        onComplete={onComplete}
        onCancel={onCancel}
      />
    )) }
    { listing && <ActivityIndicator style={{ marginTop: 10 }} /> }
    { demands.length === 0 && !listing && <NoTransactionDemands /> }
    { canList && !listing &&
      <LoadMore onPress={onList} />
    }
  </View>
)
