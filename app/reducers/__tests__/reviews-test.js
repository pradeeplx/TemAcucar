import reducer, { initialState } from '../reviews'
import { range } from 'lodash'

test('initialState', () => {
  expect(initialState).toEqual({
    user: null,
    list: [],
    listing: true,
    offset: 0,
    canList: false,
  })
})

describe('REVIEWS_LIST_REQUEST action', () => {
  const prevState = { ...initialState, list: ['foo', 'bar'], listing: false }
  const newState1 = reducer(prevState, {
    type: 'REVIEWS_LIST_REQUEST',
    offset: 0,
    user: 'foo',
  })
  const newState2 = reducer(prevState, {
    type: 'REVIEWS_LIST_REQUEST',
    offset: 10,
  })

  it('clears list if there is no offset', () => {
    expect(newState1.list).toEqual([])
  })
  it('keeps previous list if there is an offset', () => {
    expect(newState2.list).toEqual(['foo', 'bar'])
  })
  it('sets listing to true', () => {
    expect(newState1.listing).toBeTruthy()
  })
  it('sets user from action.user', () => {
    expect(newState1.user).toBe('foo')
  })
})

describe('REVIEWS_LIST_SUCCESS action', () => {
  const prevState = { ...initialState, list: ['foo', 'bar'], offset: 10 }
  const newState1 = reducer(prevState, {
    type: 'REVIEWS_LIST_SUCCESS',
    list: ['zaz'],
  })
  const newState2 = reducer(prevState, {
    type: 'REVIEWS_LIST_SUCCESS',
    list: range(0, 10),
  })

  it('concats list from action.list', () => {
    expect(newState1.list).toEqual(['foo', 'bar', 'zaz'])
  })
  it('sets listing to false', () => {
    expect(newState1.listing).toBeFalsy()
  })
  it('sums previous offset to list length', () => {
    expect(newState2.offset).toBe(20)
  })
  it('sets canList to true if given list >= 10', () => {
    expect(newState2.canList).toBeTruthy()
  })
  it('sets canList to false if given list < 10', () => {
    expect(newState1.canList).toBeFalsy()
  })
})

describe('REVIEWS_LIST_FAILURE action', () => {
  const newState = reducer(initialState, { type: 'REVIEWS_LIST_FAILURE' })

  it('sets listing to false', () => {
    expect(newState.listing).toBeFalsy()
  })
})

describe('DASHBOARD_REFRESH action', () => {
  it('resets the state', () => {
    expect(reducer({}, { type: 'DASHBOARD_REFRESH' })).toEqual(initialState)
  })
})

describe('STORED_AUTH_RESET_SUCCESS action', () => {
  it('resets the state', () => {
    expect(reducer({}, { type: 'STORED_AUTH_RESET_SUCCESS' })).toEqual(initialState)
  })
})
