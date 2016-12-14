import 'react-native'
import React from 'react'
import Review from '../Review'
import renderer from 'react-test-renderer'

it('renders correctly', () => {
  const tree = renderer.create(
    <Review
      review={{ id: 1, reviewer: { first_name: 'foo', last_name: 'bar', image_url: '#' } }}
    />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
