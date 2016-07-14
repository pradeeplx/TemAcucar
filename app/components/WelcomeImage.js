import React, { Image, PixelRatio, Dimensions } from 'react-native'

export default WelcomeImage = ({ style }) => {
  const ratio = PixelRatio.get()
  let image
  if (ratio <= 1) {
    image = require('../img/welcome100.png')
  } else if (ratio <= 1.5) {
    image = require('../img/welcome150.png')
  } else if (ratio <= 2) {
    image = require('../img/welcome200.png')
  } else if (ratio <= 3) {
    image = require('../img/welcome300.png')
  } else if (ratio <= 3.5) {
    image = require('../img/welcome350.png')
  } else {
    image = require('../img/welcome400.png')
  }
  return (
    <Image source={image} style={[{
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').width * (1780/2000),
    }, style]}/>
  )
}
