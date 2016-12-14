import 'react-native'
import React from 'react'
import SetLocationHeader from '../SetLocationHeader'
import renderer from 'react-test-renderer'

it('renders correctly', () => {
  const tree = renderer.create(
    <SetLocationHeader />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
