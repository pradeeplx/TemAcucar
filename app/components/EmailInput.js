import React, { Component, PropTypes } from 'react'
import FormTextInput from "./FormTextInput"

export default class EmailInput extends Component {
  static propTypes = {
    value: PropTypes.string,
    valid: PropTypes.bool,
  }

  focus() {
    this.refs.input.focus()
  }

  blur() {
    this.refs.input.blur()
  }

  render() {
    return (
      <FormTextInput
        ref='input'
        name='email'
        title='E-mail'
        placeholder='Digite seu e-mail'
        icon='ios-at-outline'
        autoCapitalize='none'
        keyboardType='email-address'
        { ...this.props }
      />
    )
  }
}
