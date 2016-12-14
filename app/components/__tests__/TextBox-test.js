import 'react-native'
import React from 'react'
import TextBox from '../TextBox'
import renderer from 'react-test-renderer'

it('renders correctly', () => {
  const tree = renderer.create(
    <TextBox style={{top: 0}}>FooBar</TextBox>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
