import React from 'react'
import { View, Image } from 'react-native'
import BaseScreen from "./BaseScreen"
import Logo from "../components/Logo"
import LogoBigIcon from "./LogoBigIcon"
import Headline from "./Headline"

export default SimpleScreen = ({ children, headline, navBar, navBarTitle, addTopMargin, logo }) => (
  <BaseScreen navBar={navBar} navBarTitle={navBarTitle}>
    <View style={{
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: (addTopMargin ? (logo === 'complete' ? 30 : 20) : 0),
      marginBottom: (headline ? 26 : (logo === 'complete' ? 30 : 20)),
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
  </BaseScreen>
)
