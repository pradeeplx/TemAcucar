import 'react-native'
import React from 'react'
import Paragraph from '../Paragraph'
import renderer from 'react-test-renderer'

it('renders correctly', () => {
  const tree = renderer.create(
    <Paragraph>FooBar</Paragraph>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
