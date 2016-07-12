import React, { Component, View, ScrollView } from 'react-native'
import GoogleAnalytics from 'react-native-google-analytics-bridge'
import Colors from "../Colors"
import NavBar from "../components/NavBar"
import ReviewsContainer from "../containers/ReviewsContainer"

export default class UserReviews extends Component {
  componentDidMount() {
    GoogleAnalytics.trackScreenView('UserReviews')
  }

  render() {
    const { auth: { currentUser } } = this.props
    return(
      <View style={{
        flex: 1,
        backgroundColor: Colors.lightBeige,
      }}>
        <NavBar title="Minhas avaliações" />
        <ScrollView style={{
          flex: 1,
        }}>
          <ReviewsContainer {...this.props} user={currentUser} />
        </ScrollView>
      </View>
    )
  }
}
