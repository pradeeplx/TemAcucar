import reducer, { initialState } from '../viewDemand'

test('initialState', () => {
  expect(initialState).toEqual({
    demand: null,
    shouldGoToDashboard: false,
  })
})

describe('VIEW_DEMAND_MOUNT action', () => {
  const newState = reducer(initialState, { type: 'VIEW_DEMAND_MOUNT', demand: 'foo' })

  it('sets demand from action.demand', () => {
    expect(newState.demand).toBe('foo')
  })
})

describe('VIEW_DEMAND_MOUNT action', () => {
  const prevState = { demand: 'foo', shouldGoToDashboard: true }
  const newState = reducer(prevState, { type: 'VIEW_DEMAND_UNMOUNT' })

  it('resets state to initialState', () => {
    expect(newState).toEqual(initialState)
  })
})

describe('DEMANDS_REFUSE_REQUEST action', () => {
  const action = { type: 'DEMANDS_REFUSE_REQUEST' }
  const newState1 = reducer(initialState, action)
  const newState2 = reducer({ ...initialState, demand: 'foo' }, action)

  it('sets shouldGoToDashboard if there is a previous state.demand', () => {
    expect(newState2.shouldGoToDashboard).toBeTruthy()
  })
  it('does nothing if there was no demand', () => {
    expect(newState1.shouldGoToDashboard).toBeFalsy()
  })
})

describe('DEMANDS_FLAG_REQUEST action', () => {
  const action = { type: 'DEMANDS_FLAG_REQUEST' }
  const newState1 = reducer(initialState, action)
  const newState2 = reducer({ ...initialState, demand: 'foo' }, action)

  it('sets shouldGoToDashboard if there is a previous state.demand', () => {
    expect(newState2.shouldGoToDashboard).toBeTruthy()
  })
  it('does nothing if there was no demand', () => {
    expect(newState1.shouldGoToDashboard).toBeFalsy()
  })
})

describe('TRANSACTIONS_CREATE_REQUEST action', () => {
  const action = { type: 'TRANSACTIONS_CREATE_REQUEST' }
  const newState1 = reducer(initialState, action)
  const newState2 = reducer({ ...initialState, demand: { creatingTransaction: false } }, action)

  it('sets demand.creatingTransaction if there is a previous state.demand', () => {
    expect(newState2.demand.creatingTransaction).toBeTruthy()
  })
  it('does nothing if there was no demand', () => {
    expect(newState1.demand).toBeNull()
  })
})

describe('TRANSACTIONS_CREATE_SUCCESS action', () => {
  const action = { type: 'TRANSACTIONS_CREATE_SUCCESS', transaction: { demand: 'foo' } }
  const newState1 = reducer(initialState, action)
  const newState2 = reducer({ ...initialState, demand: 'bar' }, action)

  it('updates demand from transaction if there was a demand', () => {
    expect(newState2.demand).toBe('foo')
  })
  it('does nothing if there was no demand', () => {
    expect(newState1.demand).toBeNull()
  })
})

describe('TRANSACTIONS_CREATE_FAILURE action', () => {
  const action = { type: 'TRANSACTIONS_CREATE_FAILURE' }
  const newState1 = reducer(initialState, action)
  const newState2 = reducer({ ...initialState, demand: { creatingTransaction: true } }, action)

  it('sets demand.creatingTransaction to false if there is a previous state.demand', () => {
    expect(newState2.demand.creatingTransaction).toBeFalsy()
  })
  it('does nothing if there was no demand', () => {
    expect(newState1.demand).toBeNull()
  })
})

describe('DEMANDS_COMPLETE_REQUEST action', () => {
  const action = { type: 'DEMANDS_COMPLETE_REQUEST' }
  const newState1 = reducer(initialState, action)
  const newState2 = reducer({ ...initialState, demand: { completing: false } }, action)

  it('sets demand.completing if there is a previous state.demand', () => {
    expect(newState2.demand.completing).toBeTruthy()
  })
  it('does nothing if there was no demand', () => {
    expect(newState1.demand).toBeNull()
  })
})

describe('DEMANDS_COMPLETE_SUCCESS action', () => {
  const action = { type: 'DEMANDS_COMPLETE_SUCCESS', demand: 'bar' }
  const newState1 = reducer(initialState, action)
  const newState2 = reducer({ ...initialState, demand: 'foo' }, action)

  it('updates demand form action if there is a previous state.demand', () => {
    expect(newState2.demand).toBe('bar')
  })
  it('does nothing if there was no demand', () => {
    expect(newState1.demand).toBeNull()
  })
})

describe('DEMANDS_COMPLETE_FAILURE action', () => {
  const action = { type: 'DEMANDS_COMPLETE_FAILURE' }
  const newState1 = reducer(initialState, action)
  const newState2 = reducer({ ...initialState, demand: { completing: true } }, action)

  it('sets demand.completing to false if there is a previous state.demand', () => {
    expect(newState2.demand.completing).toBeFalsy()
  })
  it('does nothing if there was no demand', () => {
    expect(newState1.demand).toBeNull()
  })
})

describe('DEMANDS_CANCEL_REQUEST action', () => {
  const action = { type: 'DEMANDS_CANCEL_REQUEST' }
  const newState1 = reducer(initialState, action)
  const newState2 = reducer({ ...initialState, demand: { canceling: false } }, action)

  it('sets demand.canceling if there is a previous state.demand', () => {
    expect(newState2.demand.canceling).toBeTruthy()
  })
  it('does nothing if there was no demand', () => {
    expect(newState1.demand).toBeNull()
  })
})

describe('DEMANDS_CANCEL_SUCCESS action', () => {
  const action = { type: 'DEMANDS_CANCEL_SUCCESS', demand: 'bar' }
  const newState1 = reducer(initialState, action)
  const newState2 = reducer({ ...initialState, demand: 'foo' }, action)

  it('updates demand form action if there is a previous state.demand', () => {
    expect(newState2.demand).toBe('bar')
  })
  it('does nothing if there was no demand', () => {
    expect(newState1.demand).toBeNull()
  })
})

describe('DEMANDS_CANCEL_FAILURE action', () => {
  const action = { type: 'DEMANDS_CANCEL_FAILURE' }
  const newState1 = reducer(initialState, action)
  const newState2 = reducer({ ...initialState, demand: { canceling: true } }, action)

  it('sets demand.canceling if there is a previous state.demand', () => {
    expect(newState2.demand.canceling).toBeFalsy()
  })
  it('does nothing if there was no demand', () => {
    expect(newState1.demand).toBeNull()
  })
})

describe('DEMANDS_REACTIVATE_REQUEST action', () => {
  const action = { type: 'DEMANDS_REACTIVATE_REQUEST' }
  const newState1 = reducer(initialState, action)
  const newState2 = reducer({ ...initialState, demand: { reactivating: false } }, action)

  it('sets demand.reactivating if there is a previous state.demand', () => {
    expect(newState2.demand.reactivating).toBeTruthy()
  })
  it('does nothing if there was no demand', () => {
    expect(newState1.demand).toBeNull()
  })
})

describe('DEMANDS_REACTIVATE_SUCCESS action', () => {
  const action = { type: 'DEMANDS_REACTIVATE_SUCCESS', demand: 'bar' }
  const newState1 = reducer(initialState, action)
  const newState2 = reducer({ ...initialState, demand: 'foo' }, action)

  it('updates demand form action if there is a previous state.demand', () => {
    expect(newState2.demand).toBe('bar')
  })
  it('does nothing if there was no demand', () => {
    expect(newState1.demand).toBeNull()
  })
})

describe('DEMANDS_REACTIVATE_FAILURE action', () => {
  const action = { type: 'DEMANDS_REACTIVATE_FAILURE' }
  const newState1 = reducer(initialState, action)
  const newState2 = reducer({ ...initialState, demand: { reactivating: true } }, action)

  it('sets demand.reactivating if there is a previous state.demand', () => {
    expect(newState2.demand.reactivating).toBeFalsy()
  })
  it('does nothing if there was no demand', () => {
    expect(newState1.demand).toBeNull()
  })
})
