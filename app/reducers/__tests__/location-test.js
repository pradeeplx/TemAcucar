import reducer, { initialState } from '../location'

test('initialState', () => {
  expect(initialState).toEqual({
    latitude: null,
    longitude: null,
    address: null,
    addressChanged: false,
    startingUp: true,
    searching: false,
    searchError: null,
    gettingCoordinates: false,
    getCoordinatesError: null,
    gettingAddress: false,
    getAddressError: null,
    settingLocation: false,
    setLocationError: null,
  })
})

describe('LOCATION_GET_COORDINATES_REQUEST action', () => {
  const newState = reducer(
    initialState,
    { type: 'LOCATION_GET_COORDINATES_REQUEST' }
  )

  it('sets gettingCoordinates to true', () => {
    expect(newState.gettingCoordinates).toBeTruthy()
  })
})

describe('LOCATION_GET_ADDRESS_REQUEST action', () => {
  const newState = reducer(
    initialState,
    { type: 'LOCATION_GET_ADDRESS_REQUEST' }
  )

  it('sets gettingAddress to true', () => {
    expect(newState.gettingAddress).toBeTruthy()
  })
})

describe('LOCATION_SEARCH_REQUEST action', () => {
  const newState = reducer(
    initialState,
    { type: 'LOCATION_SEARCH_REQUEST' }
  )

  it('sets searching to true', () => {
    expect(newState.searching).toBeTruthy()
  })
})

describe('LOCATION_SET_LOCATION_REQUEST action', () => {
  const newState = reducer(
    initialState,
    { type: 'LOCATION_SET_LOCATION_REQUEST' }
  )

  it('sets settingLocation to true', () => {
    expect(newState.settingLocation).toBeTruthy()
  })
})

describe('AFTER_ROUTER_POP action', () => {
  const newState = reducer(
    { ...initialState, addressChanged: true },
    { type: 'AFTER_ROUTER_POP' }
  )

  it('sets addressChanged to false', () => {
    expect(newState.addressChanged).toBeFalsy()
  })
})

describe('STORED_AUTH_RESET_SUCCESS action', () => {
  it('resets the state', () => {
    expect(reducer({}, { type: 'STORED_AUTH_RESET_SUCCESS' })).toEqual(initialState)
  })
})

describe('LOCATION_GET_COORDINATES_SUCCESS action', () => {
  const newState = reducer(
    { ...initialState, gettingCoordinates: true, getCoordinatesError: 'foo' },
    { type: 'LOCATION_GET_COORDINATES_SUCCESS', latitude: 1, longitude: 2 }
  )

  it('sets latitude from action.latitude', () => {
    expect(newState.latitude).toBe(1)
  })
  it('sets longitude from action.longitude', () => {
    expect(newState.longitude).toBe(2)
  })
  it('sets gettingCoordinates to false', () => {
    expect(newState.gettingCoordinates).toBeFalsy()
  })
  it('clears getCoordinatesError', () => {
    expect(newState.getCoordinatesError).toBeNull()
  })
})

describe('LOCATION_GET_COORDINATES_FAILURE action', () => {
  const newState = reducer(
    { ...initialState, gettingCoordinates: true },
    { type: 'LOCATION_GET_COORDINATES_FAILURE', error: 'foo' }
  )

  it('sets gettingCoordinates to false', () => {
    expect(newState.gettingCoordinates).toBeFalsy()
  })
  it('sets getCoordinatesError from action.error', () => {
    expect(newState.getCoordinatesError).toBe('foo')
  })
})

describe('LOCATION_SET_COORDINATES action', () => {
  const newState = reducer(
    { ...initialState, getCoordinatesError: 'foo' },
    { type: 'LOCATION_SET_COORDINATES', latitude: 1, longitude: 2 }
  )

  it('sets latitude from action.latitude', () => {
    expect(newState.latitude).toBe(1)
  })
  it('sets longitude from action.longitude', () => {
    expect(newState.longitude).toBe(2)
  })
  it('clears getCoordinatesError', () => {
    expect(newState.getCoordinatesError).toBeNull()
  })
})

describe('LOCATION_GET_ADDRESS_SUCCESS action', () => {
  const newState = reducer(
    { ...initialState, gettingAddress: true, getAddressError: 'bar' },
    { type: 'LOCATION_GET_ADDRESS_SUCCESS', address: 'foo' }
  )

  it('sets address from action.address', () => {
    expect(newState.address).toBe('foo')
  })
  it('sets startingUp to false', () => {
    expect(newState.startingUp).toBeFalsy()
  })
  it('sets gettingAddress to false', () => {
    expect(newState.gettingAddress).toBeFalsy()
  })
  it('clears getAddressError', () => {
    expect(newState.getAddressError).toBeNull()
  })
})

describe('LOCATION_GET_ADDRESS_FAILURE action', () => {
  const newState = reducer(
    { ...initialState, gettingAddress: true },
    { type: 'LOCATION_GET_ADDRESS_FAILURE', error: 'foo' }
  )

  it('sets startingUp to false', () => {
    expect(newState.startingUp).toBeFalsy()
  })
  it('sets gettingAddress to false', () => {
    expect(newState.gettingAddress).toBeFalsy()
  })
  it('sets getAddressError from action.error', () => {
    expect(newState.getAddressError).toBe('foo')
  })
})

describe('LOCATION_SET_LOCATION_SUCCESS action', () => {
  const newState = reducer(
    { ...initialState, settingLocation: true, setLocationError: 'foo' },
    { type: 'LOCATION_SET_LOCATION_SUCCESS' }
  )

  it('sets settingLocation to false', () => {
    expect(newState.settingLocation).toBeFalsy()
  })
  it('clears setLocationError', () => {
    expect(newState.setLocationError).toBeNull()
  })
})

describe('LOCATION_SET_LOCATION_FAILURE action', () => {
  const newState = reducer(
    { ...initialState, settingLocation: true },
    { type: 'LOCATION_SET_LOCATION_FAILURE', error: 'foo' }
  )

  it('sets settingLocation to false', () => {
    expect(newState.settingLocation).toBeFalsy()
  })
  it('sets setLocationError from action.error', () => {
    expect(newState.setLocationError).toBe('foo')
  })
})

describe('LOCATION_SEARCH_FAILURE action', () => {
  const newState = reducer(
    { ...initialState, searching: true },
    { type: 'LOCATION_SEARCH_FAILURE', error: 'foo' }
  )

  it('sets searching to false', () => {
    expect(newState.searching).toBeFalsy()
  })
  it('sets startingUp to false', () => {
    expect(newState.startingUp).toBeFalsy()
  })
  it('sets searchError from action.error', () => {
    expect(newState.searchError).toBe('foo')
  })
})

describe('LOCATION_SEARCH_SUCCESS action', () => {
  const action = {
    type: 'LOCATION_SEARCH_SUCCESS',
    address: 'foo',
    latitude: 1,
    longitude: 2,
  }
  const newState = reducer(
    {
      ...initialState,
      startingUp: false,
      searching: true,
      searchError: 'bar',
    }, action
  )
  const newState2 = reducer(initialState, action)

  it('sets address from action.address', () => {
    expect(newState.address).toBe('foo')
  })
  it('sets addressChanged to true if not startingUp', () => {
    expect(newState.addressChanged).toBeTruthy()
  })
  it('sets addressChanged to false if startingUp', () => {
    expect(newState2.addressChanged).toBeFalsy()
  })
  it('sets latitude from action.latitude', () => {
    expect(newState.latitude).toBe(1)
  })
  it('sets longitude from action.longitude', () => {
    expect(newState.longitude).toBe(2)
  })
  it('sets searching to false', () => {
    expect(newState.searching).toBeFalsy()
  })
  it('sets startingUp to false', () => {
    expect(newState.startingUp).toBeFalsy()
  })
  it('clears searchError', () => {
    expect(newState.searchError).toBeNull()
  })
})
