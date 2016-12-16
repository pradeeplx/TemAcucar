import { View } from 'react-native'
import React from 'react'
import FormTextInput from '../FormTextInput'
import renderer from 'react-test-renderer'

it('renders correctly', () => {
  const tree = renderer.create(
    <FormTextInput value='foo' valid={true} />
  ).toJSON();
  expect(tree).toMatchSnapshot()
});

it('renders error message', () => {
  const tree = renderer.create(
    <FormTextInput value='foo' valid={true} error={['foobar', 'barfoo']} />
  ).toJSON();
  expect(tree).toMatchSnapshot()
});
