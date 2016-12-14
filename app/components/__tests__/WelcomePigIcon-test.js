import 'react-native'
import React from 'react'
import WelcomePigIcon from '../WelcomePigIcon'
import renderer from 'react-test-renderer'

it('renders correctly', () => {
  const tree = renderer.create(
    <WelcomePigIcon
      style={{top: 0}}
    >
      FooBar
    </WelcomePigIcon>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
