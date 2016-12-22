import { View } from 'react-native'
import React from 'react'
// import Router from '../Router'
import renderer from 'react-test-renderer'

it('renders correctly', () => {
  // BUG with jest and react-native-router-flux
  // const tree = renderer.create(
  //   <Router style={{top: 0}}>
  //     <View style={{bottom: 0}}>Foobar</View>
  //   </Router>
  // ).toJSON();
  // expect(tree).toMatchSnapshot();
});
