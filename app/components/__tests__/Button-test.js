import 'react-native'
import React from 'react'
import Button from '../Button'
import renderer from 'react-test-renderer'

const component = renderer.create(
  <Button
    href="#"
    textStyle={{color: 'red'}}
    disabledStyle={{color: 'green'}}
    style={{top: 0}}
  >
    FooBar
  </Button>
);

it('renders correctly', () => {
  expect(component.toJSON()).toMatchSnapshot();
});

it('renders secondary colors', () => {
  const tree = renderer.create(
    <Button {...component.props} secondary />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
