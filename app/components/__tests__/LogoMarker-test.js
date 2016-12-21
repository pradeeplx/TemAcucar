import 'react-native'
import React from 'react'
import LogoMarker from '../LogoMarker'
import renderer from 'react-test-renderer'

it('renders correctly', () => {
  const tree = renderer.create(
    <LogoMarker style={{top: 0}}>FooBar</LogoMarker>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
