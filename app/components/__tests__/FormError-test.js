import 'react-native'
import React from 'react-native'
import FormError from '../FormError'
import renderer from 'react-test-renderer'

it('renders correctly', () => {
  const tree = renderer.create(
    <FormError message="Bug!" />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});