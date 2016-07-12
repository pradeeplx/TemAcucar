import React, { View, Platform } from 'react-native'

import Colors from "../Colors"
import Sentence from "./Sentence"
import TimeAgo from "./TimeAgo"
import ReviewRating from "./ReviewRating"

export default Review = ({ review: { rating, text, reviewer, created_at } }) => (
  <View style={{
    flex: 1,
    flexDirection: 'row',
    alignSelf: 'stretch',
    backgroundColor: Colors.white,
    paddingVertical: 10,
    borderBottomWidth: 12,
    borderColor: Colors.lightBeige,
  }}>
    <View style={{
      flex: 2,
      flexDirection: 'column',
      alignItems: 'center',
    }}>
      <UserImage source={{uri: reviewer.image_url}} />
    </View>
    <View style={{
      flex: 8,
      alignItems: 'flex-start',
      flexDirection: 'column',
    }}>
      <Sentence style={[{
        fontSize: 12,
        color: Colors.blue,
      }, (Platform.OS === 'ios' ? { fontFamily: 'Avenir-Black' } : { fontWeight: 'bold' })]}>
        { `${reviewer.first_name} ${reviewer.last_name}` }
      </Sentence>
      <TimeAgo time={created_at} style={{
        fontSize: 12,
        color: Colors.black,
      }} />
      <Sentence style={{
        fontSize: 10,
        color: Colors.darkGray,
        marginBottom: 6,
      }}>
        { text || `${reviewer.first_name} não descreveu sua experiência.` }
      </Sentence>
      <ReviewRating rating={rating} />
    </View>
  </View>
)
