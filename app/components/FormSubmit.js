import React, { Component } from 'react-native'
import { GiftedForm } from 'react-native-gifted-form'
import Colors from "../Colors"

export default class FormSubmit extends Component {
  handleSubmit(isValid, values) {
    if (isValid === true) {
      this.props.onSubmit(values)
    }
  }

  postSubmit(error) {
    this.refs.submit._postSubmit([error])
  }

  render() {
    return (
      <GiftedForm.SubmitWidget
        ref="submit"
        widgetStyles={{
          submitButton: {
            backgroundColor: Colors.pink,
          },
          disabledSubmitButton: {
            opacity: 1,
            backgroundColor: Colors.gray,
          },
          errorContainer: {
            marginTop: 10,
          },
          errorText: {
            color: Colors.pink,
            textAlign: 'center',
            fontSize: 16,
          },
        }}
        {...this.props}
        onSubmit={this.handleSubmit.bind(this)}
      />
    )
  }
}
