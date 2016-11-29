import React, { Component } from 'react'
import { View } from 'react-native'
import GoogleAnalytics from 'react-native-google-analytics-bridge'
import { validateFunction } from 'validate-model'
import { reduxForm } from 'redux-form'

import UserValidators from '../validators/UserValidators'
import FormScreen from "../components/FormScreen"
import EmailInput from "../components/EmailInput"
import FormSubmit from "../components/FormSubmit"

const validators = {
  email: UserValidators.email,
}

class UpdateEmail extends Component {
  componentDidMount() {
    GoogleAnalytics.trackScreenView('UpdateEmail')
  }

  render() {
    const { onUpdateEmail, fields: { email }, config: { updateEmailError, updatingEmail } } = this.props
    return (
      <View style={{
        flex: 1,
      }}>
        <FormScreen name="updateEmail" validators={validators} navBar={true} navBarTitle="Atualize seu e-mail">
          <EmailInput {...email} />
          { updateEmailError && <FormError message={UserValidators.errorMessage(updateEmailError)} /> }
        </FormScreen>
        <FormSubmit
          {...this.props}
          isLoading={updatingEmail}
          onSubmit={onUpdateEmail}
        >
          Atualizar meu e-mail
        </FormSubmit>
      </View>
    )
  }
}

UpdateEmail = reduxForm({
  form: 'updateEmail',
  fields: ['email'],
  validate: validateFunction(validators),
})(UpdateEmail)

export default UpdateEmail
