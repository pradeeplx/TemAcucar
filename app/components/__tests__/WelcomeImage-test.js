import 'react-native'
import React from 'react'
import WelcomeImage from '../WelcomeImage'
import renderer from 'react-test-renderer'

it('renders correctly', () => {
  const tree = renderer.create(
    <WelcomeImage style={{top: 0}}>FooBar</WelcomeImage>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
