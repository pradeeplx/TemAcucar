import React, { Component } from 'react'
import { View, ActivityIndicator } from 'react-native'
import LoadMore from "../components/LoadMore"
import Notification from "../components/Notification"

export default Notifications = ({ notifications, listing, canList, onList, onView }) => (
  <View >
    { notifications.map((notification) => (
      <Notification
        key={notification.id}
        notification={notification}
        onView={onView}
      />
    )) }
    { listing && <ActivityIndicator style={{ marginTop: 10 }} /> }
    { canList && !listing &&
      <LoadMore onPress={onList} />
    }
  </View>
)
