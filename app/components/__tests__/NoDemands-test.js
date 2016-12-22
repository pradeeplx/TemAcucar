import 'react-native'
import React from 'react'
import NoDemands from '../NoDemands'
import renderer from 'react-test-renderer'

it('renders correctly', () => {
  const tree = renderer.create(
    <NoDemands text="Foo Bar" />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders default text', () => {
  const tree = renderer.create(
    <NoDemands />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
