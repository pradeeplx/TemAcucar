import 'react-native'
import React from 'react'
import Link from '../Link'
import renderer from 'react-test-renderer'

it('renders correctly', () => {
  const tree = renderer.create(
    <Link style={{top: 0}}>FooBar</Link>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
