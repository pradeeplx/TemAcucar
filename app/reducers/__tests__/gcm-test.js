import reducer, { initialState } from '../gcm'

test('initialState', () => {
  expect(initialState).toEqual({ token: null })
})

it('GCM_REGISTER action', () => {
  const action = { type: 'GCM_REGISTER', token: 'XYZ' }

  expect(
    reducer(initialState, action)
  ).toEqual({ token: 'XYZ' })
})
