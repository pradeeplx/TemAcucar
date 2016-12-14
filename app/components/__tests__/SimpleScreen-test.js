import 'react-native'
import React from 'react'
// import SimpleScreen from '../SimpleScreen'
import renderer from 'react-test-renderer'
import { identity } from 'lodash'

it('renders correctly', () => {
  // BUG with jest and react-native-router-flux
  // const tree = renderer.create(
  //   <SimpleScreen
  //     headline="Foo"
  //     navBar={identity}
  //     navBarTitle="Bar"
  //     addTopMargin={0}
  //     logo="complete"
  //   >
  //     Foo
  //   </SimpleScreen>
  // ).toJSON();
  // expect(tree).toMatchSnapshot();
});
