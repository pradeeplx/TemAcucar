import 'react-native'
import React from 'react'
import NoTransactionDemands from '../NoTransactionDemands'
import renderer from 'react-test-renderer'

it('renders correctly', () => {
  const tree = renderer.create(
    <NoTransactionDemands />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
