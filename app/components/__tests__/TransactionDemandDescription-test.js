import 'react-native'
import React from 'react'
import TransactionDemandDescription from '../TransactionDemandDescription'
import renderer from 'react-test-renderer'

it('renders correctly', () => {
  const tree = renderer.create(
    <TransactionDemandDescription
      index={0}
      currentUser={{ id: 1 }}
      demand={{
        user: {
          id: 1,
          image_url: 'http://google.com',
          first_name: 'foo',
        },
        name: 'bar',
      }}
    />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
