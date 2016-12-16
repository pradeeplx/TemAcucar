import { View } from 'react-native'
import React from 'react'
import DemandState from '../DemandState'
import renderer from 'react-test-renderer'

for(const state of ['completed', 'canceled', 'flagged', 'foo']) {
  it(`renders correctly with state ${state}`, () => {
    const tree = renderer.create(
      <DemandState state={state} top={{top: 0}} />
    ).toJSON();
    expect(tree).toMatchSnapshot()
  });
}
