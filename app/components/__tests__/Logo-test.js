import 'react-native'
import React from 'react'
import Logo from '../Logo'
import renderer from 'react-test-renderer'

it('renders correctly', () => {
  const tree = renderer.create(
    <Logo style={{top: 0}}>FooBar</Logo>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
