import React, { Component, View, Text, Platform, StyleSheet } from 'react-native'
import truncate from 'truncate'

import Colors from "../Colors"
import Icon from "./Icon"
import Sentence from "./Sentence"
import UserImage from "./UserImage"
import TimeAgo from "./TimeAgo"

export default class DemandHeader extends Component {
  render() {
    const { demand, fullHeader, currentUser, hideDescription, verb } = this.props
    const { user, name, description, distance, created_at, state } = demand
    const verbToUse = verb || 'precisa de'
    return (
      <View style={{
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 9,
      }}>
        <View style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          borderWidth: StyleSheet.hairlineWidth,
          borderColor: Colors.gray,
          borderRadius: 12,
        }}>
          <View style={{
            width: 90,
            marginRight: 20,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <Icon name="ios-time-outline" style={{ 
              color: Colors.gray,
              marginRight: 4,
              marginTop: 2,
              fontSize: 12,
            }} />
            <TimeAgo time={created_at} style={{
              color: Colors.gray,
            }} />
          </View>
          <View style={{
            width: 110,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <Icon name="ios-pin-outline" style={{ 
              color: Colors.gray,
              marginLeft: 10,
              marginRight: 2,
              marginTop: 2,
              fontSize: 12,
            }} />
            <Sentence style={{
              color: Colors.gray,
              fontSize: 9,
            }}>
              A { distance > 1 ? `${Math.round(distance)}km` : `${Math.round(distance * 1000)}m` }
            </Sentence>
          </View>
        </View>
        <Sentence style={{
          textAlign: 'center',
          color: Colors.gray,
          fontSize: 10,
          marginTop: 14,
        }}>
          { currentUser.id === user.id ? 'Você' : user.first_name } { verbToUse } um(a)
        </Sentence>
        <Sentence style={{
          marginHorizontal: 30,
          textAlign: 'center',
          color: Colors.pink,
        }}>
          { fullHeader ? name.toUpperCase() : truncate(name.toUpperCase(), 30) }
        </Sentence>
        { !hideDescription && 
          <Sentence style={{
            fontSize: 10,
            marginHorizontal: 10,
            marginTop: 4,
            textAlign: 'center',
          }}>
            { fullHeader ? description : truncate(description, 110) }
          </Sentence>
        }
        <View style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <UserImage source={{uri: user.image_url}} />
        </View>
      </View>
    )
  }
}
