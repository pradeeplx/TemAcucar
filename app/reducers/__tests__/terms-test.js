import reducer, { initialState } from '../terms'

test('initialState', () => {
  expect(initialState).toEqual({
    acceptingTerms: false,
    acceptTermsError: null,
    rejectedTerms: false,
    scrolledToBottom: false,
  })
})

describe('TERMS_ACCEPT_REQUEST action', () => {
  const newState = reducer(initialState, { type: 'TERMS_ACCEPT_REQUEST' })

  it('sets acceptingTerms to true', () => {
    expect(newState.acceptingTerms).toBeTruthy()
  })
})

describe('TERMS_ACCEPT_SUCCESS action', () => {
  const newState = reducer(
    { ...initialState, acceptingTerms: true },
    { type: 'TERMS_ACCEPT_SUCCESS' }
  )

  it('sets acceptingTerms to false', () => {
    expect(newState.acceptingTerms).toBeFalsy()
  })
})

describe('TERMS_ACCEPT_FAILURE action', () => {
  const newState = reducer(
    { ...initialState, acceptingTerms: true },
    { type: 'TERMS_ACCEPT_FAILURE', error: 'foo' }
  )

  it('sets acceptingTerms to false', () => {
    expect(newState.acceptingTerms).toBeFalsy()
  })
  it('sets acceptTermsError from action.error', () => {
    expect(newState.acceptTermsError).toBe('foo')
  })
})

describe('TERMS_REJECT action', () => {
  const newState = reducer(initialState, { type: 'TERMS_REJECT' })

  it('sets rejectedTerms to true', () => {
    expect(newState.rejectedTerms).toBeTruthy()
  })
})

describe('TERMS_CANCEL_REJECT action', () => {
  const newState = reducer(
    { ...initialState, rejectedTerms: true, scrolledToBottom: true },
    { type: 'TERMS_CANCEL_REJECT', error: 'foo' }
  )

  it('sets rejectedTerms to false', () => {
    expect(newState.rejectedTerms).toBeFalsy()
  })
  it('sets scrolledToBottom to false', () => {
    expect(newState.scrolledToBottom).toBeFalsy()
  })
})

describe('TERMS_SCROLL_TO_BOTTOM action', () => {
  const newState = reducer(initialState, { type: 'TERMS_SCROLL_TO_BOTTOM' })

  it('sets scrolledToBottom to true', () => {
    expect(newState.scrolledToBottom).toBeTruthy()
  })
})

describe('STORED_AUTH_RESET_SUCCESS action', () => {
  it('resets the state', () => {
    expect(reducer({}, { type: 'STORED_AUTH_RESET_SUCCESS' })).toEqual(initialState)
  })
})
