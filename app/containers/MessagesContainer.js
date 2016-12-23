import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as MessagesActions from '../actions/MessagesActions'

import Messages from "../components/Messages"

class MessagesContainer extends Component {
  componentWillMount() {
    const { dispatch, auth, transaction } = this.props
    const { credentials, currentUser } = auth
    dispatch(MessagesActions.list(credentials, currentUser, transaction))
  }

  handleList() {
    const { dispatch, auth, messages, transaction } = this.props
    const { credentials, currentUser } = auth
    const { offset } = messages
    dispatch(MessagesActions.list(credentials, currentUser, transaction, offset))
  }

  render() {
    const { auth, messages } = this.props
    const { currentUser } = auth
    const { list, listing, canList } = messages
    return (
      <Messages
        messages={list}
        listing={listing}
        canList={canList}
        currentUser={currentUser}
        onList={this.handleList.bind(this)}
      />
    )
  }
}

export default connect(state => ({
  messages: state.messages,
}))(MessagesContainer)
