import React from 'react'
import { Actions } from 'react-native-router-flux'
import Link from "./Link"

export default SignInLink = () => (
  <Link onPress={Actions.signInForm}>
    Já possui cadastro?
  </Link>
)
