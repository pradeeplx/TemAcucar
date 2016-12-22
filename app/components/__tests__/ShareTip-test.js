import 'react-native'
import React from 'react'
import ShareTip from '../ShareTip'
import renderer from 'react-test-renderer'

it('renders correctly', () => {
  const tree = renderer.create(
    <ShareTip title="Foo" callToAction="Bar" />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders default texts', () => {
  const tree = renderer.create(
    <ShareTip />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
