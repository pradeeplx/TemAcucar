import 'react-native'
import React from 'react'
import WelcomeHeader from '../WelcomeHeader'
import renderer from 'react-test-renderer'

it('renders correctly', () => {
  const tree = renderer.create(
    <WelcomeHeader
      style={{top: 0}}
      headline="Foo Bar"
    >
      FooBar
    </WelcomeHeader>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
