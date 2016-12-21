import 'react-native'
import React from 'react'
import Message from '../Message'
import renderer from 'react-test-renderer'

const props = {
  message: {
    created_at: 1482354068787,
    text: 'Foo',
  },
  date: 1482354242154,
  fromCurrentUser: false,
}

it('renders correctly', () => {
  const tree = renderer.create(
    <Message {...props} />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders differently for current user', () => {
  const tree = renderer.create(
    <Message {...props} fromCurrentUser />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});


it('does not display date sentence when no date is given', () => {
  const tree = renderer.create(
    <Message {...props} date={null} />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
