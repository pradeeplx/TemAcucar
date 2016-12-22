import React from 'react'
import { Image, PixelRatio } from 'react-native'
import { maxLower } from '../helpers'

export default LogoMarker = ({ style }) => {
  const ratio = PixelRatio.get()
  const result = maxLower(ratio, 1, 1.5, 2, 3, 3.5, 4)
  const image = require(`../img/marker${result * 100}.png`)
  return (
    <Image source={image} style={[{
      width: 15,
      height: 15,
    }, style]}/>
  )
}
