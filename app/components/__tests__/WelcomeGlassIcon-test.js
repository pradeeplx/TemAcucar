import 'react-native'
import React from 'react'
import WelcomeGlassIcon from '../WelcomeGlassIcon'
import renderer from 'react-test-renderer'

it('renders correctly', () => {
  const tree = renderer.create(
    <WelcomeGlassIcon style={{top: 0}}>FooBar</WelcomeGlassIcon>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
