import React from 'react'
import { Dimensions } from 'react-native'

export const calculateFontFactor = ({ height, scale }) => {
  const factor = Math.max((height * scale) / 1024, 1)
  return Math.min(factor, 1.5)
}

export const fontFactor = () => calculateFontFactor(Dimensions.get('window'))
