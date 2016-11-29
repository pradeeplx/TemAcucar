import React, { Component } from 'react'
import { Navigator } from 'react-native'
import { Route, Schema, Actions } from 'react-native-router-flux'

import Router from "../components/Router"
import Welcome from "../screens/Welcome"
import SignInOrSignUp from "../screens/SignInOrSignUp"
import SignInForm from "../screens/SignInForm"
import SignUpForm from "../screens/SignUpForm"
import SignInFailed from "../screens/SignInFailed"
import SignUpFailed from "../screens/SignUpFailed"
import RequestPassword from "../screens/RequestPassword"
import ResetPassword from "../screens/ResetPassword"

export default class AuthRouter extends Component {
  componentWillReceiveProps(nextProps) {
    if (this.signInFailed(nextProps)) {
      Actions.signInFailed()
    }
  }

  signInFailed(props) {
    const { signInError, facebookError, refreshUserError } = props.auth
    return (signInError || facebookError || refreshUserError)
  }

  render() {
    const signInFailed = this.signInFailed(this.props)
    return (
      <Router {...this.props}>
        <Schema name="default" sceneConfig={Navigator.SceneConfigs.FloatFromRight}/>
        <Route name="welcome" component={Welcome} schema="default" initial={!signInFailed} />
        <Route name="signInOrSignUp" component={SignInOrSignUp} schema="default" />
        <Route name="signInFailed" component={SignInFailed} type="reset" initial={signInFailed} />
        <Route name="signInForm" component={SignInForm} schema="default" />
        <Route name="signUpForm" component={SignUpForm} schema="default" />
        <Route name="signUpFailed" component={SignUpFailed} schema="default" />
        <Route name="requestPassword" component={RequestPassword} schema="default" />
        <Route name="resetPassword" component={ResetPassword} schema="default" />
      </Router>
    )
  }
}
