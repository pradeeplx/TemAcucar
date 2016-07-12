import React, { View } from 'react-native'
import Colors from "../Colors"
import Icon from "./Icon"
import TimeAgo from "./TimeAgo"

export default TransactionDemandTimeAgo = ({ index, demand: { created_at, user }, currentUser }) => (
  <View style={{
    flexDirection: 'column',
    flex: 1,
    alignItems: 'flex-end',
  }}>
    <Icon name="ios-time-outline" style={{ 
      color: Colors.white,
      fontSize: 14,
    }} />
    <TimeAgo time={created_at} style={{color: Colors.white}} />
  </View>
)
