import React, { Image, PixelRatio } from 'react-native'

export default LogoMarker = ({ style }) => {
  const ratio = PixelRatio.get()
  let image
  if (ratio <= 1) {
    image = require('../img/marker100.png')
  } else if (ratio <= 1.5) {
    image = require('../img/marker150.png')
  } else if (ratio <= 2) {
    image = require('../img/marker200.png')
  } else if (ratio <= 3) {
    image = require('../img/marker300.png')
  } else if (ratio <= 3.5) {
    image = require('../img/marker350.png')
  } else {
    image = require('../img/marker400.png')
  }
  return (
    <Image source={image} style={[{
      width: 15,
      height: 15,
    }, style]}/>
  )
}
