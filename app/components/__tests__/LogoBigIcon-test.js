import 'react-native'
import React from 'react'
import LogoBigIcon from '../LogoBigIcon'
import renderer from 'react-test-renderer'

it('renders correctly', () => {
  const tree = renderer.create(
    <LogoBigIcon
      style={{top: 0}}
    >
      FooBar
    </LogoBigIcon>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
