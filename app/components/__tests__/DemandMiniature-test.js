import { View } from 'react-native'
import React from 'react'
import DemandMiniature from '../DemandMiniature'
import renderer from 'react-test-renderer'

const props = {
  demand: {
    user: { id: 1 },
    name: 'Foo',
    description: 'Foo Bar',
    distance: 20,
    created_at: 10E4,
    state: 'bar',
  },
  currentUser: 1,
  index: 1,
  admin: true,
}

it('renders correctly', () => {
  const tree = renderer.create(
    <DemandMiniature {...props} />
  ).toJSON();
  expect(tree).toMatchSnapshot()
});

it('renders borderTopWidth 0 when index is 0', () => {
  const tree = renderer.create(
    <DemandMiniature {...props} index={0} />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders showClose styles', () => {
  const tree = renderer.create(
    <DemandMiniature {...props} admin={false} currentUser={2} />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders 800m instead of 0.8km for distance', () => {
  const tree = renderer.create(
    <DemandMiniature {...props} demand={{ ...props.demand, distance: 0.8 }} />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders user first_name if user is not the currentUser', () => {
  const tree = renderer.create(
    <DemandMiniature {...props} currentUser={2} />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
