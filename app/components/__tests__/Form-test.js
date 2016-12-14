import { View } from 'react-native'
import React from 'react'
import Form from '../Form'
import renderer from 'react-test-renderer'

it('renders correctly', () => {
  const tree = renderer.create(
    <Form
      style={{top: 0}}
    >
      <View style={{bottom: 0}}>Foobar</View>
    </Form>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
