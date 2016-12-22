import 'react-native'
import React from 'react'
import UserMenuItem from '../UserMenuItem'
import renderer from 'react-test-renderer'

const props = {
  style: { top: 0 },
  icon: 'ios-add',
  iconStyle: { top: 1 },
  children: 'FooBar',
}

it('renders correctly', () => {
  const tree = renderer.create(
    <UserMenuItem {...props} />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
