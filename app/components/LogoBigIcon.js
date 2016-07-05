import React, { Image, PixelRatio } from 'react-native'

export default LogoBigIcon = ({ style }) => {
  const ratio = PixelRatio.get()
  let image
  if (ratio <= 1) {
    image = require('../img/bigIcon100.png')
  } else if (ratio <= 1.5) {
    image = require('../img/bigIcon150.png')
  } else if (ratio <= 2) {
    image = require('../img/bigIcon200.png')
  } else if (ratio <= 3) {
    image = require('../img/bigIcon300.png')
  } else if (ratio <= 3.5) {
    image = require('../img/bigIcon350.png')
  } else {
    image = require('../img/bigIcon400.png')
  }
  return (
    <Image source={image} style={[{
      width: 40,
      height: 40,
    }, style]}/>
  )
}
