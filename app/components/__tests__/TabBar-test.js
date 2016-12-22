import 'react-native'
import React from 'react'
import TabBar from '../TabBar'
import renderer from 'react-test-renderer'

const props = {
  notificationsCount: 0,
  activeTab: 1,
  tabs: ['ios-barcode', 'ios-battery-charging', 'ios-cafe'],
}

it('renders correctly', () => {
  const tree = renderer.create(
    <TabBar {...props} />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders notificationsCount', () => {
  const tree = renderer.create(
    <TabBar {...props} notificationsCount={2} />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
