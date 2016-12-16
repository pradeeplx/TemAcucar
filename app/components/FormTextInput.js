import React, { Component, PropTypes } from 'react'
import { Platform } from 'react-native'
import { InlineTextInput } from 'react-native-stateless-form'
import { fontFactor } from "../helpers"
import Colors from "../Colors"
import Icon from "./Icon"

export default class FormTextInput extends Component {
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
    const { icon, error, style, titleStyle, inputStyle, messageStyle } = this.props
    const message = ( error && error.length > 0 ? error[0] : null)
    return (
      <InlineTextInput
        ref='input'
        { ...this.props }
        style={[{
          borderColor: Colors.lightGray,
          backgroundColor: Colors.white,
        }, style]}
        titleStyle={[{
          fontFamily: (Platform.OS === 'ios' ? 'Avenir' : 'Roboto'),
          color: Colors.brown,
          fontSize: 12 * fontFactor(),
        }, titleStyle]}
        inputStyle={[{
          color: Colors.pink,
          backgroundColor: Colors.white,
          fontSize: 12 * fontFactor(),
          height: 36 * fontFactor(),
        }, inputStyle]}
        messageStyle={[{
          color: Colors.beige,
          fontSize: 10 * fontFactor(),
        }, messageStyle]}
        icon={ icon && <Icon name={icon} color={Colors.brown} /> }
        validIcon={ <Icon name='md-checkmark' color={Colors.green} /> }
        invalidIcon={ <Icon name='ios-more' color={Colors.beige} /> }
        message={message}
      />
    )
  }
}
