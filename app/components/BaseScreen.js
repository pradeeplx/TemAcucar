import React, { Platform, View } from 'react-native'
import Colors from "../Colors"
import NavBar from "./NavBar"

export default BaseScreen = ({ children, navBar, navBarTitle }) => (
  <View style={{
    flex: 1,
    backgroundColor: Colors.white,
    paddingTop: (!navBar && Platform.OS === 'ios' ? 20 : 0),
  }}>
    { navBar && <NavBar title={navBarTitle} /> }
    <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: Colors.white,
    }}>
      {children}
    </View>
  </View>
)
 