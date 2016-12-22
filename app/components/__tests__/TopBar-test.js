import 'react-native'
import React from 'react'
import TopBar from '../TopBar'
import renderer from 'react-test-renderer'
import { identity } from 'lodash'

it('renders correctly', () => {
  const tree = renderer.create(
    <TopBar style={{top: 0}} />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
