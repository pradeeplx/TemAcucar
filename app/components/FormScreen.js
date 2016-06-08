import React, { Platform, View } from 'react-native'

import Colors from "../Colors"
import BorderedScreen from "./BorderedScreen"
import Logo from "./Logo"
import NavBar from "./NavBar"
import Form from "./Form"

export default FormScreen = (props) => (
  <BorderedScreen navBar={props.navBar} navBarTitle={props.navBarTitle}>
    <Form {...props}>
      <View style={{
        alignSelf: 'stretch',
        alignItems: 'center',
        paddingTop: 40,
      }}>
        <Logo style={{
          marginBottom: 30,
        }} />
      </View>
      { props.children }
    </Form>
  </BorderedScreen>
)
