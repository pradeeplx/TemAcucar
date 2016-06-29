import React, { Component, PushNotificationIOS } from 'react-native'
import { connect } from 'react-redux'

import * as ApnActions from '../actions/ApnActions'
import ToastContainer from './ToastContainer'

class ApnContainer extends Component {
  componentDidMount() {
    PushNotificationIOS.addEventListener('register', (token) => {
      const { dispatch } = this.props
      dispatch(ApnActions.register(token))
    })   
    PushNotificationIOS.addEventListener('notification', (data) => {
      alert(JSON.stringify(data))
      // const notification = {
      //   id: data.id,
      //   triggering_user: JSON.parse(data.triggering_user || "null"),
      //   demand: JSON.parse(data.demand || "null"),
      //   transaction: JSON.parse(data.transaction || "null"),
      //   message: JSON.parse(data.message || "null"),
      //   review: JSON.parse(data.review || "null"),
      //   subject: data.subject,
      //   text: data.text,
      //   read: JSON.parse(data.read),
      //   admin: JSON.parse(data.admin),
      //   created_at: data.created_at,
      // }
      // const { dispatch } = this.props
      // dispatch(ApnActions.notify(notification))
      // const createNotification = JSON.parse(data.app_notifications)
      // if (createNotification) {
      //   Notification.create({
      //     subject: data.subject,
      //     message: data.sanitized_text,
      //   })
      // }
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
