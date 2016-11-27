import reducer, { initialState } from '../apn'

test('initialState', () => {
  expect(initialState).toEqual({ token: null })
})

it('APN_REGISTER action', () => {
  const action = { type: 'APN_REGISTER', token: 'XYZ' }

  expect(
    reducer(initialState, action)
  ).toEqual({ token: 'XYZ' })
})
