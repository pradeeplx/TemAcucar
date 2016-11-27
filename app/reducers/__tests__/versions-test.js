import reducer, { initialState } from '../versions'

test('initialState', () => {
  expect(initialState).toEqual({
    startingUp: true,
    list: [],
    listing: false,
    listError: null,
    ignoreUpdate: false,
  })
})

describe('VERSIONS_LIST_REQUEST action', () => {
  const action = { type: 'VERSIONS_LIST_REQUEST' }
  const newState = reducer({ ...initialState, listError: 'foo' }, action)

  it('sets listing to true', () => {
    expect(newState.listing).toBeTruthy()
  })
  it('clears listError', () => {
    expect(newState.listError).toBeNull()
  })
})

describe('VERSIONS_LIST_SUCCESS action', () => {
  const action = {
    type: 'VERSIONS_LIST_SUCCESS',
    list: ['lemon'],
  }
  const newState = reducer({ ...initialState, listing: true }, action)

  it('sets startingUp to false', () => {
    expect(newState.startingUp).toBeFalsy()
  })
  it('sets listing to false', () => {
    expect(newState.listing).toBeFalsy()
  })
  it('sets the list from action.list', () => {
    expect(newState.list).toContain('lemon')
  })
})

describe('VERSIONS_LIST_FAILURE action', () => {
  const action = {
    type: 'VERSIONS_LIST_FAILURE',
    error: 'Bug!',
  }
  const newState = reducer({ ...initialState, listing: true }, action)

  it('sets listing to false', () => {
    expect(newState.listing).toBeFalsy()
  })
  it('sets startingUp to false', () => {
    expect(newState.startingUp).toBeFalsy()
  })
  it('sets listError from action.error', () => {
    expect(newState.listError).toBe('Bug!')
  })
})

it('VERSIONS_IGNORE_UPDATE action', () => {
  const newState = reducer(initialState, { type: 'VERSIONS_IGNORE_UPDATE' })
  expect(newState.ignoreUpdate).toBeTruthy()
})
