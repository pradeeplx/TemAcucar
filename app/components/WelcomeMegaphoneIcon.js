import React, { Image, PixelRatio, Dimensions } from 'react-native'

export default WelcomeMegaphoneIcon = ({ name, style }) => {
  const ratio = PixelRatio.get()
  let image
  if (ratio <= 1) {
    image = require('../img/megaphone100.png')
  } else if (ratio <= 1.5) {
    image = require('../img/megaphone150.png')
  } else if (ratio <= 2) {
    image = require('../img/megaphone200.png')
  } else if (ratio <= 3) {
    image = require('../img/megaphone300.png')
  } else if (ratio <= 3.5) {
    image = require('../img/megaphone350.png')
  } else {
    image = require('../img/megaphone400.png')
  }
  return (
    <Image source={image} style={[{
      width: 124,
      height: 124,
    }, style]}/>
  )
}
