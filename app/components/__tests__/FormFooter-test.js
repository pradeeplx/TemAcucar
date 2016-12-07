import 'react-native'
import React from 'react'
import FormFooter from '../FormFooter'
import renderer from 'react-test-renderer'

it('renders correctly', () => {
  const tree = renderer.create(
    <FormFooter>Footer</FormFooter>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
