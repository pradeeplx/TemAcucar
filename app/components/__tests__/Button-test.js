import 'react-native'
import React from 'react'
import Button from '../Button'
import renderer from 'react-test-renderer'

it('renders correctly', () => {
  const tree = renderer.create(
    <Button
      href="#"
      textStyle={{color: 'red'}}
      disabledStyle={{color: 'green'}}
      style={{top: 0}}
      secondary>
      FooBar
    </Button>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
