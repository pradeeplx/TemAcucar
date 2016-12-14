import 'react-native'
import React from 'react'
import TransactionDemand from '../TransactionDemand'
import renderer from 'react-test-renderer'

it('renders correctly', () => {
  const tree = renderer.create(
    <TransactionDemand
      style={{top: 0}}
      demand={{
        name: "foo",
        user: {
          id: 1,
        },
        transactions: [{
          id: 1, user: { id: 1 }, demand: { user: { id: 2 } }
        }, {
          id: 2, user: { id: 1 }, demand: { user: { id: 1 } }
        }]
      }}
      currentUser={{
        id: 1,
      }}
    />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
