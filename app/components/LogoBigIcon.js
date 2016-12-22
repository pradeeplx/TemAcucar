import React from 'react'
import { Image, PixelRatio } from 'react-native'
import { maxLower } from '../helpers'

export default LogoBigIcon = ({ style }) => {
  const ratio = PixelRatio.get()
  const result = maxLower(ratio, 1, 1.5, 2, 3, 3.5, 4)
  const image = require(`../img/bigIcon${result * 100}.png`)
  return (
    <Image source={image} style={[{
      width: 40,
      height: 40,
    }, style]}/>
  )
}
