import 'react-native'
import React from 'react'
import NoNotifications from '../NoNotifications'
import renderer from 'react-test-renderer'

it('renders correctly', () => {
  const tree = renderer.create(
    <NoNotifications />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
