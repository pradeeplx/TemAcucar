import 'react-native'
import React from 'react'
import MapText from '../MapText'
import renderer from 'react-test-renderer'

it('renders correctly', () => {
  const tree = renderer.create(
    <MapText>Foo</MapText>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
