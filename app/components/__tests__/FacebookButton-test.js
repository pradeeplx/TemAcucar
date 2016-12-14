import 'react-native'
import React from 'react'
import FacebookButton from '../FacebookButton'
import renderer from 'react-test-renderer'

it('renders correctly', () => {
  const tree = renderer.create(
    <FacebookButton
      href="#"
      textStyle={{color: 'red'}}
    >
      FooBar
    </FacebookButton>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
