import React, { Component } from 'react'
import { connect } from 'react-redux'

import * as ToastActions from '../actions/ToastActions'
import VersionsContainer from './VersionsContainer'

class ToastContainer extends Component {
  componentWillReceiveProps(nextProps) {
    const { dispatch, toast: { show, message, type, duration } } = nextProps
    if (show) {
      dispatch(ToastActions.show(message, type, duration))
    }
  }

  render() {
    return (
      <VersionsContainer {...this.props} />
    )
  }
}

export default connect(state => ({
  toast: state.toast,
}))(ToastContainer)
