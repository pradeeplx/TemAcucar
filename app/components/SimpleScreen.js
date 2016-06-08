import React, { View, Image } from 'react-native'
import BorderedScreen from "./BorderedScreen"
import Logo from "./Logo"
import Headline from "./Headline"

export default SimpleScreen = ({ children, headline, navBar, navBarTitle, addTopMargin }) => (
  <BorderedScreen navBar={navBar} navBarTitle={navBarTitle}>
    <View style={{
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: (addTopMargin ? 30 : 0),
      marginBottom: (headline ? 26 : 30),
    }}>
      <Logo />
    </View>
    { headline && <Headline>{headline}</Headline> }
    {children}
  </BorderedScreen>
)
 