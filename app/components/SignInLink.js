import React from 'react-native'
import { Actions } from 'react-native-router-flux'
import Link from "./Link"

export default SignInLink = (props) => (
  <Link onPress={Actions.signInForm}>
    Já possui cadastro?
  </Link>
)
