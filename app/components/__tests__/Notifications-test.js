import 'react-native'
import React from 'react'
import Notifications from '../Notifications'
import renderer from 'react-test-renderer'
import { identity } from 'lodash'

const props = {
  notifications: [
    { id: 1 },
    { id: 2 },
  ]
}

it('renders correctly', () => {
  const tree = renderer.create(
    <Notifications {...props} />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders ActivityIndicator', () => {
  const tree = renderer.create(
    <Notifications {...props} listing />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders load more button', () => {
  const tree = renderer.create(
    <Notifications {...props} canList />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
