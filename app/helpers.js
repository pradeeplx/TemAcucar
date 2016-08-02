import React, { Dimensions } from 'react-native'

export function fontFactor() {
  const dimensions = Dimensions.get('window')
  const height = dimensions.height * dimensions.scale
  const factor = (height > 1024 ? ((height / 1024)) : 1)
  const maxFactor = 1.5
  return (factor > 1 ? (factor > maxFactor ? maxFactor : factor) : 1)
}
