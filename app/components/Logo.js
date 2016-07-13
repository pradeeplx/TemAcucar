import React, { Image, PixelRatio } from 'react-native'

export default Logo = ({ style }) => {
  const ratio = PixelRatio.get()
  let image
  if (ratio <= 1) {
    image = require('../img/logo100.png')
  } else if (ratio <= 1.5) {
    image = require('../img/logo150.png')
  } else if (ratio <= 2) {
    image = require('../img/logo200.png')
  } else if (ratio <= 3) {
    image = require('../img/logo300.png')
  } else if (ratio <= 3.5) {
    image = require('../img/logo350.png')
  } else {
    image = require('../img/logo400.png')
  }
  return (
    <Image source={image} style={[{
      width: 225,
      height: 144,
    }, style]}/>
  )
}
