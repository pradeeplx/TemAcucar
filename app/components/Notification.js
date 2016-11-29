import React, { Component } from 'react'
import { TouchableOpacity, View, StyleSheet } from 'react-native'
import Colors from "../Colors"
import HtmlSentence from "./HtmlSentence"
import TimeAgo from "./TimeAgo"

export default class Notification extends Component {
  handlePress() {
    const { onView, notification } = this.props
    onView && onView(notification)
  }

  render() {
    const { read, text, triggering_user, created_at } = this.props.notification
    return (
      <TouchableOpacity
        onPress={this.handlePress.bind(this)}
        style={{
          backgroundColor: (read ? Colors.white : Colors.lightBeige),
          borderColor: Colors.gray,
          borderBottomWidth: StyleSheet.hairlineWidth,
          padding: 10,
        }}
      >
        <View style={{
          flexDirection: 'row',
        }}>
          { triggering_user && <UserImage source={{uri: triggering_user.image_url}} style={{marginRight: 10}} /> }
          <View style={{
            flex: 1,
            flexDirection: 'column',
          }}>
            <HtmlSentence>
              {text}
            </HtmlSentence>
            <TimeAgo time={created_at} style={{
              color: Colors.gray,
              marginTop: 4,
            }} />
          </View>
        </View>
      </TouchableOpacity>
    )
  }
}
