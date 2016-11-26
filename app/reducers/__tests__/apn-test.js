import reducer from '../apn'

test('apn reducer', () => {
  const initialState = { token: null, foo: 'bar' }

  describe('APN_REGISTER', () => {
    const action = { type: 'APN_REGISTER', token: 'XYZ' }

    expect(
      reducer(initialState, action)
    ).toEqual({ token: 'XYZ', foo: 'bar' })
  })

  describe('Any other action', () => {
    const action = { type: 'FOO' }

    expect(reducer(initialState, action)).toEqual(initialState)
  })
})