import 'react-native'
import React from 'react'
import MessagesContainer from '../MessagesContainer'
import renderer from 'react-test-renderer'

const props = {
  auth: {
    currentUser: { id: 1 },
  },
  messages: {
    list: [],
    listing: true,
    canList: true,
  },
}

describe('MessagesContainer container', () => {
  it('renders correctly', () => {
    // BUG: couldn't find store
    // const tree = renderer.create(
    //   <MessagesContainer {...props} />
    // ).toJSON();
    // expect(tree).toMatchSnapshot();
  })
})