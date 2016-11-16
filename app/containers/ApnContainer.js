import React, { Component } from 'react'
import { PushNotificationIOS } from 'react-native'
import { connect } from 'react-redux'

import * as ApnActions from '../actions/ApnActions'
import ToastContainer from './ToastContainer'

class ApnContainer extends Component {
  componentDidMount() {
    PushNotificationIOS.addEventListener('register', (token) => {
      const { dispatch } = this.props
      dispatch(ApnActions.register(token))
    })
    PushNotificationIOS.addEventListener('notification', (pushNotification) => {
      const data = pushNotification._data
      const subject = (data.subject == "#matchfunding" ? "Apoie o Tem Açucar" : data.subject)
      const notification = {
        id: data.id,
        triggering_user: data.triggering_user,
        demand: data.demand,
        transaction: data.transaction,
        message: data.message,
        review: data.review,
        subject: subject,
        text: data.text,
        read: data.read,
        admin: data.admin,
        created_at: data.created_at,
      }
      const { dispatch } = this.props
      dispatch(ApnActions.notify(notification))
    })
    PushNotificationIOS.requestPermissions()
  }

  render() {
    return (<ToastContainer {...this.props} />)
  }
}

export default connect(state => ({
  apn: state.apn,
}))(ApnContainer)
