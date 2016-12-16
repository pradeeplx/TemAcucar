import { View } from 'react-native'
import React from 'react'
import PasswordInput from '../PasswordInput'
import renderer from 'react-test-renderer'

it('renders correctly', () => {
  const tree = renderer.create(
    <PasswordInput value='foo' valid={true} />
  ).toJSON();
  expect(tree).toMatchSnapshot()
});
