import reducer from '../gcm'

test('GCM_REGISTER test', () => {
  const action = { type: 'GCM_REGISTER', token: 'XYZ' }
  const initialState = { token: null, foo: 'bar' }
  expect(
    reducer(initialState, action)
  ).toEqual({ token: 'XYZ', foo: 'bar' })
})