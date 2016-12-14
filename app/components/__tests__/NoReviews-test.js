import 'react-native'
import React from 'react'
import NoReviews from '../NoReviews'
import renderer from 'react-test-renderer'

it('renders correctly', () => {
  const tree = renderer.create(
    <NoReviews
      user={{ first_name: 'Foo', id: 1 }}
      currentUser={{ id: 1 }}
    />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly when different user', () => {
  const tree = renderer.create(
    <NoReviews
      user={{ first_name: 'Foo', id: 1 }}
      currentUser={{ id: 2 }}
    />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
