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

describe('DASHBOARD_REFRESH action', () => {
  it('resets the state', () => {
    expect(reducer({}, { type: 'DASHBOARD_REFRESH' })).toEqual(initialState)
  })
})

describe('LOCATION_SET_LOCATION_SUCCESS action', () => {
  it('resets the state', () => {
    expect(reducer({}, { type: 'LOCATION_SET_LOCATION_SUCCESS' })).toEqual(initialState)
  })
})

describe('STORED_AUTH_RESET_SUCCESS action', () => {
  it('resets the state', () => {
    expect(reducer({}, { type: 'STORED_AUTH_RESET_SUCCESS' })).toEqual(initialState)
  })
})
