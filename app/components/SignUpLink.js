import React from 'react'
import { Actions } from 'react-native-router-flux'
import Link from "./Link"

export default SignUpLink = (props) => (
  <Link onPress={Actions.signUpForm}>
    Não possui cadastro?
  </Link>
)
