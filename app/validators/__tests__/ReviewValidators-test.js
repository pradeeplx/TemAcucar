import 'react-native'
import React from 'react'
import ReviewValidators from '../ReviewValidators'

test('ReviewValidators object', () => {
  expect(ReviewValidators).toMatchSnapshot()
})

describe('ReviewValidators.errorMessage cases', () => {
  it('has a default errorMessage', () => {
    expect(ReviewValidators.errorMessage({ id: 'foo' })).toMatchSnapshot()
  })
})