import React, { Component } from 'react'
import { Platform, View, Text } from 'react-native'
import GiftedSpinner from 'react-native-gifted-spinner'

import Colors from "../Colors"
import Sentence from "./Sentence"
import LoadMore from "./LoadMore"
import Review from "./Review"
import NoReviews from "./NoReviews"

export default class Reviews extends Component {
  render() {
    const { onList, user, reviews, listing, canList, currentUser } = this.props
    return (
      <View style={{
        flex: 1,
        flexDirection: 'column',
        alignSelf: 'stretch',
        alignItems: 'center',
      }}>
        { reviews.map((review, index) => (
          <Review
            key={review.id}
            review={review}
            index={index}
            currentUser={currentUser}
          />
        )) }
        { listing && <GiftedSpinner style={{ marginTop: 20 }} /> }
        { reviews.length === 0 && !listing && <NoReviews user={user} currentUser={currentUser} /> }
        { canList && !listing &&
          <LoadMore onPress={onList} style={{
            marginTop: 20,
          }} />
        }
      </View>
    )
  }
}
