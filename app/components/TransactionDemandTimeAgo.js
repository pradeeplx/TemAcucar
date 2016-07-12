import React, { View } from 'react-native'
import Colors from "../Colors"
import Icon from "./Icon"
import TimeAgo from "./TimeAgo"

export default TransactionDemandTimeAgo = ({ index, demand: { created_at, user }, currentUser }) => (
  <View style={{
    flexDirection: 'column',
    flex: 1,
    alignItems: 'flex-end',
    marginTop: 10,
  }}>
    <TimeAgo time={created_at} style={{color: Colors.black}} />
  </View>
)
