import React, { Component, Platform, View, TouchableOpacity, StyleSheet } from 'react-native'
import { Actions } from 'react-native-router-flux'

import Colors from "../Colors"
import Icon from "./Icon"
import Sentence from "./Sentence"

export default class NavBar extends Component {
  handleBack() {
    Actions.pop()
  }

  render() {
    const { children, title, style } = this.props
    return (
      <View style={[{
        backgroundColor: Colors.white,
        borderColor: Colors.pink,
        borderBottomWidth: 1,
      }, style]}>
        <View style={{
          marginTop: (Platform.OS == 'ios' ? 20 : 0),
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'row',
          paddingVertical: 6,
        }}>
          { children }
          { !children &&
            <Sentence style={[{
              color: Colors.brown,
              marginTop: 8,
              marginBottom: 6,
            }, (Platform.OS === 'ios' ? { fontFamily: 'Avenir-Black' } : { fontWeight: 'bold' })]}>
              {title || ' ' }
            </Sentence>
          }
          <TouchableOpacity onPress={this.handleBack.bind(this)} style={{
            position: 'absolute',
            top: 0,
            left: 0,
          }}>
            <Icon name="ios-arrow-back-outline" style={{
              color: Colors.brown,
              fontSize: 32,
              marginTop: (Platform.OS === 'ios' ? 3 : 5),
              marginHorizontal: 12,
            }} />
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}
