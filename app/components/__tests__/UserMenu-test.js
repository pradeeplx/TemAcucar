import 'react-native'
import React from 'react'
import UserMenu from '../UserMenu'
import renderer from 'react-test-renderer'

const currentUser = {
  image_url: 'http://imgur.com/10',
  first_name: 'Foo',
  last_name: 'Bar',
  facebook_uid: 10,
  admin: false,
}

it('renders correctly', () => {
  const tree = renderer.create(
    <UserMenu currentUser={currentUser} />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders facebook menu item', () => {
  const tree = renderer.create(
    <UserMenu currentUser={{ ...currentUser, facebook_uid: null }} />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders facebook menu item with connecting text', () => {
  const tree = renderer.create(
    <UserMenu currentUser={{ ...currentUser, facebook_uid: null }} facebookConnecting />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders signingOut text', () => {
  const tree = renderer.create(
    <UserMenu currentUser={currentUser} signingOut />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders more items for admin user', () => {
  const tree = renderer.create(
    <UserMenu currentUser={{ ...currentUser, admin: true }} />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
