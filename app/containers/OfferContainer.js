import React, { Component } from 'react-native'
import { connect } from 'react-redux'
import * as OfferActions from '../actions/OfferActions'
import Offer from "../screens/Offer"

class OfferContainer extends Component {
  handleAccept() {
    const { dispatch } = this.props
    dispatch(OfferActions.accept())
  }

  handleDismiss() {
    const { dispatch } = this.props
    dispatch(OfferActions.dismiss())
  }

  render() {
    return (
      <Offer
        onAccept={this.handleAccept.bind(this)}
        onDismiss={this.handleDismiss.bind(this)}
        {...this.props}
      />
    )
  }
}

export default connect(state => ({
  messages: state.offer,
}))(OfferContainer)
