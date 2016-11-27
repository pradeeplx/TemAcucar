import reducer, { initialState } from '../adminDemands'
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

describe('ADMIN_DEMANDS_LIST_REQUEST action', () => {
  const action = { type: 'ADMIN_DEMANDS_LIST_REQUEST' }
  const newState = reducer({ ...initialState, listError: 'foo' }, action)

  it('sets listing to true', () => {
    expect(newState.listing).toBeTruthy()
  })
  it('clears listError', () => {
    expect(newState.listError).toBeNull()
  })
})

describe('ADMIN_DEMANDS_LIST_SUCCESS', () => {
  const action = { type: 'ADMIN_DEMANDS_LIST_SUCCESS' }
  const newState1 = reducer(initialState, {
    ...action,
    list: range(0, 3),
    listing: true,
    canList: true,
    listError: 'foo',
  })
  const newState2 = reducer(newState1, { ...action, list: range(0, 10) })

  it('sets list from action.list', () => {
    expect(newState1.list.length).toBe(3)
  })
  it('concats existent list with given list', () => {
    expect(newState2.list.length).toBe(13)
  })
  it('sets listing to false', () => {
    expect(newState1.listing).toBeFalsy()
  })
  it('sets offset to list.length', () => {
    expect(newState1.offset).toBe(3)
  })
  it('sums the offset with existent', () => {
    expect(newState2.offset).toBe(13)
  })
  it('sets canList to false if list is smaller than 10', () => {
    expect(newState1.canList).toBeFalsy()
  })
  it('sets canList to true if list is >= 10', () => {
    expect(newState2.canList).toBeTruthy()
  })
  it('clears listError', () => {
    expect(newState1.listError).toBeNull()
  })
})

describe('ADMIN_DEMANDS_LIST_FAILURE action', () => {
  const action = { type: 'ADMIN_DEMANDS_LIST_FAILURE', error: 'foo' }
  const newState = reducer(initialState, action)

  it('sets listing to false', () => {
    expect(newState.listing).toBeFalsy()
  })
  it('sets listError from action.error', () => {
    expect(newState.listError).toBe('foo')
  })
})

describe('DEMANDS_CREATE_SUCCESS action', () => {
  const action = { type: 'DEMANDS_CREATE_SUCCESS', demand: 'foo' }
  const newState = reducer({
    ...initialState,
    offset: 2,
    list: ['bar', 'zaz'],
  }, action)

  it('adds demand to the beginning of list', () => {
    expect(newState.list).toEqual(['foo', 'bar', 'zaz'])
  })
  it('adds 1 to previous offset', () => {
    expect(newState.offset).toBe(3)
  })
})

describe('DEMANDS_COMPLETE_REQUEST action', () => {
  const list = [{ id: 1, completing: false }, { id: 2, completing: false }]
  const action = {
    type: 'DEMANDS_COMPLETE_REQUEST',
    demand: { id: 1 },
  }
  const newState = reducer({ ...initialState, list }, action)

  it('sets list item to completing when it matches the action.demand.id', () => {
    expect(newState.list[0].completing).toBeTruthy()
  })
  it('does not set list item to completing when id is different', () => {
    expect(newState.list[1].completing).toBeFalsy()
  })
})

describe('DEMANDS_COMPLETE_SUCCESS action', () => {
  const list = [{ id: 1, foo: null }, { id: 2, foo: 'yo' }]
  const action = {
    type: 'DEMANDS_COMPLETE_SUCCESS',
    demand: { id: 1, foo: 'bar' },
  }
  const newState = reducer({ ...initialState, list }, action)

  it('updates list item with item given by the action', () => {
    expect(newState.list[0].foo).toBe('bar')
  })
  it('does not update list items with different id', () => {
    expect(newState.list[1].foo).not.toBe('bar')
  })
})

describe('DEMANDS_COMPLETE_FAILURE action', () => {
  const list = [{ id: 1, completing: true }, { id: 2, completing: true }]
  const action = {
    type: 'DEMANDS_COMPLETE_FAILURE',
    demand: { id: 1 },
  }
  const newState = reducer({ ...initialState, list }, action)

  it('sets list item to not be completing when it matches the action.demand.id', () => {
    expect(newState.list[0].completing).toBeFalsy()
  })
  it('does not set list item to not be completing when id is different', () => {
    expect(newState.list[1].completing).toBeTruthy()
  })
})

describe('DEMANDS_CANCEL_REQUEST action', () => {
  const list = [{ id: 1, canceling: false }, { id: 2, canceling: false }]
  const action = {
    type: 'DEMANDS_CANCEL_REQUEST',
    demand: { id: 1 },
  }
  const newState = reducer({ ...initialState, list }, action)

  it('sets list item to canceling when it matches the action.demand.id', () => {
    expect(newState.list[0].canceling).toBeTruthy()
  })
  it('does not set list item to canceling when id is different', () => {
    expect(newState.list[1].canceling).toBeFalsy()
  })
})

describe('DEMANDS_CANCEL_SUCCESS action', () => {
  const list = [{ id: 1, foo: null }, { id: 2, foo: 'yo' }]
  const action = {
    type: 'DEMANDS_CANCEL_SUCCESS',
    demand: { id: 1, foo: 'bar' },
  }
  const newState = reducer({ ...initialState, list }, action)

  it('updates list item with item given by the action', () => {
    expect(newState.list[0].foo).toBe('bar')
  })
  it('does not update list items with different id', () => {
    expect(newState.list[1].foo).not.toBe('bar')
  })
})

describe('DEMANDS_CANCEL_FAILURE action', () => {
  const list = [{ id: 1, canceling: true }, { id: 2, canceling: true }]
  const action = {
    type: 'DEMANDS_CANCEL_FAILURE',
    demand: { id: 1 },
  }
  const newState = reducer({ ...initialState, list }, action)

  it('sets list item to not be canceling when it matches the action.demand.id', () => {
    expect(newState.list[0].canceling).toBeFalsy()
  })
  it('does not set list item to not be canceling when id is different', () => {
    expect(newState.list[1].canceling).toBeTruthy()
  })
})

describe('DEMANDS_REACTIVATE_REQUEST action', () => {
  const list = [{ id: 1, reactivating: false }, { id: 2, reactivating: false }]
  const action = {
    type: 'DEMANDS_REACTIVATE_REQUEST',
    demand: { id: 1 },
  }
  const newState = reducer({ ...initialState, list }, action)

  it('sets list item to reactivating when it matches the action.demand.id', () => {
    expect(newState.list[0].reactivating).toBeTruthy()
  })
  it('does not set list item to reactivating when id is different', () => {
    expect(newState.list[1].reactivating).toBeFalsy()
  })
})

describe('DEMANDS_REACTIVATE_SUCCESS action', () => {
  const list = [{ id: 1, foo: null }, { id: 2, foo: 'yo' }]
  const action = {
    type: 'DEMANDS_REACTIVATE_SUCCESS',
    demand: { id: 1, foo: 'bar' },
  }
  const newState = reducer({ ...initialState, list }, action)

  it('updates list item with item given by the action', () => {
    expect(newState.list[0].foo).toBe('bar')
  })
  it('does not update list items with different id', () => {
    expect(newState.list[1].foo).not.toBe('bar')
  })
})

describe('DEMANDS_REACTIVATE_FAILURE action', () => {
  const list = [{ id: 1, reactivating: true }, { id: 2, reactivating: true }]
  const action = {
    type: 'DEMANDS_REACTIVATE_FAILURE',
    demand: { id: 1 },
  }
  const newState = reducer({ ...initialState, list }, action)

  it('sets list item to not be reactivating when it matches the action.demand.id', () => {
    expect(newState.list[0].reactivating).toBeFalsy()
  })
  it('does not set list item to not be reactivating when id is different', () => {
    expect(newState.list[1].reactivating).toBeTruthy()
  })
})

describe('reset actions', () => {
  const fooState = {
    list: ['foo', 'bar'],
    listing: true,
    offset: 10,
    canList: true,
    listError: 'foo',
  }

  describe('DASHBOARD_REFRESH action', () => {
    it('resets the initial configuration', () => {
      expect(reducer(fooState, { type: 'DASHBOARD_REFRESH' })).toEqual(initialState)
    })
  })
  describe('STORED_AUTH_RESET_SUCCESS action', () => {
    it('resets the initial configuration', () => {
      expect(reducer(fooState, { type: 'STORED_AUTH_RESET_SUCCESS' })).toEqual(initialState)
    })
  })
})
