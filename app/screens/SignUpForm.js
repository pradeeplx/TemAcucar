import React, { Component } from 'react'
import { View } from 'react-native'
import GoogleAnalytics from 'react-native-google-analytics-bridge'
import { validateFunction } from 'validate-model'
import { reduxForm } from 'redux-form'
import { Actions } from 'react-native-router-flux'

import UserValidators from '../validators/UserValidators'
import FormScreen from "../components/FormScreen"
import FacebookButton from "../components/FacebookButton"
import OrSeparator from "../components/OrSeparator"
import FormTextInput from "../components/FormTextInput"
import EmailInput from "../components/EmailInput"
import PasswordInput from "../components/PasswordInput"
import FormSubmit from "../components/FormSubmit"
import FormError from "../components/FormError"
import FormFooter from "../components/FormFooter"
import SignInLink from "../components/SignInLink"

const validators = {
  first_name: UserValidators.first_name,
  last_name: UserValidators.last_name,
  email: UserValidators.email,
  password: UserValidators.password,
}

class SignUpForm extends Component {
  componentDidMount() {
    GoogleAnalytics.trackScreenView('SignUpForm')
    this.signUpFailed = false
  }

  componentWillReceiveProps(nextProps) {
    const { auth: { signingUp, signUpError } } = nextProps
    if (signUpError && signUpError.id === 'email_is_already_taken' && !signingUp && !this.signUpFailed) {
      this.signUpFailed = true
      Actions.signUpFailed()
    }
  }

  render() {
    const { onFacebook, onSignUp, fields, auth: { signingUp, signUpError } } = this.props
    const { first_name, last_name, email, password } = fields
    return (
      <View style={{
        flex: 1,
      }}>
        <FormScreen navBar={true} navBarTitle="Crie sua conta com seu e-mail">
          <FacebookButton onPress={onFacebook}>
            Cadastre-se com o Facebook
          </FacebookButton>
          <OrSeparator />
          <FormTextInput
            name='first_name'
            title='Nome'
            placeholder='Digite seu nome'
            icon='ios-contact-outline'
            autoCapitalize='words'
            {...first_name}
          />
          <FormTextInput
            name='last_name'
            title='Sobrenome'
            placeholder='Digite seu sobrenome'
            icon='ios-contact-outline'
            autoCapitalize='words'
            {...last_name}
          />
          <EmailInput {...email} />
          <PasswordInput {...password} />
          { signUpError && <FormError message={UserValidators.errorMessage(signUpError)} /> }
          <FormFooter>
            <SignInLink />
          </FormFooter>
        </FormScreen>
        <FormSubmit
          {...this.props}
          isLoading={signingUp}
          onSubmit={onSignUp}
        >
          Fazer cadastro
        </FormSubmit>
      </View>
    )
  }
}

SignUpForm = reduxForm({
  form: 'signUp',
  fields: ['first_name', 'last_name', 'email', 'password'],
  validate: validateFunction(validators),
})(SignUpForm)

export default SignUpForm
