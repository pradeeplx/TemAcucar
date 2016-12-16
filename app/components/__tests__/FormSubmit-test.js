import 'react-native'
import React from 'react'
import FormSubmit from '../FormSubmit'
import renderer from 'react-test-renderer'
import { identity } from 'lodash'

it('renders correctly', () => {
  const tree = renderer.create(
    <FormSubmit handleSubmit={identity}>Foo</FormSubmit>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it('has enabled button', () => {
  const tree = renderer.create(
    <FormSubmit handleSubmit={identity} dirty valid>Foo</FormSubmit>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
