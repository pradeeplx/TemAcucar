import React, { View, Image } from 'react-native'
import BorderedScreen from "./BorderedScreen"
import Logo from "../components/Logo"
import LogoBigIcon from "./LogoBigIcon"
import Headline from "./Headline"

export default SimpleScreen = ({ children, headline, navBar, navBarTitle, addTopMargin, logo }) => (
  <BorderedScreen navBar={navBar} navBarTitle={navBarTitle}>
    <View style={{
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: (addTopMargin ? 30 : 0),
      marginBottom: (headline ? 26 : 30),
    }}>
      { logo === 'complete' ? <Logo/> : <LogoBigIcon /> }
    </View>
    { headline &&
      <Headline style={{
        marginHorizontal: 60,
      }}>
        {headline}
      </Headline>
    }
    {children}
  </BorderedScreen>
)
 