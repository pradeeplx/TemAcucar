import 'react-native'
import React from 'react'
import WelcomeView from '../WelcomeView'
import renderer from 'react-test-renderer'

it('renders correctly', () => {
  const tree = renderer.create(
    <WelcomeView
      style={{top: 0}}
    >
      FooBar
    </WelcomeView>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
