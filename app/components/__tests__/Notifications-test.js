import 'react-native'
import React from 'react'
import Notifications from '../Notifications'
import renderer from 'react-test-renderer'
import { identity } from 'lodash'

it('renders correctly', () => {
  const tree = renderer.create(
    <Notifications
      notifications={[{ id: 1 }, { id: 2 }]}
      onList={identity}
      onView={identity}
      listing
      canList
    />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
