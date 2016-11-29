import reducer, { initialState } from '../unreadNotifications'
import { range } from 'lodash'

test('initialState', () => {
  expect(initialState).toEqual({
    list: [],
    count: 0,
    listing: false,
    readingAll: false,
  })
})

describe('UNREAD_NOTIFICATIONS_LIST_REQUEST action', () => {
  const newState = reducer(initialState, { type: 'UNREAD_NOTIFICATIONS_LIST_REQUEST' })

  it('sets listing to true', () => {
    expect(newState.listing).toBeTruthy()
  })
})

describe('UNREAD_NOTIFICATIONS_LIST_SUCCESS action', () => {
  const newState = reducer(
    {
      ...initialState,
      list: [{ id: 1, x: 'foo' }, { id: 2, x: 'bar', read: true }],
      listing: true,
    },
    {
      type: 'UNREAD_NOTIFICATIONS_LIST_SUCCESS',
      list: [{ id: 1, x: 'zaz' }, { id: 3, x: 'new' }],
    }
  )

  it('returns the state if readingAll is true', () => {
    expect(reducer({ readingAll: true }, { type: 'UNREAD_NOTIFICATIONS_LIST_SUCCESS' }))
      .toEqual({ readingAll: true })
  })
  it('concats list from action.list', () => {
    expect(newState.list).toEqual([
      { id: 3, x: 'new' }, { id: 1, x: 'foo' }, { id: 2, x: 'bar', read: true }
    ])
  })
  it('sets listing to false', () => {
    expect(newState.listing).toBeFalsy()
  })
  it('counts unread notifications', () => {
    expect(newState.count).toBe(2)
  })
})

describe('UNREAD_NOTIFICATIONS_LIST_FAILURE action', () => {
  const newState = reducer(
    { ...initialState, listing: true },
    { type: 'UNREAD_NOTIFICATIONS_LIST_FAILURE' }
  )

  it('sets listing to false', () => {
    expect(newState.listing).toBeFalsy()
  })
})

describe('UNREAD_NOTIFICATIONS_READ_ALL_REQUEST action', () => {
  const newState = reducer(
    {
      ...initialState,
      count: 2,
      list: ['foo', 'bar'],
    }, { type: 'UNREAD_NOTIFICATIONS_READ_ALL_REQUEST' }
  )

  it('sets count to 0', () => {
    expect(newState.count).toBe(0)
  })
  it('clears list', () => {
    expect(newState.list).toEqual([])
  })
  it('sets readingAll to true', () => {
    expect(newState.readingAll).toBeTruthy()
  })
})

describe('UNREAD_NOTIFICATIONS_READ_ALL_SUCCESS action', () => {
  const newState = reducer(
    { ...initialState, readingAll: true },
    { type: 'UNREAD_NOTIFICATIONS_READ_ALL_SUCCESS' }
  )

  it('sets readingAll to false', () => {
    expect(newState.readingAll).toBeFalsy()
  })
})

describe('UNREAD_NOTIFICATIONS_READ_ALL_FAILURE action', () => {
  const newState = reducer(
    { ...initialState, readingAll: true },
    { type: 'UNREAD_NOTIFICATIONS_READ_ALL_FAILURE' }
  )

  it('sets readingAll to false', () => {
    expect(newState.readingAll).toBeFalsy()
  })
})

describe('UNREAD_NOTIFICATIONS_READ_REQUEST action', () => {
  const newState = reducer(
    {
      ...initialState,
      list: [{ id: 1, text: 'foo' }, { id: 2, text: 'bar' }],
      count: 0,
    },
    {
      type: 'UNREAD_NOTIFICATIONS_READ_REQUEST',
      notification: { id: 1, text: 'foob' },
    }
  )
  const newState2 = reducer(
    { ...initialState, count: 2 },
    { type: 'UNREAD_NOTIFICATIONS_READ_REQUEST' }
  )

  it('decreases count by 1 if it is > 0', () => {
    expect(newState2.count).toBe(1)
  })
  it('keeps count if it is <= 0', () => {
    expect(newState.count).toBe(0)
  })
  it('sets read to true on items from the list matching the given notification.id', () => {
    expect(newState.list).toEqual([
      { id: 1, text: 'foob', read: true }, { id: 2, text: 'bar' }
    ])
  })
})

describe('APN_NOTIFY action', () => {
  const newState = reducer(
    { ...initialState, list: ['foo'], count: 1 },
    { type: 'APN_NOTIFY', notification: 'bar' }
  )

  it('concats the given notification to list', () => {
    expect(newState.list).toEqual([ 'bar', 'foo' ])
  })
  it('increases count by 1', () => {
    expect(newState.count).toBe(2)
  })
})

describe('GCM_NOTIFY action', () => {
  const newState = reducer(
    { ...initialState, list: ['foo'], count: 1 },
    { type: 'GCM_NOTIFY', notification: 'bar' }
  )

  it('concats the given notification to list', () => {
    expect(newState.list).toEqual([ 'bar', 'foo' ])
  })
  it('increases count by 1', () => {
    expect(newState.count).toBe(2)
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
