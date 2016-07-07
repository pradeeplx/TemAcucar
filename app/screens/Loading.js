import React from 'react-native'
import GiftedSpinner from 'react-native-gifted-spinner'
import SimpleScreen from "../components/SimpleScreen"
import Headline from "../components/Headline"

export default Loading = ({ status }) => (
  <SimpleScreen>
    <Headline style={{ height: 50 }}>{status}</Headline>
    <GiftedSpinner style={{ marginVertical: 20 }} />
  </SimpleScreen>
)
