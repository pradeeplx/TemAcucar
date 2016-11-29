import reducer, { initialState } from '../messages'
import { range } from 'lodash'
import moment from 'moment'

test('initialState', () => {
  expect(initialState).toEqual({
    transaction: null,
    list: [],
    listing: true,
    offset: 0,
    canList: false,
    creating: false,
    createError: null,
  })
})

describe('MESSAGES_LIST_REQUEST action', () => {
  const newState = reducer(
    { ...initialState, listing: false, list: ['foo', 'bar'] },
    { type: 'MESSAGES_LIST_REQUEST', transaction: 'foo' }
  )
  const newState2 = reducer(
    newState,
    { type: 'MESSAGES_LIST_REQUEST', offset: 0, transaction: 'foo' }
  )

  it('keeps list if offset is not 0', () => {
    expect(newState.list).toEqual(['foo', 'bar'])
  })
  it('discards list if offset is 0', () => {
    expect(newState2.list).toEqual([])
  })
  it('sets listing to true', () => {
    expect(newState.listing).toBeTruthy()
  })
  it('sets transaction from action.transaction', () => {
    expect(newState.transaction).toBe('foo')
  })
})

describe('MESSAGES_LIST_SUCCESS action', () => {
  const newState = reducer(
    { ...initialState, list: ['foo', 'bar'], canList: true },
    { type: 'MESSAGES_LIST_SUCCESS', list: ['zaz', 'zurb'] }
  )
  const newState2 = reducer(
    newState,
    { type: 'MESSAGES_LIST_SUCCESS', list: range(0, 10) }
  )

  it('adds reversed action.list to beginning of list', () => {
    expect(newState.list).toEqual(['zurb', 'zaz', 'foo', 'bar'])
  })
  it('sets listing to false', () => {
    expect(newState.listing).toBeFalsy()
  })
  it('sums action.list length to offset', () => {
    expect(newState.offset).toBe(2)
  })
  it('sets canList to false if action.list.length is < 10', () => {
    expect(newState.canList).toBeFalsy()
  })
  it('sets canList to true if action.list.length is >= 10', () => {
    expect(newState2.canList).toBeTruthy()
  })
})

describe('MESSAGES_LIST_FAILURE action', () => {
  const newState = reducer(initialState, { type: 'MESSAGES_LIST_FAILURE' })

  it('sets listing to false', () => {
    expect(newState.listing).toBeFalsy()
  })
})

describe('MESSAGES_CREATE_REQUEST action', () => {
  const newState = reducer(
    {
      ...initialState,
      list: [{ id: 1 }],
      createError: 'foo',
      offset: 1,
    },
    {
      type: 'MESSAGES_CREATE_REQUEST',
      currentUser: { id: 'john' },
      message: { text: 'foo bar' },
    }
  )

  it('adds the message to the end of list with formatted fields', () => {
    const createdAt = moment().format()
    expect(newState.list[1]).toEqual({
      id: createdAt,
      user_id: 'john',
      text: 'foo bar',
      created_at: createdAt,
    })
  })
  it('sums 1 to offset', () => {
    expect(newState.offset).toBe(2)
  })
  it('sets creating to true', () => {
    expect(newState.creating).toBeTruthy()
  })
  it('clears createError', () => {
    expect(newState.createError).toBeNull()
  })
})

describe('MESSAGES_CREATE_SUCCESS action', () => {
  const newState = reducer(
    { ...initialState, creating: true, createError: 'foo' },
    { type: 'MESSAGES_CREATE_SUCCESS' }
  )

  it('sets creating to false', () => {
    expect(newState.creating).toBeFalsy()
  })
  it('clears createError', () => {
    expect(newState.createError).toBeNull()
  })
})

describe('MESSAGES_CREATE_FAILURE action', () => {
  const newState = reducer(
    { ...initialState, creating: true },
    { type: 'MESSAGES_CREATE_FAILURE', error: 'foo' }
  )

  it('sets creating to false', () => {
    expect(newState.creating).toBeFalsy()
  })
  it('sets createError from  action.error', () => {
    expect(newState.createError).toBe('foo')
  })
})

describe('UNREAD_NOTIFICATIONS_LIST_SUCCESS action', () => {
  const action = {
    type: 'UNREAD_NOTIFICATIONS_LIST_SUCCESS',
    list: [{
      message: { id: 3, text: 'foo1' },
      transaction: { id: 2 },
    }, {
      message: { id: 1, text: 'foo2' },
      transaction: { id: 1 },
    }, {
      message: { id: 4, text: 'foo3' },
      transaction: { id: 1 },
    }],
  }
  const state = {
    ...initialState,
    list: [{ id: 1, text: 'bar' }, { id: 2, text: 'foo' }],
    transaction: { id: 1 },
    listing: false,
  }
  const newState = reducer(state, action)
  it('appends newMessages that have the same id as transaction.id to the end of list', () => {
    expect(newState.list).toEqual([
      { id: 1, text: 'bar' },
      { id: 2, text: 'foo' },
      { id: 4, text: 'foo3' }
    ])
  })
  it('returns given state if state has no transaction', () => {
    expect(reducer({ transaction: null }, { type: 'UNREAD_NOTIFICATIONS_LIST_SUCCESS' }))
      .toEqual({ transaction: null })
  })
  it('returns given state if state is listing', () => {
    expect(reducer({ listing: true }, { type: 'UNREAD_NOTIFICATIONS_LIST_SUCCESS' }))
      .toEqual({ listing: true })
  })
})

describe('STORED_AUTH_RESET_SUCCESS action', () => {
  it('resets the state', () => {
    expect(reducer({}, { type: 'STORED_AUTH_RESET_SUCCESS' })).toEqual(initialState)
  })
})
