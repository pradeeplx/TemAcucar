import 'react-native'
import React from 'react'
import DemandValidators from '../DemandValidators'

test('DemandValidators object', () => {
  expect(DemandValidators).toMatchSnapshot()
})

describe('DemandValidators.errorMessage cases', () => {
  it('has a default errorMessage', () => {
    expect(DemandValidators.errorMessage({ id: 'foo' })).toMatchSnapshot()
  })
})