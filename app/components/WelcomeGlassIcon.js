import React from 'react'
import { Image, PixelRatio, Dimensions } from 'react-native'
import { maxLower } from '../helpers'

export default WelcomeGlassIcon = ({ name, style }) => {
  const ratio = PixelRatio.get()
  const result = maxLower(ratio, 1, 1.5, 2, 3, 3.5, 4)
  const image = require(`../img/glass${result * 100}.png`)
  return (
    <Image source={image} style={[{
      width: 124,
      height: 124,
    }, style]}/>
  )
}
