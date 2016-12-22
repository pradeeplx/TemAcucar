import 'react-native'
import React from 'react'
import Tip from '../Tip'
import renderer from 'react-test-renderer'

it('renders correctly', () => {
  const tree = renderer.create(
    <Tip style={{ top: 0 }}>Foo</Tip>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
