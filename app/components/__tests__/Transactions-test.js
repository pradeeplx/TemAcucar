import 'react-native'
import React from 'react'
import Transactions from '../Transactions'
import renderer from 'react-test-renderer'

const user = {
  id: 1,
  image_url: 'http://google.com',
  first_name: 'Foo',
  last_name: 'Bar',
}
const user2 = {
  id: 2,
  image_url: 'http://imgur.com/10',
  first_name: 'Baru',
  last_name: 'Fooa',
}
const props = {
  demand: {
    transactions: [{
      id: 1,
      user,
      demand: {
        name: "foo",
        id: 1,
        user: user2,
      },
    }, {
      id: 2,
      user,
      demand: {
        name: "bar",
        id: 2,
        user: user2,
      },
    }],
  },
  currentUser: { id: 2 },
}

it('renders correctly', () => {
  const tree = renderer.create(
    <Transactions {...props} />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
