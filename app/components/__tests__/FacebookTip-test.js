import { View } from 'react-native'
import React from 'react'
import FacebookTip from '../FacebookTip'
import renderer from 'react-test-renderer'

it('renders correctly', () => {
  const tree = renderer.create(
    <FacebookTip title="Foo" />
  ).toJSON();
  expect(tree).toMatchSnapshot()
});

it('renders default title', () => {
  const tree = renderer.create(
    <FacebookTip />
  ).toJSON();
  expect(tree).toMatchSnapshot()
});
