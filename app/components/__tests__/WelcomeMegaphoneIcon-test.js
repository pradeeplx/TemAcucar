import 'react-native'
import React from 'react'
import WelcomeMegaphoneIcon from '../WelcomeMegaphoneIcon'
import renderer from 'react-test-renderer'

it('renders correctly', () => {
  const tree = renderer.create(
    <WelcomeMegaphoneIcon
      style={{top: 0}}
    >
      FooBar
    </WelcomeMegaphoneIcon>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
