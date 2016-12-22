import 'react-native'
import React from 'react'
import * as subject from '../helpers'

describe('calculateFontFactor function', () => {
  it('returns 1 if height is up to 1024', () => {
    expect(subject.calculateFontFactor({
      height: 1024,
      scale: 1,
    })).toBe(1);
  })

  it('returns the factor if height is greater than 1024', () => {
    expect(subject.calculateFontFactor({
      height: 1280,
      scale: 1,
    })).toBe(1.25);
  })

  it('returns maxFactor if factor is grater than 1.5', () => {
    expect(subject.calculateFontFactor({
      height: 10E4,
      scale: 1,
    })).toBe(1.5);
  })
})
