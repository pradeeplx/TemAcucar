import React from 'react'
import { Image, PixelRatio, Dimensions } from 'react-native'

export default WelcomeGlassIcon = ({ name, style }) => {
  const ratio = PixelRatio.get()
  let image
  if (ratio <= 1) {
    image = require('../img/glass100.png')
  } else if (ratio <= 1.5) {
    image = require('../img/glass150.png')
  } else if (ratio <= 2) {
    image = require('../img/glass200.png')
  } else if (ratio <= 3) {
    image = require('../img/glass300.png')
  } else if (ratio <= 3.5) {
    image = require('../img/glass350.png')
  } else {
    image = require('../img/glass400.png')
  }
  return (
    <Image source={image} style={[{
      width: 124,
      height: 124,
    }, style]}/>
  )
}
