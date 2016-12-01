import reducer, { initialState } from '../flaggedDemands'
import { range } from 'lodash'

test('initialState', () => {
  expect(initialState).toEqual({
    list: [],
    listing: false,
    offset: 0,
    canList: false,
    listError: null,
  })
})

describe('FLAGGED_DEMANDS_LIST_REQUEST action', () => {
  const newState = reducer(
    { ...initialState, listError: 'foo' },
    { type: 'FLAGGED_DEMANDS_LIST_REQUEST' }
  )

  it('sets listing to true', () => {
    expect(newState.listing).toBeTruthy()
  })
  it('clears listError', () => {
    expect(newState.listError).toBeNull()
  })
})

describe('FLAGGED_DEMANDS_LIST_FAILURE action', () => {
  const newState = reducer(
    { ...initialState, listing: true },
    { type: 'FLAGGED_DEMANDS_LIST_FAILURE', error: 'foo' }
  )

  it('sets listing to false', () => {
    expect(newState.listing).toBeFalsy()
  })
  it('sets listError from action.error', () => {
    expect(newState.listError).toBe('foo')
  })
})

describe('FLAGGED_DEMANDS_LIST_SUCCESS action', () => {
  const state = {
    ...initialState,
    listing: true,
    list: ['foo', 'bar'],
    offset: 2,
    listError: 'bug',
  }
  const newState = reducer(
    state,
    { type: 'FLAGGED_DEMANDS_LIST_SUCCESS', list: ['zaz', 'xyz'] }
  )
  const newState2 = reducer(
    state,
    { type: 'FLAGGED_DEMANDS_LIST_SUCCESS', list: range(0, 10) }
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

describe('DEMANDS_FLAG_REQUEST action', () => {
  const newState = reducer(
    { ...initialState, offset: 1, list: { id: 1, state: 'foo' } },
    { type: 'DEMANDS_FLAG_REQUEST', demand: { id: 2 } }
  )

  it('concats demand to beginning of list and set its state as flagged', () => {
    expect(newState.list).toEqual([
      { id: 2, state: 'flagged' }, { id: 1, state: 'foo' }
    ])
  })
  it('increases offset by 1', () => {
    expect(newState.offset).toBe(2)
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
      list: [{ id: 1 }, { id: 2, bar: 'foo' }],
    },
    {
      type: 'DEMANDS_COMPLETE_SUCCESS',
      demand: { id: 2, foo: 'bar' },
    }
  )

  it('updates items in list matching action.demand.id', () => {
    expect(newState.list).toEqual([
      { id: 1 }, { id: 2, foo: 'bar' }
    ])
  })
})

describe('DEMANDS_COMPLETE_FAILURE action', () => {
  const newState = reducer(
    {
      ...initialState,
      list: [{ id: 1, completing: true }, { id: 2, completing: true }],
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
      list: [{ id: 1 }, { id: 2, bar: 'foo' }],
    },
    {
      type: 'DEMANDS_CANCEL_SUCCESS',
      demand: { id: 2, foo: 'bar' },
    }
  )

  it('updates items in list matching action.demand.id', () => {
    expect(newState.list).toEqual([
      { id: 1 }, { id: 2, foo: 'bar' }
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
      list: [{ id: 1 }, { id: 2, bar: 'foo' }],
    },
    {
      type: 'DEMANDS_REACTIVATE_SUCCESS',
      demand: { id: 2, foo: 'bar' },
    }
  )

  it('updates items in list matching action.demand.id', () => {
    expect(newState.list).toEqual([
      { id: 1 }, { id: 2, foo: 'bar' }
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
