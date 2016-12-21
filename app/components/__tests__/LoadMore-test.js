import 'react-native'
import React from 'react'
import LoadMore from '../LoadMore'
import renderer from 'react-test-renderer'

it('renders correctly', () => {
  const tree = renderer.create(
    <LoadMore style={{top: 0}} />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
