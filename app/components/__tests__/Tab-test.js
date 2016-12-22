import 'react-native'
import React from 'react'
import Tab from '../Tab'
import renderer from 'react-test-renderer'

it('renders correctly', () => {
  const tree = renderer.create(
    <Tab style={{ top: 0 }}>Foo</Tab>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
