import 'react-native'
import React from 'react'
import Notification from '../Notification'
import renderer from 'react-test-renderer'
import { identity } from 'lodash'

const notification = {
  read: true,
  text: 'Foo',
  triggering_user: {
    image_url: 'url',
  },
  created_at: 10E4,
}

it('renders correctly', () => {
  const tree = renderer.create(
    <Notification notification={notification} />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders with different color for unread', () => {
  const tree = renderer.create(
    <Notification notification={{ ...notification, read: false }} />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders without image', () => {
  const tree = renderer.create(
    <Notification notification={{ ...notification, triggering_user: null }} />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
