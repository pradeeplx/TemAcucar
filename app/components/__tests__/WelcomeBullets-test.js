import 'react-native'
import React from 'react'
import WelcomeBullets from '../WelcomeBullets'
import renderer from 'react-test-renderer'

it('renders correctly', () => {
  const tree = renderer.create(
    <WelcomeBullets active={3} />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
