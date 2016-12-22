import 'react-native'
import React from 'react'
import TransactionDemands from '../TransactionDemands'
import renderer from 'react-test-renderer'

const props = {
  style: {top: 0},
  demands: [{
    name: "foo",
    id: 1,
    user: {
      id: 1,
    },
    transactions: [{
      id: 1, user: { id: 1 }, demand: { user: { id: 2 } }
    }, {
      id: 2, user: { id: 1 }, demand: { user: { id: 1 } }
    }]
  }],
  currentUser: { id: 1 },
}

it('renders correctly', () => {
  const tree = renderer.create(
    <TransactionDemands {...props} />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders ActivityIndicator', () => {
  const tree = renderer.create(
    <TransactionDemands {...props} demands={[]} listing />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders NoTransactionDemands', () => {
  const tree = renderer.create(
    <TransactionDemands {...props} demands={[]} />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders LoadMore button', () => {
  const tree = renderer.create(
    <TransactionDemands {...props} demands={[]} canList />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
