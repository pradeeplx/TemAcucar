import React, { View, Platform, Dimensions } from 'react-native'
import Colors from "../Colors"
import Headline from "./Headline"

export default WelcomeHeader = ({ headline, children, style }) => (
  <View style={[{
    backgroundColor: Colors.lightBeige,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').width * (1780/2000),
    paddingTop: (Platform.OS === 'ios' ? 40 : 30),
    alignItems: 'center',
  }, style]}>
    <Headline style={{
      fontSize: 18,
      color: Colors.blue,
      marginBottom: 40,
    }}>
      {headline}
    </Headline>
    { children }
  </View>
)
