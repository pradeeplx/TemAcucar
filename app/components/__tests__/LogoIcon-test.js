import 'react-native'
import React from 'react'
import LogoIcon from '../LogoIcon'
import renderer from 'react-test-renderer'

it('renders correctly', () => {
  const tree = renderer.create(
    <LogoIcon style={{top: 0}}>FooBar</LogoIcon>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
