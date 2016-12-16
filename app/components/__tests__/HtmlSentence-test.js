import 'react-native'
import React from 'react'
import HtmlSentence, { renderNode } from '../HtmlSentence'
import renderer from 'react-test-renderer'
import { identity } from 'lodash'

it('renders correctly', () => {
  const tree = renderer.create(
    <HtmlSentence children="Foo<b>Bar</b> <i>!</i>" />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
