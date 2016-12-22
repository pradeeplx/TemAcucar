import React from 'react'
import { Dimensions } from 'react-native'
import { clamp, reduceRight } from 'lodash'

export const calculateFontFactor = ({ height, scale }) => {
  return clamp((height * scale) / 1024, 1, 1.5)
}

export const fontFactor = () => calculateFontFactor(Dimensions.get('window'))

export const maxLower = (number, ...options) => {
  return reduceRight(options, (acc, curr) =>
    number <= curr ? curr : acc)
}
