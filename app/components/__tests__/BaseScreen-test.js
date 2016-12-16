import 'react-native'
import React from 'react'
// import BaseScreen from '../BaseScreen'
import renderer from 'react-test-renderer'

it('renders correctly', () => {
  // BUG with jest and react-native-router-flux
  // const tree = renderer.create(
  //   <BaseScreen
  //     navBarTitle="Foo"
  //     navBar={null}
  //   >
  //     FooBar
  //   </BaseScreen>
  // ).toJSON();
  // expect(tree).toMatchSnapshot();
});
