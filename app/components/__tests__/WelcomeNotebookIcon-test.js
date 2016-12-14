import 'react-native'
import React from 'react'
import WelcomeNotebookIcon from '../WelcomeNotebookIcon'
import renderer from 'react-test-renderer'

it('renders correctly', () => {
  const tree = renderer.create(
    <WelcomeNotebookIcon
      style={{top: 0}}
    >
      FooBar
    </WelcomeNotebookIcon>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
