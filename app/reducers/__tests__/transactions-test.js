import reducer, { initialState } from '../transactions'
import { range } from 'lodash'

test('initialState', () => {
  expect(initialState).toEqual({
    list: [],
    listing: false,
    offset: 0,
    canList: false,
    creating: false,
    createError: null,
    lastCreated: null,
    listError: null,
  })
})

describe('TRANSACTIONS_LIST_REQUEST action', () => {
  const newState = reducer(
    { ...initialState, listError: 'foo' },
    { type: 'TRANSACTIONS_LIST_REQUEST' }
  )

  it('sets listing to true', () => {
    expect(newState.listing).toBeTruthy()
  })
  it('clears listError', () => {
    expect(newState.listError).toBeNull()
  })
})

describe('TRANSACTIONS_LIST_SUCCESS action', () => {
  const state = {
    ...initialState,
    list: ['foo', 'bar'],
    offset: 2,
    listing: true,
    listError: 'bug',
  }
  const newState = reducer(
    state,
    { type: 'TRANSACTIONS_LIST_SUCCESS', list: ['zaz', 'xyz'] }
  )
  const newState2 = reducer(
    state,
    { type: 'TRANSACTIONS_LIST_SUCCESS', list: range(0, 10) }
  )

  it('concats action.list to list', () => {
    expect(newState.list).toEqual(['foo', 'bar', 'zaz', 'xyz'])
  })
  it('sets listing to false', () => {
    expect(newState.listing).toBeFalsy()
  })
  it('sets canList to true if action.list length is >= 10', () => {
    expect(newState2.canList).toBeTruthy()
  })
  it('sets canList to false if action.list length is < 10', () => {
    expect(newState.canList).toBeFalsy()
  })
  it('increases offset with action.list length', () => {
    expect(newState.offset).toBe(4)
  })
  it('clears listError', () => {
    expect(newState.listError).toBeNull()
  })
})

describe('TRANSACTIONS_LIST_FAILURE action', () => {
  const newState = reducer(
    { ...initialState, listing: true },
    { type: 'TRANSACTIONS_LIST_FAILURE', error: 'foo' }
  )

  it('sets listing to false', () => {
    expect(newState.listing).toBeFalsy()
  })
  it('sets listError from action.error', () => {
    expect(newState.listError).toBe('foo')
  })
})

describe('TRANSACTIONS_CREATE_REQUEST action', () => {
  const newState = reducer(
    { ...initialState, lastCreated: 'foo', createError: 'bar' },
    { type: 'TRANSACTIONS_CREATE_REQUEST' }
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

describe('TRANSACTIONS_CREATE_SUCCESS action', () => {
  const newState = reducer(
    {
      ...initialState,
      list: ['foo', 'bar'],
      offset: 2,
      creating: true,
      createError: 'zaz',
    },
    {
      type: 'TRANSACTIONS_CREATE_SUCCESS',
      transaction: { demand: { name: 'foobar' }, id: 1 },
    }
  )

  it('concats item from action.demand to beginning of list', () => {
    expect(newState.list).toEqual([
      { name: 'foobar', transactions: [{ demand: { name: 'foobar' }, id: 1 }] }, 'foo', 'bar'
    ])
  })
  it('increases offset by 1', () => {
    expect(newState.offset).toBe(3)
  })
  it('sets lastCreated from action.transaction', () => {
    expect(newState.lastCreated)
      .toEqual({ demand: { name: 'foobar' }, id: 1 })
  })
  it('sets creating to false', () => {
    expect(newState.creating).toBeFalsy()
  })
  it('clears createError', () => {
    expect(newState.createError).toBeNull()
  })
})

describe('TRANSACTIONS_CREATE_FAILURE action', () => {
  const newState = reducer(
    { ...initialState, creating: true },
    { type: 'TRANSACTIONS_CREATE_FAILURE', error: 'foo' }
  )

  it('sets creating to false', () => {
    expect(newState.creating).toBeFalsy()
  })
  it('sets createError from action.error', () => {
    expect(newState.createError).toBe('foo')
  })
})

describe('DEMANDS_COMPLETE_REQUEST action', () => {
  const newState = reducer(
    {
      ...initialState,
      list: [{ id: 1 }, { id: 2 }, { id: 3 }],
    },
    {
      type: 'DEMANDS_COMPLETE_REQUEST',
      demand: { id: 2 },
    }
  )

  it('sets completing to true in list items with id matching action.demand.id', () => {
    expect(newState.list).toEqual([
      { id: 1 }, { id: 2, completing: true }, { id: 3 }
    ])
  })
})

describe('DEMANDS_COMPLETE_SUCCESS action', () => {
  const newState = reducer(
    {
      ...initialState,
      list: [{ id: 1 }, { id: 2, transactions: 'foobar' }, { id: 3, transactions: 'zaz' }],
    },
    {
      type: 'DEMANDS_COMPLETE_SUCCESS',
      demand: { id: 2, text: 'foo' },
    }
  )

  it('sets transactions in list items with id matching action.demand.id', () => {
    expect(newState.list).toEqual([
      { id: 1 }, { id: 2, text: 'foo', transactions: 'foobar' }, { id: 3, transactions: 'zaz' }
    ])
  })
})

describe('DEMANDS_COMPLETE_FAILURE action', () => {
  const newState = reducer(
    {
      ...initialState,
      list: [{ id: 1, completing: true }, { id: 2, completing: true }]
    },
    {
      type: 'DEMANDS_COMPLETE_FAILURE',
      demand: { id: 2 },
    }
  )

  it('sets completing to false in list items with id matching action.demand.id', () => {
    expect(newState.list).toEqual([
      { id: 1, completing: true }, { id: 2, completing: false }
    ])
  })
})

describe('DEMANDS_CANCEL_REQUEST action', () => {
  const newState = reducer(
    {
      ...initialState,
      list: [{ id: 1 }, { id: 2 }, { id: 3 }],
    },
    {
      type: 'DEMANDS_CANCEL_REQUEST',
      demand: { id: 2 },
    }
  )

  it('sets canceling to true in list items with id matching action.demand.id', () => {
    expect(newState.list).toEqual([
      { id: 1 }, { id: 2, canceling: true }, { id: 3 }
    ])
  })
})

describe('DEMANDS_CANCEL_SUCCESS action', () => {
  const newState = reducer(
    {
      ...initialState,
      list: [{ id: 1 }, { id: 2, transactions: 'foobar' }, { id: 3, transactions: 'zaz' }],
    },
    {
      type: 'DEMANDS_CANCEL_SUCCESS',
      demand: { id: 2, text: 'foo' },
    }
  )

  it('sets transactions in list items with id matching action.demand.id', () => {
    expect(newState.list).toEqual([
      { id: 1 }, { id: 2, text: 'foo', transactions: 'foobar' }, { id: 3, transactions: 'zaz' }
    ])
  })
})

describe('DEMANDS_CANCEL_FAILURE action', () => {
  const newState = reducer(
    {
      ...initialState,
      list: [{ id: 1, canceling: true }, { id: 2, canceling: true }],
    },
    {
      type: 'DEMANDS_CANCEL_FAILURE',
      demand: { id: 2 },
    }
  )

  it('sets canceling to false in list items with id matching action.demand.id', () => {
    expect(newState.list).toEqual([
      { id: 1, canceling: true }, { id: 2, canceling: false }
    ])
  })
})

describe('DEMANDS_REACTIVATE_REQUEST action', () => {
  const newState = reducer(
    {
      ...initialState,
      list: [{ id: 1 }, { id: 2 }, { id: 3 }],
    },
    {
      type: 'DEMANDS_REACTIVATE_REQUEST',
      demand: { id: 2 },
    }
  )

  it('sets reactivating to true in list items with id matching action.demand.id', () => {
    expect(newState.list).toEqual([
      { id: 1 }, { id: 2, reactivating: true }, { id: 3 }
    ])
  })
})

describe('DEMANDS_REACTIVATE_SUCCESS action', () => {
  const newState = reducer(
    {
      ...initialState,
      list: [{ id: 1 }, { id: 2, transactions: 'foobar' }, { id: 3, transactions: 'zaz' }],
    },
    {
      type: 'DEMANDS_REACTIVATE_SUCCESS',
      demand: { id: 2, text: 'foo' },
    }
  )

  it('sets transactions in list items with id matching action.demand.id', () => {
    expect(newState.list).toEqual([
      { id: 1 }, { id: 2, text: 'foo', transactions: 'foobar' }, { id: 3, transactions: 'zaz' }
    ])
  })
})

describe('DEMANDS_REACTIVATE_FAILURE action', () => {
  const newState = reducer(
    {
      ...initialState,
      list: [{ id: 1, reactivating: true }, { id: 2, reactivating: true }],
    },
    {
      type: 'DEMANDS_REACTIVATE_FAILURE',
      demand: { id: 2 },
    }
  )

  it('sets reactivating to false in list items with id matching action.demand.id', () => {
    expect(newState.list).toEqual([
      { id: 1, reactivating: true }, { id: 2, reactivating: false }
    ])
  })
})

describe('MESSAGES_CREATE_REQUEST action', () => {
  const newState = reducer(
    {
      ...initialState,
      list: [
        { foo: 'bar', transactions: [{ id: 1 }, { id: 2 }] },
        { foo: 'bar2', transactions: [{ id: 2 }, { id: 3 }] }
      ],
    },
    {
      type: 'MESSAGES_CREATE_REQUEST',
      message: { transaction_id: 2, text: 'foobar' },
    }
  )

  it('sets reactivating to false in list items with id matching action.demand.id', () => {
    expect(newState.list).toEqual([
      { foo: 'bar', transactions: [
          { id: 1 }, { id: 2, last_message_text: 'foobar' }
        ]
      },
      { foo: 'bar2', transactions: [
          { id: 2, last_message_text: 'foobar' }, { id: 3 }
        ]
      }
    ])
  })
})

describe('UNREAD_NOTIFICATIONS_LIST_SUCCESS action', () => {
  const newState = reducer(
    {
      ...initialState,
      list: [
        { id: 'd1', foo: 'bar', transactions: [{ id: 1 }, { id: 2 }] },
        { id: 'd2', foo: 'bar2', transactions: [{ id: 2 }, { id: 3 }] }
      ],
    },
    {
      type: 'UNREAD_NOTIFICATIONS_LIST_SUCCESS',
      list: [
        { message: 'foobar', transaction: { id: 2, demand: { id: 'd2' } } },
        { message: 'foobar2', transaction: { id: 4, demand: { id: 'd4' } } },
      ],
    }
  )

  it('concats new demands to beginning of list and updates old ones', () => {
    expect(newState.list).toEqual([
      { id: 'd4', transactions: [{ demand: { id: 'd4' }, id: 4 }] },
      { foo: 'bar', id: 'd1', transactions: [{ id: 1 }, { demand: { id: 'd2' }, id: 2 }] },
      { foo: 'bar2', id: 'd2', transactions: [{ demand: { id: 'd2' }, id: 2 }, { id: 3 }] },
    ])
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
