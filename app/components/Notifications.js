import React, { Component } from 'react'
import { View } from 'react-native'
import GiftedSpinner from 'react-native-gifted-spinner'
import LoadMore from "../components/LoadMore"
import Notification from "../components/Notification"

export default class Notifications extends Component {
  render() {
    const { notifications, listing, canList, onList, onView } = this.props
    return (
      <View >
        { notifications.map((notification) => (
          <Notification
            key={notification.id}
            notification={notification}
            onView={onView}
          />
        )) }
        { listing && <GiftedSpinner style={{ marginTop: 10 }} /> }
        { canList && !listing &&
          <LoadMore onPress={onList} />
        }
      </View>
    )
  }
}
