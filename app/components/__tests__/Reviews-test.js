import 'react-native'
import React from 'react'
import Reviews from '../Reviews'
import renderer from 'react-test-renderer'

const props = {
  user: { id: 1 },
  reviews: [{
    id: 1,
    reviewer: {
      first_name: 'foo',
      last_name: 'bar',
      image_url: '#',
    },
  }, {
    id: 2,
    reviewer: {
      first_name: 'foo2',
      last_name: 'bar2',
      image_url: '#',
    },
  }],
  currentUser: { id: 1 },
}

it('renders correctly', () => {
  const tree = renderer.create(
    <Reviews {...props} />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders ActivityIndicator', () => {
  const tree = renderer.create(
    <Reviews {...props} listing />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders load more button', () => {
  const tree = renderer.create(
    <Reviews {...props} canList />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders NoReviews when no review is given', () => {
  const tree = renderer.create(
    <Reviews {...props} reviews={[]} />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it('does not render NoReviews when listing', () => {
  const tree = renderer.create(
    <Reviews {...props} reviews={[]} listing />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
