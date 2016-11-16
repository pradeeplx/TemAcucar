import React from 'react'
import { Image, PixelRatio, Dimensions } from 'react-native'

export default WelcomeNotebookIcon = ({ name, style }) => {
  const ratio = PixelRatio.get()
  let image
  if (ratio <= 1) {
    image = require('../img/notebook100.png')
  } else if (ratio <= 1.5) {
    image = require('../img/notebook150.png')
  } else if (ratio <= 2) {
    image = require('../img/notebook200.png')
  } else if (ratio <= 3) {
    image = require('../img/notebook300.png')
  } else if (ratio <= 3.5) {
    image = require('../img/notebook350.png')
  } else {
    image = require('../img/notebook400.png')
  }
  return (
    <Image source={image} style={[{
      width: 124,
      height: 124,
    }, style]}/>
  )
}
