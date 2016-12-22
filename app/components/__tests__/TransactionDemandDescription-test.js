import 'react-native'
import React from 'react'
import TransactionDemandDescription from '../TransactionDemandDescription'
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
  },
}

it('renders correctly', () => {
  const tree = renderer.create(
    <TransactionDemandDescription {...props} />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it('truncates the name', () => {
  const tree = renderer.create(
    <TransactionDemandDescription {...props} demand={{ ...props.demand, name: 'foobarfoobarfoobarfoobarfoobarfoobarfoobar' }} />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders user name when is not currentUser', () => {
  const tree = renderer.create(
    <TransactionDemandDescription {...props} currentUser={{ id: 2 }} />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
