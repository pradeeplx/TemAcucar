import { View } from 'react-native'
import React from 'react'
import EmailInput from '../EmailInput'
import renderer from 'react-test-renderer'

it('renders correctly', () => {
  const tree = renderer.create(
    <EmailInput value='foo' valid={true} />
  ).toJSON();
  expect(tree).toMatchSnapshot()
});
