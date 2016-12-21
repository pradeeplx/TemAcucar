import 'react-native'
import React from 'react'
import Messages from '../Messages'
import renderer from 'react-test-renderer'

const props = {
  currentUser: { id: 1 },
  messages: [{
    id: 1,
    user_id: 1,
    created_at: 1482354068787,
    text: 'Foo',
  }, {
    id: 2,
    user_id: 2,
    created_at: 1482354068890,
    text: 'Bar',
  }],
  listing: false,
  canList: false,
}

it('renders correctly', () => {
  const tree = renderer.create(
    <Messages {...props} />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders load more button', () => {
  const tree = renderer.create(
    <Messages {...props} canList />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders ActivityIndicator', () => {
  const tree = renderer.create(
    <Messages {...props} listing />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders without messages', () => {
  const tree = renderer.create(
    <Messages {...props} messages={[]} />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
