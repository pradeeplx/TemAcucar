import reducer from '../gcm'

test('gcm reducer', () => {
  const initialState = { token: null, foo: 'bar' }

  describe('GCM_REGISTER', () => {
    const action = { type: 'GCM_REGISTER', token: 'XYZ' }

    expect(
      reducer(initialState, action)
    ).toEqual({ token: 'XYZ', foo: 'bar' })
  })

  describe('Any other action', () => {
    const action = { type: 'FOO' }

    expect(reducer(initialState, action)).toEqual(initialState)
  })
})