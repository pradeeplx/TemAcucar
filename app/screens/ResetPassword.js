import React, { Component } from 'react'
import { View } from 'react-native'
import GoogleAnalytics from 'react-native-google-analytics-bridge'
import { validateFunction } from 'validate-model'
import { reduxForm } from 'redux-form'

import { fontFactor } from "../helpers"
import UserValidators from '../validators/UserValidators'
import FormScreen from "../components/FormScreen"
import FormTextInput from "../components/FormTextInput"
import PasswordInput from "../components/PasswordInput"
import FormSubmit from "../components/FormSubmit"
import FormError from "../components/FormError"

const validators = {
  reset_password_token: UserValidators.reset_password_token,
  password: UserValidators.password,
}

class ResetPassword extends Component {
  componentDidMount() {
    GoogleAnalytics.trackScreenView('ResetPassword')
  }

  render() {
    const { onResetPassword, fields, auth: { resetPasswordError, resetingPassword, currentUser: { email } } } = this.props
    const { reset_password_token, password } = fields
    return (
      <View style={{
        flex: 1,
      }}>
        <FormScreen navBar={true} navBarTitle="Confira seu e-mail">
          <Headline style={{
            fontSize: 14 * fontFactor(),
            marginBottom: 10
          }}>
            Confira seu e-mail: enviamos seu código para {email} ;)
          </Headline>
          <FormTextInput
            name='reset_password_token'
            title='Código'
            placeholder='Digite o código recebido'
            icon='ios-keypad-outline'
            autoCorrect={false}
            autoCapitalize='none'
            {...reset_password_token}
          />
          <PasswordInput
            title='Nova senha'
            placeholder='Digite sua nova senha'
            {...password}
          />
          { resetPasswordError && <FormError message={UserValidators.errorMessage(resetPasswordError)} /> }
        </FormScreen>
        <FormSubmit
          {...this.props}
          isLoading={resetingPassword}
          onSubmit={onResetPassword}
        >
          Criar nova senha
        </FormSubmit>
      </View>
    )
  }
}

ResetPassword = reduxForm({
  form: 'resetPassword',
  fields: ['reset_password_token', 'password'],
  validate: validateFunction(validators),
})(ResetPassword)

export default ResetPassword
