import 'react-native'
import React from 'react'
import Sentence from '../Sentence'
import renderer from 'react-test-renderer'

it('renders correctly', () => {
  const tree = renderer.create(
    <Sentence style={{top: 0}}>FooBar</Sentence>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
