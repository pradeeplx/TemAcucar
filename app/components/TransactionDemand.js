import React, { View, Platform } from 'react-native'
import Colors from "../Colors"
import Sentence from "./Sentence"
import TransactionDemandHeader from "./TransactionDemandHeader"
import Transactions from "./Transactions"

export default TransactionDemand = (props) => (
  <View style={{
    backgroundColor: Colors.white,
  }}>
    <TransactionDemandHeader {...props} />
    <Transactions {...props} />
  </View>
)
