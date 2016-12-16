import { View } from 'react-native'
import React from 'react'
import DemandsTip from '../DemandsTip'
import renderer from 'react-test-renderer'

const props = {
  currentUser: { facebook_uid: 1 },
  neighborsCount: 60,
  facebookConnecting: 'foo',
}

it('renders correctly', () => {
  const tree = renderer.create(
    <DemandsTip {...props} />
  ).toJSON();
  expect(tree).toMatchSnapshot()
});

it('renders different text when neighborsCount < 30', () => {
  const tree = renderer.create(
    <DemandsTip {...props} neighborsCount={29} />
  ).toJSON();
  expect(tree).toMatchSnapshot()
});

it('renders facebook tip when no user uid is set', () => {
  const tree = renderer.create(
    <DemandsTip {...props} currentUser={{}} />
  ).toJSON();
  expect(tree).toMatchSnapshot()
});
