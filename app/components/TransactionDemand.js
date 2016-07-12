import React, { View, Platform } from 'react-native'
import Colors from "../Colors"
import Sentence from "./Sentence"
import TransactionDemandHeader from "./TransactionDemandHeader"
import Transactions from "./Transactions"

export default TransactionDemand = (props) => (
  <View style={{
    backgroundColor: Colors.white,
    borderColor: Colors.lightBeige,
    borderTopWidth: (props.index === 0 ? 0 : 0),
  }}>
    <TransactionDemandHeader {...props} />
    <Transactions {...props} />
  </View>
)
