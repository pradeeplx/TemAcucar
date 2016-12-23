import 'react-native'
import React from 'react'
import MessageValidators from '../MessageValidators'

test('MessageValidators object', () => {
  expect(MessageValidators).toMatchSnapshot()
})

describe('MessageValidators.errorMessage cases', () => {
  it('has a default errorMessage', () => {
    expect(MessageValidators.errorMessage({ id: 'foo' })).toMatchSnapshot()
  })
})