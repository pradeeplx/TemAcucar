import React, { Platform, View, Dimensions } from 'react-native'

import Colors from "../Colors"
import BaseScreen from "./BaseScreen"
import LogoBigIcon from "./LogoBigIcon"
import NavBar from "./NavBar"
import Form from "./Form"

export default FormScreen = (props) => {
  const dimensions = Dimensions.get('window')
  const height = dimensions.height * dimensions.scale
  const smallScreen = height <= 320
  return (
    <BaseScreen navBar={props.navBar} navBarTitle={props.navBarTitle}>
      <Form {...props}>
        <View style={{
          alignSelf: 'stretch',
          alignItems: 'center',
          paddingTop: 20,
        }}>
          { !smallScreen && <LogoBigIcon style={{ marginBottom: 20 }} /> }
        </View>
        { props.children }
      </Form>
    </BaseScreen>
  )
}
