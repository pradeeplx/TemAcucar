import 'react-native'
import React from 'react'
import Tab from '../Tab'
import renderer from 'react-test-renderer'
import { identity } from 'lodash'

it('renders correctly', () => {
  const tree = renderer.create(
    <Tab
      style={{ top: 0 }}
      onRefresh={identity}
    >
      Foo
    </Tab>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
