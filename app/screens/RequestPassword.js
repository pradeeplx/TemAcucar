import React, { Component } from 'react'
import { View } from 'react-native'
import GoogleAnalytics from 'react-native-google-analytics-bridge'
import { validateFunction } from 'validate-model'
import { reduxForm } from 'redux-form'
import { Actions } from 'react-native-router-flux'

import UserValidators from '../validators/UserValidators'
import FormScreen from "../components/FormScreen"
import EmailInput from "../components/EmailInput"
import FormError from "../components/FormError"
import FormSubmit from "../components/FormSubmit"

const validators = {
  email: UserValidators.email,
}

class RequestPassword extends Component {
  componentDidMount() {
    const { initializeForm, auth: { currentUser } } = this.props
    if (currentUser && currentUser.email)
      initializeForm({email: currentUser.email})
    GoogleAnalytics.trackScreenView('RequestPassword')
  }

  componentWillReceiveProps(nextProps) {
    const { resetPassword } = nextProps.auth
    if (resetPassword && (resetPassword != this.props.auth.resetPassword)) {
      Actions.resetPassword()
    }
  }

  render() {
    const { onRequestPassword, fields: { email }, auth: { requestPasswordError, requestingPassword } } = this.props
    return (
      <View style={{
        flex: 1,
      }}>
        <FormScreen navBar={true} navBarTitle="Esqueceu sua senha?">
          <EmailInput {...email} />
          { requestPasswordError && <FormError message={UserValidators.errorMessage(requestPasswordError)} /> }
        </FormScreen>
        <FormSubmit
          {...this.props}
          dirty={true}
          isLoading={requestingPassword}
          onSubmit={onRequestPassword}
        >
          Enviar instruções por e-mail
        </FormSubmit>
      </View>
    )
  }
}

RequestPassword = reduxForm({
  form: 'requestPassword',
  fields: ['email'],
  validate: validateFunction(validators),
})(RequestPassword)

export default RequestPassword
