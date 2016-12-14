import 'react-native'
import React from 'react'
import OrSeparator from '../OrSeparator'
import renderer from 'react-test-renderer'

it('renders correctly', () => {
  const tree = renderer.create(
    <OrSeparator />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
