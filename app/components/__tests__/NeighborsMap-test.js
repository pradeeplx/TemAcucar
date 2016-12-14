import 'react-native'
import React from 'react'
import NeighborsMap from '../NeighborsMap'
import renderer from 'react-test-renderer'

it('renders correctly', () => {
  const tree = renderer.create(
    <NeighborsMap url="#" count={1} />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly with pluralize', () => {
  const tree = renderer.create(
    <NeighborsMap url="#" count={2} />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
