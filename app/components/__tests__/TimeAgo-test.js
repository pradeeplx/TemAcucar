import 'react-native'
import React from 'react'
import TimeAgo from '../TimeAgo'
import renderer from 'react-test-renderer'

it('renders correctly', () => {
  const tree = renderer.create(
    <TimeAgo
      style={{ top: 0 }}
      time={Date.now()}
      lowerCase={true}
    />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
