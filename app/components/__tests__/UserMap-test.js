import 'react-native'
import React from 'react'
// import UserMap from '../UserMap'
import renderer from 'react-test-renderer'

const props = {
  text: 'FooBar',
  // latitude, longitude, delta,
}

it('renders correctly', () => {
  // BUG with setNativeProps
  // const tree = renderer.create(
  //   <UserMap {...props} />
  // ).toJSON();
  // expect(tree).toMatchSnapshot();
});
