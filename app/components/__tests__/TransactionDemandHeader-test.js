import 'react-native'
import React from 'react'
import TransactionDemandHeader from '../TransactionDemandHeader'
import renderer from 'react-test-renderer'

const props = {
  index: 0,
  currentUser: { id: 1 },
  demand: {
    user: {
      id: 1,
      image_url: 'http://google.com',
      first_name: 'foo',
    },
    name: 'bar',
    created_at: 10E4,
  },
}

it('renders correctly', () => {
  const tree = renderer.create(
    <TransactionDemandHeader {...props} />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders user name and different colors when is not currentUser', () => {
  const tree = renderer.create(
    <TransactionDemandHeader {...props} currentUser={{ id: 2 }} />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
