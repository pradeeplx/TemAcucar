import React from 'react'
import { Image, PixelRatio, Dimensions } from 'react-native'
import { maxLower } from '../helpers'

export default WelcomeImage = ({ style }) => {
  const ratio = PixelRatio.get()
  const result = maxLower(ratio, 1, 1.5, 2, 3, 3.5, 4)
  const image = require(`../img/welcome${result * 100}.png`)
  return (
    <Image source={image} style={[{
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').width * (1780/2000),
    }, style]}/>
  )
}
