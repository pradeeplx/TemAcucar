import 'react-native'
import React from 'react'
import WelcomeBottomView from '../WelcomeBottomView'
import renderer from 'react-test-renderer'

it('renders correctly', () => {
  const tree = renderer.create(
    <WelcomeBottomView style={{top: 0}}>FooBar</WelcomeBottomView>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
