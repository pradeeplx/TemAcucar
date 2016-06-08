import React, { Image, PixelRatio } from 'react-native'

export default LogoIcon = ({ style }) => {
  const ratio = PixelRatio.get()
  let image
  if (ratio <= 1) {
    image = require('../img/icon100.png')
  } else if (ratio <= 1.5) {
    image = require('../img/icon150.png')
  } else if (ratio <= 2) {
    image = require('../img/icon200.png')
  } else if (ratio <= 3) {
    image = require('../img/icon300.png')
  } else if (ratio <= 3.5) {
    image = require('../img/icon350.png')
  } else {
    image = require('../img/icon400.png')
  }
  return (
    <Image source={image} style={[{
      width: 25,
      height: 25,
    }, style]}/>
  )
}
