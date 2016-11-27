import reducer, { initialState } from '../dashboard'

test('initialState', () => {
  expect(initialState).toEqual({
    startingUp: true,
    drawerOpen: false,
    signingOut: false,
  })
})

describe('DASHBOARD_OPEN_DRAWER action', () => {
  const newState = reducer(initialState, { type: 'DASHBOARD_OPEN_DRAWER' })

  it('sets drawerOpen to true', () => {
    expect(newState.drawerOpen).toBeTruthy()
  })
})

describe('DASHBOARD_CLOSE_DRAWER action', () => {
  const newState = reducer({ drawerOpen: true }, { type: 'DASHBOARD_CLOSE_DRAWER' })

  it('sets drawerOpen to false', () => {
    expect(newState.drawerOpen).toBeFalsy()
  })
})

describe('DASHBOARD_SIGN_OUT action', () => {
  const newState = reducer(initialState, { type: 'DASHBOARD_SIGN_OUT' })

  it('sets signingOut to true', () => {
    expect(newState.signingOut).toBeTruthy()
  })
})

describe('DASHBOARD_START_UP action', () => {
  const newState = reducer(initialState, { type: 'DASHBOARD_START_UP' })

  it('sets startingUp to false', () => {
    expect(newState.startingUp).toBeFalsy()
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
