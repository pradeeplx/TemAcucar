import reducer, { initialState } from '../createdReview'

test('initialState', () => {
  expect(initialState).toEqual({
    creating: false,
    createError: null,
    lastCreated: null,
  })
})

describe('REVIEWS_CREATE_REQUEST action', () => {
  const newState = reducer(
    { ...initialState, lastCreated: 'foo', createError: 'bar' },
    { type: 'REVIEWS_CREATE_REQUEST' }
  )

  it('clears lastCreated', () => {
    expect(newState.lastCreated).toBeNull()
  })
  it('sets creating to true', () => {
    expect(newState.creating).toBeTruthy()
  })
  it('clears createError', () => {
    expect(newState.createError).toBeNull()
  })
})

describe('REVIEWS_CREATE_SUCCESS action', () => {
  const newState = reducer(
    { ...initialState, creating: true, createError: 'bar' },
    { type: 'REVIEWS_CREATE_SUCCESS', review: 'foo' }
  )

  it('sets lastCreated from action.review', () => {
    expect(newState.lastCreated).toBe('foo')
  })
  it('sets creating to false', () => {
    expect(newState.creating).toBeFalsy()
  })
  it('clears createError', () => {
    expect(newState.createError).toBeNull()
  })
})

describe('REVIEWS_CREATE_FAILURE action', () => {
  const newState = reducer(
    { ...initialState, creating: true },
    { type: 'REVIEWS_CREATE_FAILURE', error: 'foo' }
  )

  it('sets creating to false', () => {
    expect(newState.creating).toBeFalsy()
  })
  it('sets createError from action.error', () => {
    expect(newState.createError).toBe('foo')
  })
})

describe('STORED_AUTH_RESET_SUCCESS action', () => {
  it('resets the state', () => {
    expect(reducer({}, { type: 'STORED_AUTH_RESET_SUCCESS' })).toEqual(initialState)
  })
})
