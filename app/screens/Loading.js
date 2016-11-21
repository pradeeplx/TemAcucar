import React from 'react'
import { ActivityIndicator } from 'react-native'
import { fontFactor } from "../helpers"
import SimpleScreen from "../components/SimpleScreen"
import Headline from "../components/Headline"

export default Loading = ({ status }) => (
  <SimpleScreen>
    <Headline style={{ height: 50 * fontFactor() }}>{status}</Headline>
    <ActivityIndicator style={{ marginVertical: 20 }} />
  </SimpleScreen>
)
