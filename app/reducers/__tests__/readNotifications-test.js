import reducer, { initialState } from '../readNotifications'
import { range } from 'lodash'

test('initialState', () => {
  expect(initialState).toEqual({
    list: [],
    listing: true,
    offset: 0,
    canList: false,
  })
})

describe('READ_NOTIFICATIONS_LIST_REQUEST action', () => {
  const newState = reducer(
    { ...initialState, listing: false },
    { type: 'READ_NOTIFICATIONS_LIST_REQUEST' }
  )

  it('sets listing to true', () => {
    expect(newState.listing).toBeTruthy()
  })
})

describe('READ_NOTIFICATIONS_LIST_SUCCESS action', () => {
  const prevState = { ...initialState, list: ['foo', 'bar'], offset: 10 }
  const newState1 = reducer(prevState, {
    type: 'READ_NOTIFICATIONS_LIST_SUCCESS',
    list: ['zaz'],
  })
  const newState2 = reducer(prevState, {
    type: 'READ_NOTIFICATIONS_LIST_SUCCESS',
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

describe('READ_NOTIFICATIONS_LIST_FAILURE action', () => {
  const newState = reducer(initialState, { type: 'READ_NOTIFICATIONS_LIST_FAILURE' })

  it('sets listing to false', () => {
    expect(newState.listing).toBeFalsy()
  })
})

describe('UNREAD_NOTIFICATIONS_READ_ALL_REQUEST action', () => {
  const prevState = {
    ...initialState,
    list: [{ x: 'foo', id: 1 }, { x: 'bar', id: 2 }],
    offset: 10,
  }
  const newState = reducer(prevState, {
    type: 'UNREAD_NOTIFICATIONS_READ_ALL_REQUEST',
    list: [{ x: 'zaz', id: 1 }, { x: 'xyz', id: 3 }],
  })

  it('concats only new messages to beginning of list', () => {
    expect(newState.list).toEqual([
      { x: 'xyz', id: 3 }, { x: 'foo', id: 1 }, { x: 'bar', id: 2 }
    ])
  })
  it('sums previous offset to new messages list', () => {
    expect(newState.offset).toBe(11)
  })
})

describe('UNREAD_NOTIFICATIONS_READ_REQUEST action', () => {
  const prevState = {
    ...initialState,
    list: [{ read: false, id: 1 }, { read: false, id: 2 }],
  }
  const newState = reducer(prevState, {
    type: 'UNREAD_NOTIFICATIONS_READ_REQUEST',
    notification: { id: 1 },
  })

  it('sets read to true on the same notification as action.notification', () => {
    expect(newState.list).toEqual([{ read: true, id: 1 }, { read: false, id: 2 }])
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
