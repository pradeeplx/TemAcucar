import 'react-native'
import React from 'react'
import Reviews from '../Reviews'
import renderer from 'react-test-renderer'
import { identity } from 'lodash'

it('renders correctly', () => {
  const tree = renderer.create(
    <Reviews
      onList={identity}
      user={{ id: 1 }}
      reviews={[{ id: 1, reviewer: { first_name: 'foo', last_name: 'bar', image_url: '#' } }, { id: 2, reviewer: { first_name: 'foo2', last_name: 'bar2', image_url: '#' } }]}
      currentUser={{ id: 1 }}
      canList
      listing
    />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
