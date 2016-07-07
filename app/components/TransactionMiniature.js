import React, { Component, View, TouchableOpacity, Platform, StyleSheet } from 'react-native'
import truncate from 'truncate'
import Colors from "../Colors"
import Icon from "./Icon"
import Sentence from "./Sentence"
import UserImage from "./UserImage"

export default class TransacionMiniature extends Component {
  handleView() {
    const { onView, transaction } = this.props
    onView(transaction)
  }

  render() {
    const { transaction, currentUser, index } = this.props
    const { user, demand, last_message_text } = transaction
    return (
      <TouchableOpacity onPress={this.handleView.bind(this)} style={{
        borderColor: Colors.beige,
        borderBottomWidth: StyleSheet.hairlineWidth,
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
      }}>
        <UserImage size={32} source={{uri: (user.id === currentUser.id ? demand.user.image_url : user.image_url)}} style={{marginRight: 10}} />
        <View style={{
          flexDirection: 'column',
          flex: 1,
        }}>
          <Sentence style={{
            color: Colors.brown,
          }}>
            { user.id === currentUser.id ? `${demand.user.first_name} ${demand.user.last_name}` : `${user.first_name} ${user.last_name}` }
          </Sentence>
          <Sentence style={{
            color: Colors.beige,
          }}>
            { truncate((last_message_text ? last_message_text : 'Escreva uma mensagem para ' + transaction.demand.user.first_name), 35) }
          </Sentence>
        </View>
        <Icon name="ios-arrow-forward-outline" style={{
          color: Colors.beige,
        }} />
      </TouchableOpacity>
    )
  }
}