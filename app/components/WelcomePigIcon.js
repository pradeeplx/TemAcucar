import React from 'react'
import { Image, PixelRatio, Dimensions } from 'react-native'

export default WelcomePigIcon = ({ name, style }) => {
  const ratio = PixelRatio.get()
  let image
  if (ratio <= 1) {
    image = require('../img/pig100.png')
  } else if (ratio <= 1.5) {
    image = require('../img/pig150.png')
  } else if (ratio <= 2) {
    image = require('../img/pig200.png')
  } else if (ratio <= 3) {
    image = require('../img/pig300.png')
  } else if (ratio <= 3.5) {
    image = require('../img/pig350.png')
  } else {
    image = require('../img/pig400.png')
  }
  return (
    <Image source={image} style={[{
      width: 124,
      height: 124,
    }, style]}/>
  )
}
