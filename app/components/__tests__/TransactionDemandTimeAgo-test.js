import 'react-native'
import React from 'react'
import TransactionDemandTimeAgo from '../TransactionDemandTimeAgo'
import renderer from 'react-test-renderer'

it('renders correctly', () => {
  const tree = renderer.create(
    <TransactionDemandTimeAgo demand={{ created_at: 10E4 }} />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
