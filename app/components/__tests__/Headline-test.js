import 'react-native'
import React from 'react'
import Headline from '../Headline'
import renderer from 'react-test-renderer'

it('renders correctly', () => {
  const tree = renderer.create(
    <Headline
      style={{top: 0}}
    >
      FooBar
    </Headline>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
