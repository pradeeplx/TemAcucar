import React, { Component, View, Text } from 'react-native'
import GoogleAnalytics from 'react-native-google-analytics-bridge'
import Swiper from 'react-native-swiper'

export default class SignInOrSignUp extends Component {
  componentDidMount() {
    GoogleAnalytics.trackScreenView('Welcome')
  }

  render() {
    return(
      <Swiper
        loop={false}
      >
        <View style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <Text>ABC</Text>
        </View>
        <View style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <Text>123</Text>
        </View>
      </Swiper>
    )
  }
}
