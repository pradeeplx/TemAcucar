import 'react-native'
import React from 'react'
import * as subject from '../AdminDemandsActions'
import { identity } from 'lodash'

test('list action', () => {
  // BUG: We need to mock react-native-config
  // const action = subject.list({ id: 1 }, { name: 'Foo' })
  // expect(action(identity)).toMatchSnapshot()
})
