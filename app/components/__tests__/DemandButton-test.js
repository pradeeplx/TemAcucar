import 'react-native'
import React from 'react'
import DemandButton from '../DemandButton'
import renderer from 'react-test-renderer'

it('renders correctly', () => {
  const tree = renderer.create(
    <DemandButton
      style={{top: 0}}
    >
      FooBar
    </DemandButton>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
