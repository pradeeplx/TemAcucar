import 'react-native'
import React from 'react'
import ReviewRating from '../ReviewRating'
import renderer from 'react-test-renderer'

it('renders correctly', () => {
  const tree = renderer.create(
    <ReviewRating rating={5} />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
