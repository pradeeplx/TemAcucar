import 'react-native'
import React from 'react'
import Colors from '../Colors'

test('Colors object', () => {
  expect(Colors).toMatchSnapshot()
})
