import React, { Component, View, TouchableOpacity } from 'react-native'
import Colors from "../Colors"
import DemandHeader from "./DemandHeader"
import DemandButtons from "./DemandButtons"
import DemandUserButtons from "./DemandUserButtons"

export default class DemandMiniature extends Component {
  handleView() {
    const { demand, onView, admin } = this.props
    onView(demand, admin)
  }

  render() {
    const { demand, currentUser, admin, index } = this.props
    const Buttons = (currentUser.id === demand.user.id || (admin && currentUser.admin) ? null : null)
    return (
      <TouchableOpacity onPress={this.handleView.bind(this)} style={{
        backgroundColor: Colors.white,
      }}>
        <View style={{
          borderTopWidth: (index === 0 ? 0 : 12),
          borderColor: Colors.lightBeige,
          paddingVertical: 10,
          flex: 1,
        }}>
          <DemandHeader {...this.props} />
        </View>
        { Buttons && <Buttons {...this.props} /> }
        <View style={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          right: 10,
        }}>
          <Icon name="ios-arrow-forward" style={{
            backgroundColor: 'transparent',
            fontSize: 24,
            color: Colors.gray,
            marginTop: 52,
          }} />
        </View> 
      </TouchableOpacity>
    )
  }
}
