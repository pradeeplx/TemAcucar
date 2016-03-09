import React, { Component, PropTypes } from 'react-native'
import { InlineTextInput } from 'react-native-stateless-form'

import Colors from "../Colors"
import Icon from "./Icon"

class FormTextInput extends Component {
  focus() {
    this.refs.input.focus()
  }

  blur() {
    this.refs.input.blur()
  }

  render() {
    const { icon, error } = this.props
    const message = ( error && error.length > 0 ? error[0] : null)
    return (
      <InlineTextInput
        ref='input'
        style={{
          borderColor: Colors.ice,
        }}
        titleStyle={{
          fontFamily: 'OpenSans',
          color: Colors.brown,
        }}
        inputStyle={{
          color: Colors.pink,
        }}
        { ...this.props }
        icon={ icon && <Icon name={icon} color={Colors.brown} /> }
        validIcon={ <Icon name='check' color='green' /> }
        invalidIcon={ <Icon name='clear' color='red' /> }
        message={message}
      />
    )
  }
}

FormTextInput.propTypes = {
  value: PropTypes.string,
  valid: PropTypes.bool,
}

export default FormTextInput
