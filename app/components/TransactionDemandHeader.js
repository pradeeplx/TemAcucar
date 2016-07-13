import React, { Component, View, TouchableOpacity, Platform } from 'react-native'
import Colors from "../Colors"
import TransactionDemandDescription from "./TransactionDemandDescription"
import TransactionDemandTimeAgo from "./TransactionDemandTimeAgo"

export default class TransactionDemandHeader extends Component {
  handleView() {
    const { demand, onViewDemand } = this.props
    onViewDemand(demand)
  }

  render() {
    const { index, currentUser, demand } = this.props
    const { name, user, created_at } = demand
    return(
      <TouchableOpacity onPress={this.handleView.bind(this)} style={{
        padding: 20,
        backgroundColor: (currentUser.id === user.id ? Colors.lightBlue : Colors.lightPink),
        alignItems: 'center',
      }}>
        <UserImage source={{uri: user.image_url}} size={48} />
        <Sentence style={[{
          color: (currentUser.id === user.id ? Colors.blue : Colors.pink),
          fontSize: 12,
          marginTop: 10,
        }, (Platform.OS === 'ios' ? { fontFamily: 'Avenir-Black' } : { fontWeight: 'bold' })]}>
          { name }
        </Sentence>
        <View style={{
          flexDirection: 'row',
        }}>
          <Sentence style={{
            color: Colors.black,
            fontSize: 10,
          }}>
            { currentUser.id === user.id ? 'Você' : user.first_name } { 'pediu '}
          </Sentence>
          <TimeAgo time={created_at} lowerCase={true} style={{
            color: Colors.black,
            fontSize: 10,
          }} />
        </View>
      </TouchableOpacity>
    )
  }
}
