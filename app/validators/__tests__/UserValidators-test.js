import 'react-native'
import React from 'react'
import UserValidators from '../UserValidators'

test('UserValidators object', () => {
  expect(UserValidators).toMatchSnapshot()
})

describe('UserValidators.errorMessage cases', () => {
  it('error.id is not_found', () => {
    expect(UserValidators.errorMessage({ id: 'not_found' })).toMatchSnapshot()
  })

  it('error.id is email_is_already_taken', () => {
    expect(UserValidators.errorMessage({ id: 'email_is_already_taken' })).toMatchSnapshot()
  })

  it('error.id is unauthorized', () => {
    expect(UserValidators.errorMessage({ id: 'unauthorized' })).toMatchSnapshot()
  })

  it('has a default errorMessage', () => {
    expect(UserValidators.errorMessage({ id: 'foo' })).toMatchSnapshot()
  })
})