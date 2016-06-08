import React, { Platform, View, Dimensions } from 'react-native'

import Colors from "../Colors"
import BorderedScreen from "./BorderedScreen"
import Logo from "./Logo"
import NavBar from "./NavBar"
import Form from "./Form"

export default FormScreen = (props) => {
  const dimensions = Dimensions.get('window')
  const height = dimensions.height * dimensions.scale
  const smallScreen = height <= 320
  return (
    <BorderedScreen navBar={props.navBar} navBarTitle={props.navBarTitle}>
      <Form {...props}>
        <View style={{
          alignSelf: 'stretch',
          alignItems: 'center',
          paddingTop: (smallScreen ? 0 : 40),
        }}>
          { !smallScreen && <Logo style={{ marginBottom: 30 }} /> }
        </View>
        { props.children }
      </Form>
    </BorderedScreen>
  )
}
