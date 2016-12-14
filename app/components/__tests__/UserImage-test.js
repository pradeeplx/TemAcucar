import 'react-native'
import React from 'react'
import UserImage from '../UserImage'
import renderer from 'react-test-renderer'

it('renders correctly', () => {
  const tree = renderer.create(
    <UserImage style={{top: 0}} size={20} />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
