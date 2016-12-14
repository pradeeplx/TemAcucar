import 'react-native'
import React from 'react'
import ShareTip from '../ShareTip'
import renderer from 'react-test-renderer'
import { identity } from 'lodash'

it('renders correctly', () => {
  const tree = renderer.create(
    <ShareTip
      title="Foo"
      callToAction="Bar"
      onPress={identity}
    />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
