import 'react-native'
import React from 'react'
import Icon from '../Icon'
import renderer from 'react-test-renderer'

it('renders correctly', () => {
  const tree = renderer.create(
    <Icon
      name={'ios-add'}
      size={20}
      color="gray"
      style={{top: 0}}
    />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
