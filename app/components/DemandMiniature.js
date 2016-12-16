import React, { Component } from 'react'
import { View, TouchableOpacity, Platform } from 'react-native'
import truncate from 'truncate'
import { fontFactor } from "../helpers"
import Colors from "../Colors"
import Icon from "./Icon"
import Sentence from "./Sentence"
import TimeAgo from "./TimeAgo"
import UserImage from "./UserImage"

export default class DemandMiniature extends Component {
  handleView() {
    const { demand, onView, admin } = this.props
    onView(demand, admin)
  }

  handleRefuse() {
    const { demand, onRefuse } = this.props
    onRefuse(demand)
  }

  render() {
    const { demand, currentUser, admin, index } = this.props
    const { user, name, description, distance, created_at, state } = demand
    const showClose = (!admin && currentUser.id !== user.id)
    return (
      <TouchableOpacity onPress={this.handleView.bind(this)} style={{
        backgroundColor: Colors.white,
        borderTopWidth: (index === 0 ? 0 : 12),
        borderColor: Colors.lightBeige,
        flex: 1,
        flexDirection: 'row',
      }}>
        <View style={{
          flex: 3,
          flexDirection: 'column',
          alignItems: 'center',
          marginTop: 10,
        }}>
          <UserImage source={{uri: user.image_url}} />
          <Sentence style={{
            color: Colors.gray,
            marginTop: 6,
            fontSize: 10 * fontFactor(),
          }}>
            A { distance > 1 ? `${Math.round(distance)}km` : `${Math.round(distance * 1000)}m` }
          </Sentence>
        </View>
        <View style={{
          flex: 8,
          flexDirection: 'column',
          paddingVertical: 10,
        }}>
          <Sentence style={[{
            color: Colors.blue,
          }, (Platform.OS === 'ios' ? { fontFamily: 'Avenir-Black' } : { fontWeight: 'bold' })]}>
            { truncate(name, 30) }
          </Sentence>
          <View style={{
            flexDirection: 'row',
          }}>
            <Sentence style={{
              color: Colors.black,
              fontSize: 10 * fontFactor(),
            }}>
              { currentUser.id === user.id ? 'Você' : user.first_name } { 'pediu ' }
            </Sentence>
            <TimeAgo time={created_at} lowerCase={true} style={{
              color: Colors.black,
              fontSize: 10 * fontFactor(),
            }} />
          </View>
          <Sentence style={[{
            color: Colors.darkGray,
            fontSize: 10 * fontFactor(),
            marginTop: 10,
          }]}>
            { truncate(description, 110) }
          </Sentence>
        </View>
        <View style={{
          flex: 1,
          alignItems: 'center',
        }}>
          { showClose && <TouchableOpacity onPress={this.handleRefuse.bind(this)}>
            <Icon name="ios-close-outline" style={{
              backgroundColor: 'transparent',
              color: Colors.gray,
              paddingTop: 4,
              paddingBottom: 4,
              paddingHorizontal: 8,
              fontSize: 22 * fontFactor(),
              textAlign: 'center',
            }} />
          </TouchableOpacity> }
          <Icon name="ios-arrow-forward" style={{
            backgroundColor: 'transparent',
            fontSize: 28 * fontFactor(),
            color: (showClose ? Colors.lightGray : Colors.gray),
            marginTop: (showClose ? 18 : 6),
          }} />
        </View>
      </TouchableOpacity>
    )
  }
}
