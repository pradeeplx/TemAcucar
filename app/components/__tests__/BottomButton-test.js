import 'react-native'
import React from 'react'
import BottomButton from '../BottomButton'
import renderer from 'react-test-renderer'

it('renders correctly', () => {
  const tree = renderer.create(
    <BottomButton
      buttonsCount={2}
      viewWidth={50}
      style={{top: 0}}
      textStyle={{color: 'gray'}}
      disabledStyle={{color: 'green'}}
      secondary>
      FooBar
    </BottomButton>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
