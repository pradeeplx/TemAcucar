import React, { Component, View } from 'react-native'
import GoogleAnalytics from 'react-native-google-analytics-bridge'
import Colors from "../Colors"
import BaseScreen from "../components/BaseScreen"
import SetLocationHeader from "../components/SetLocationHeader"
import SetLocation from "../components/SetLocation"

export default class ReviewLocation extends Component {
  componentDidMount() {
    GoogleAnalytics.trackScreenView('ReviewLocation')
  }

  render() {
    return(
      <BaseScreen>
        <SetLocationHeader />
        <SetLocation {...this.props} />
      </BaseScreen>
    )
  }
}
