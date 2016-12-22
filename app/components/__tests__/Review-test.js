import 'react-native'
import React from 'react'
import Review from '../Review'
import renderer from 'react-test-renderer'

const review = {
  id: 1,
  rating: 5,
  reviewer: {
    first_name: 'foo',
    last_name: 'bar',
    image_url: '#',
  },
}

it('renders correctly', () => {
  const tree = renderer.create(
    <Review review={review} />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders custom text', () => {
  const tree = renderer.create(
    <Review review={{ ...review, text: 'FooBar' }} />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
