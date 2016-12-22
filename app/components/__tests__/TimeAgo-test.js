import 'react-native'
import React from 'react'
import TimeAgo from '../TimeAgo'
import renderer from 'react-test-renderer'

it('renders correctly', () => {
  const tree = renderer.create(
    <TimeAgo style={{ top: 0 }} time={10E4} />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders in lowerCase', () => {
  const tree = renderer.create(
    <TimeAgo time={10E4} lowerCase={true} />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
