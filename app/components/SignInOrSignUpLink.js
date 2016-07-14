import React from 'react-native'
import { Actions } from 'react-native-router-flux'
import Link from "./Link"

export default SignInOrSignUpLink = (props) => (
  <Link onPress={Actions.signInOrSignUp}>
    Pular intro
  </Link>
)
