import reducer, { initialState } from '../users'

test('initialState', () => {
  expect(initialState).toEqual({
    list: [],
    startingUp: true,
    listing: false,
    listError: null,
  })
})

describe('USERS_LIST_REQUEST action', () => {
  const newState = reducer({ ...initialState, listError: 'foo' }, { type: 'USERS_LIST_REQUEST' })

  it('sets listing to true', () => {
    expect(newState.listing).toBeTruthy()
  })
  it('clears listError', () => {
    expect(newState.listError).toBeNull()
  })
})

describe('USERS_LIST_SUCCESS action', () => {
  const action = { type: 'USERS_LIST_SUCCESS', list: [1, 2] }
  const newState = reducer({ ...initialState, listError: 'foo', listing: true }, action)

  it('sets the list from action.list', () => {
    expect(newState.list).toEqual([1, 2])
  })
  it('sets listing to false', () => {
    expect(newState.listing).toBeFalsy()
  })
  it('sets startingUp to false', () => {
    expect(newState.startingUp).toBeFalsy()
  })
  it('clears listError', () => {
    expect(newState.listError).toBeNull()
  })
})

describe('USERS_LIST_FAILURE action', () => {
  const action = { type: 'USERS_LIST_FAILURE', error: 'foo' }
  const newState = reducer({ ...initialState, listing: true }, action)

  it('sets listing to false', () => {
    expect(newState.listing).toBeFalsy()
  })
  it('sets startingUp to false', () => {
    expect(newState.startingUp).toBeFalsy()
  })
  it('sets listError from action.error', () => {
    expect(newState.listError).toBe('foo')
  })
})

describe('reset actions', () => {
  const prevState = {
    list: ['foo'],
    startingUp: false,
    listing: true,
    listError: 'bar',
  }
  describe('DASHBOARD_REFRESH action', () => {
    const newState = reducer(prevState, { type: 'DASHBOARD_REFRESH' })

    it('resets the state', () => {
      expect(newState).toEqual(initialState)
    })
  })

  describe('LOCATION_SET_LOCATION_SUCCESS action', () => {
    const newState = reducer(prevState, { type: 'LOCATION_SET_LOCATION_SUCCESS' })

    it('resets the state', () => {
      expect(newState).toEqual(initialState)
    })
  })

  describe('STORED_AUTH_RESET_SUCCESS action', () => {
    const newState = reducer(prevState, { type: 'STORED_AUTH_RESET_SUCCESS' })

    it('resets the state', () => {
      expect(newState).toEqual(initialState)
    })
  })
})
