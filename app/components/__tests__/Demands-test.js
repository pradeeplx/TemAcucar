import { View } from 'react-native'
import React from 'react'
import Demands from '../Demands'
import renderer from 'react-test-renderer'
import { identity } from 'lodash'

const props = {
  demands: [{
    id: 'foo-1',
    user: { id: 1 },
    name: 'Foo',
    description: 'Foo Bar',
    distance: 20,
    created_at: 10E4,
    state: 'bar',
  }],
  listing: false,
  canList: false,
  onList: identity,
  onAccept: identity,
  onRefuse: identity,
  onFlag: identity,
  onComplete: identity,
  onCancel: identity,
  onReactivate: identity,
  onView: identity,
  onShare: identity,
  onFacebook: identity,
  facebookConnecting: identity,
  neighborsCount: 3,
  showTip: false,
  noDemandsText: 'FooBar',
  currentUser: 1,
  admin: true,
}

it('renders correctly', () => {
  const tree = renderer.create(
    <Demands {...props} />
  ).toJSON();
  expect(tree).toMatchSnapshot()
});

it('renders NoDemands text if there is no demands and no listing', () => {
  const tree = renderer.create(
    <Demands {...props} demands={[]} />
  ).toJSON();
  expect(tree).toMatchSnapshot()
});

it('renders tip when there is no demands', () => {
  const tree = renderer.create(
    <Demands {...props} showTip={true} demands={[]} />
  ).toJSON();
  expect(tree).toMatchSnapshot()
});

it('renders tip when there is demands', () => {
  const tree = renderer.create(
    <Demands {...props} showTip={true} />
  ).toJSON();
  expect(tree).toMatchSnapshot()
});
