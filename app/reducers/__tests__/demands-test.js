import reducer, { initialState } from '../demands'
import { range } from 'lodash'

test('initialState', () => {
  expect(initialState).toEqual({
    list: [],
    startingUp: true,
    listing: false,
    offset: 0,
    canList: false,
    creating: false,
    createError: null,
    lastCreated: null,
    listError: null,
  })
})

describe('DEMANDS_LIST_REQUEST action', () => {
  const newState = reducer(
    { ...initialState, listError: 'foo' },
    { type: 'DEMANDS_LIST_REQUEST' }
  )

  it('sets listing to true', () => {
    expect(newState.listing).toBeTruthy()
  })
  it('clears listError', () => {
    expect(newState.listError).toBeNull()
  })
})

describe('DEMANDS_LIST_FAILURE action', () => {
  const newState = reducer(
    { ...initialState, listing: true },
    { type: 'DEMANDS_LIST_FAILURE', error: 'foo' }
  )

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

describe('DEMANDS_LIST_SUCCESS action', () => {
  const newState = reducer(
    {
      ...initialState,
      list: ['foo'],
      listing: true,
      listError: 'foo',
      offset: 1,
    }, { type: 'DEMANDS_LIST_SUCCESS', list: ['bar', 'zaz'] }
  )
  const newState2 = reducer(
    initialState,
    { type: 'DEMANDS_LIST_SUCCESS', list: range(0, 11) }
  )

  it('concats list from action', () => {
    expect(newState.list).toEqual(['foo', 'bar', 'zaz'])
  })
  it('sums given list length to offset', () => {
    expect(newState.offset).toEqual(3)
  })
  it('sets canList to true if given list length is >= 10', () => {
    expect(newState2.canList).toBeTruthy()
  })
  it('sets canList to false if given list length is < 10', () => {
    expect(newState.canList).toBeFalsy()
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

describe('DEMANDS_REFUSE_REQUEST action', () => {
  const newState = reducer(
    {
      ...initialState,
      list: [{ id: 1 }, { id: 2 }],
      offset: 2,
    }, { type: 'DEMANDS_REFUSE_REQUEST', demand: { id: 1 } }
  )

  it('filters the given id from the list', () => {
    expect(newState.list).toEqual([{ id: 2 }])
  })
  it('decreases offset', () => {
    expect(newState.offset).toEqual(1)
  })
})

describe('DEMANDS_FLAG_REQUEST action', () => {
  const newState = reducer(
    {
      ...initialState,
      list: [{ id: 1 }, { id: 2 }],
      offset: 2,
    }, { type: 'DEMANDS_FLAG_REQUEST', demand: { id: 1 } }
  )

  it('filters the given id from the list', () => {
    expect(newState.list).toEqual([{ id: 2 }])
  })
  it('decreases offset', () => {
    expect(newState.offset).toEqual(1)
  })
})

describe('DEMANDS_CREATE_REQUEST action', () => {
  const newState = reducer(
    {
      ...initialState,
      lastCreated: 'foo',
      createError: 'bar',
    }, { type: 'DEMANDS_CREATE_REQUEST' }
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

describe('DEMANDS_CREATE_SUCCESS action', () => {
  const newState = reducer(
    {
      ...initialState,
      creating: true,
      createError: 'bar',
    }, { type: 'DEMANDS_CREATE_SUCCESS', demand: 'foo' }
  )

  it('sets lastCreated from action.demand', () => {
    expect(newState.lastCreated).toBe('foo')
  })
  it('sets creating to false', () => {
    expect(newState.creating).toBeFalsy()
  })
  it('clears createError', () => {
    expect(newState.createError).toBeNull()
  })
})

describe('DEMANDS_CREATE_FAILURE action', () => {
  const newState = reducer(
    { ...initialState, creating: true },
    { type: 'DEMANDS_CREATE_FAILURE', error: 'foo' }
  )

  it('sets creating to false', () => {
    expect(newState.creating).toBeFalsy()
  })
  it('sets createError from action.error', () => {
    expect(newState.createError).toBe('foo')
  })
})

describe('TRANSACTIONS_CREATE_REQUEST action', () => {
  const newState = reducer(
    {
      ...initialState,
      list: [{ id: 1 }, { id: 2 }, { id: 3 }]
    },
    { type: 'TRANSACTIONS_CREATE_REQUEST', demand: { id: 2 } }
  )

  it('sets creatingTransaction to true in list items matching action.demand', () => {
    expect(newState.list).toEqual([
      { id: 1 }, { id: 2, creatingTransaction: true }, { id: 3 }
    ])
  })
})

describe('TRANSACTIONS_CREATE_SUCCESS action', () => {
  const newState = reducer(
    {
      ...initialState,
      list: [{ id: 1 }, { id: 2 }, { id: 3 }],
      offset: 3,
    },
    { type: 'TRANSACTIONS_CREATE_SUCCESS', transaction: {
      demand: { id: 2 } }
    }
  )

  it('filters from list items matching action.transaction.demand.id', () => {
    expect(newState.list).toEqual([{ id: 1 }, { id: 3 }])
  })
  it('decreases offset', () => {
    expect(newState.offset).toBe(2)
  })
})

describe('TRANSACTIONS_CREATE_FAILURE action', () => {
  const newState = reducer(
    {
      ...initialState,
      list: [{ id: 1 }, { id: 2 }, { id: 3 }]
    },
    { type: 'TRANSACTIONS_CREATE_FAILURE', demand: { id: 2 } }
  )

  it('sets creatingTransaction to false in list items matching action.demand', () => {
    expect(newState.list).toEqual([
      { id: 1 }, { id: 2, creatingTransaction: false }, { id: 3 }
    ])
  })
})

describe('UNREAD_NOTIFICATIONS_LIST_SUCCESS action', () => {
  const action = {
    type: 'UNREAD_NOTIFICATIONS_LIST_SUCCESS',
    list: [{
      demand: { state: 'notifying', id: 1 }
    }, {
      demand: { state: 'foo', id: 2 }
    }, {
      demand: { state: 'notifying', id: 3 }
    }],
  }
  const newState = reducer(
    {
      ...initialState,
      startingUp: false,
      offset: 2,
      list: [{ state: 'notifying', id: 2 }, { state: 'zaz', id: 1 }]
    }, action
  )

  it('returns the state if is startingUp', () => {
    expect(reducer(initialState, action))
      .toEqual(initialState)
  })
  it('concats new items to beginning of list', () => {
    expect(newState.list).toEqual([
      { id: 3, state: 'notifying' }, { id: 2, state: 'notifying' }, { id: 1, state: 'zaz' }
    ])
  })
  it('sums offset to newItems list size', () => {
    expect(newState.offset).toBe(3)
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
