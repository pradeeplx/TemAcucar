import React from 'react'
import GiftedSpinner from 'react-native-gifted-spinner'
import { fontFactor } from "../helpers"
import SimpleScreen from "../components/SimpleScreen"
import Headline from "../components/Headline"

export default Loading = ({ status }) => (
  <SimpleScreen>
    <Headline style={{ height: 50 * fontFactor() }}>{status}</Headline>
    <GiftedSpinner style={{ marginVertical: 20 }} />
  </SimpleScreen>
)
