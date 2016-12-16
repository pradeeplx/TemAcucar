import { View } from 'react-native'
import React from 'react'
import BottomView from '../BottomView'
import renderer from 'react-test-renderer'

const component = renderer.create(
  <BottomView style={{top: 0}}>
    <View style={{bottom: 0}}>Foobar</View>
  </BottomView>
)

it('renders correctly', () => {
  expect(component.toJSON()).toMatchSnapshot()
});

it('changes the viewWidth at onLayout', () => {
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
  tree.props.onLayout({ nativeEvent: {layout: {width: 20} } })
  tree = component.toJSON()
  expect(tree).toMatchSnapshot()
});
