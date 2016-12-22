import 'react-native'
import React from 'react'
import TransactionMiniature from '../TransactionMiniature'
import renderer from 'react-test-renderer'

const props = {
  transaction: {
    user: {
      id: 1,
      image_url: 'http://google.com',
      first_name: 'Foo',
      last_name: 'Bar',
    },
    demand: {
      name: "foo",
      id: 1,
      user: {
        id: 2,
        image_url: 'http://imgur.com/10',
        first_name: 'Baru',
        last_name: 'Fooa',
      },
    },
    last_message_text: null,
  },
  currentUser: { id: 1 },
  index: 0,
}

it('renders correctly', () => {
  const tree = renderer.create(
    <TransactionMiniature {...props} />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders for other user', () => {
  const tree = renderer.create(
    <TransactionMiniature {...props} currentUser={{ id: 2 }} />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders differently for other index', () => {
  const tree = renderer.create(
    <TransactionMiniature {...props} index={2} />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders custom last_message_text and truncates', () => {
  const tree = renderer.create(
    <TransactionMiniature {...props} transaction={{ ...props.transaction, last_message_text: 'foobarfoobarfoobarfoobarfoobarfoobarfoobar' }} />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
