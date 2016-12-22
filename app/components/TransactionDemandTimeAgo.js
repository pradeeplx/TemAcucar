import React from 'react'
import { View } from 'react-native'
import Colors from "../Colors"
import Icon from "./Icon"
import TimeAgo from "./TimeAgo"

export default TransactionDemandTimeAgo = ({ demand: { created_at } }) => (
  <View style={{
    flexDirection: 'column',
    flex: 1,
    alignItems: 'flex-end',
    marginTop: 10,
  }}>
    <TimeAgo time={created_at} style={{color: Colors.black}} />
  </View>
)
