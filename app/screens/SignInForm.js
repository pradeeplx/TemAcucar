import React, { Component, View } from 'react-native'
import GoogleAnalytics from 'react-native-google-analytics-bridge'
import { validateFunction } from 'validate-model'
import { reduxForm } from 'redux-form'
import { Actions } from 'react-native-router-flux'

import UserValidators from '../validators/UserValidators'
import FormScreen from "../components/FormScreen"
import FacebookButton from "../components/FacebookButton"
import OrSeparator from "../components/OrSeparator"
import EmailInput from "../components/EmailInput"
import PasswordInput from "../components/PasswordInput"
import FormSubmit from "../components/FormSubmit"
import FormFooter from "../components/FormFooter"
import Link from "../components/Link"
import SignUpLink from "../components/SignUpLink"

const validators = {
  email: UserValidators.email,
  password: UserValidators.password,
}

class SignInForm extends Component {
  componentDidMount() {
    GoogleAnalytics.trackScreenView('SignInForm')
  }

  render() {
    const { onFacebook, onSignIn, fields: { email, password } } = this.props
    return (
      <View style={{
        flex: 1,
      }}>
        <FormScreen navBar={true} navBarTitle="Entre com seu e-mail e senha">
          <FacebookButton onPress={onFacebook}>
            Entre com seu Facebook
          </FacebookButton>
          <OrSeparator />
          <EmailInput {...email} />
          <PasswordInput {...password} />
          <FormFooter>
            <Link onPress={Actions.requestPassword} style={{marginBottom: 10}}>
              Esqueceu sua senha?
            </Link>
            <SignUpLink />
          </FormFooter>
        </FormScreen>
        <FormSubmit {...this.props} onSubmit={onSignIn}>
          Entrar
        </FormSubmit>
      </View>
    )
  }
}

SignInForm = reduxForm({
  form: 'signIn',
  fields: ['email', 'password'],
  validate: validateFunction(validators),
})(SignInForm)

export default SignInForm
