import { View } from 'react-native'
import React from 'react'
import DemandUserButtons from '../DemandUserButtons'
import renderer from 'react-test-renderer'

const props = {
  demand: {
    state: 'active',
    completing: false,
    canceling: false,
    reactivating: false,
  },
  admin: true,
}

it('renders null when it has no callbacks', () => {
  const tree = renderer.create(
    <DemandUserButtons {...props} />
  ).toJSON();
  expect(tree).toMatchSnapshot()
});

it('renders correctly when canComplete and canCancel', () => {
  const tree = renderer.create(
    <DemandUserButtons {...props} onComplete={true} onCancel={true} />
  ).toJSON();
  expect(tree).toMatchSnapshot()
});

it('renders correctly when canComplete and canCancel for non admins', () => {
  const tree = renderer.create(
    <DemandUserButtons {...props} onComplete={true} onCancel={true} admin={false} />
  ).toJSON();
  expect(tree).toMatchSnapshot()
});

it('renders correctly when canReactivate', () => {
  const tree = renderer.create(
    <DemandUserButtons {...props} onReactivate={true} demand={{ ...props.demand, state: 'completed' }} />
  ).toJSON();
  expect(tree).toMatchSnapshot()
});

it('renders correctly when canReactivate and canCancel', () => {
  const tree = renderer.create(
    <DemandUserButtons {...props} onReactivate={true} onCancel={true} demand={{ ...props.demand, state: 'flagged' }} />
  ).toJSON();
  expect(tree).toMatchSnapshot()
});
