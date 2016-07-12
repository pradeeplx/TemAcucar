import React, { Component, View, TouchableOpacity, Platform } from 'react-native'
import truncate from 'truncate'

import Colors from "../Colors"
import Sentence from "./Sentence"
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
    const { demand, currentUser, index } = this.props
    const { user, name, description, distance, created_at, state } = demand
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
            fontSize: 10,
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
              fontSize: 10,
            }}>
              Pedido por { currentUser.id === user.id ? 'você ' : user.first_name + ' ' }
            </Sentence>
            <TimeAgo time={created_at} lowerCase={true} style={{
              color: Colors.black,
              fontSize: 10,
            }} />
          </View>
          <Sentence style={[{
            color: Colors.darkGray,
            fontSize: 10,
            marginTop: 10,
          }]}>
            { truncate(description, 110) }
          </Sentence>
        </View>
        <View style={{
          flex: 1,
          alignItems: 'center',
        }}>
          { currentUser.id !== user.id && <TouchableOpacity onPress={this.handleRefuse.bind(this)}>
            <Icon name="ios-close-outline" style={{
              backgroundColor: 'transparent',
              color: Colors.gray,
              paddingTop: 4,
              paddingBottom: 4,
              paddingHorizontal: 8,
              fontSize: 22,
            }} />
          </TouchableOpacity> }
          <Icon name="ios-arrow-forward" style={{
            backgroundColor: 'transparent',
            fontSize: 28,
            color: Colors.gray,
            marginTop: 18,
          }} />
        </View>
      </TouchableOpacity>
    )
  }
}
