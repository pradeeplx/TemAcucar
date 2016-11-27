import reducer, { initialState } from '../config'

test('initialState', () => {
  expect(initialState).toEqual({
    confirmingEmail: false,
    confirmEmailError: null,
    updatingEmail: false,
    updateEmailError: null,
  })
})

describe('CONFIG_CONFIRM_EMAIL_REQUEST action', () => {
  const newState = reducer(
    { ...initialState, confirmEmailError: 'foo', updateEmailError: 'bar' },
    { type: 'CONFIG_CONFIRM_EMAIL_REQUEST' }
  )

  it('sets confirmingEmail to true', () => {
    expect(newState.confirmingEmail).toBeTruthy()
  })
  it('clears confirmEmailError', () => {
    expect(newState.confirmEmailError).toBeNull()
  })
  it('clears updateEmailError', () => {
    expect(newState.updateEmailError).toBeNull()
  })
})

describe('CONFIG_CONFIRM_EMAIL_SUCCESS action', () => {
  const newState = reducer(
    { confirmingEmail: true, confirmEmailError: 'foo', updateEmailError: 'bar' },
    { type: 'CONFIG_CONFIRM_EMAIL_SUCCESS' }
  )

  it('sets confirmingEmail to false', () => {
    expect(newState.confirmingEmail).toBeFalsy()
  })
  it('clears confirmEmailError', () => {
    expect(newState.confirmEmailError).toBeNull()
  })
  it('clears updateEmailError', () => {
    expect(newState.updateEmailError).toBeNull()
  })
})

describe('CONFIG_CONFIRM_EMAIL_FAILURE action', () => {
  const newState = reducer(
    { ...initialState, confirmingEmail: true },
    { type: 'CONFIG_CONFIRM_EMAIL_FAILURE', error: 'foo' }
  )

  it('sets confirmingEmail to false', () => {
    expect(newState.confirmingEmail).toBeFalsy()
  })
  it('sets confirmEmailError from action.error', () => {
    expect(newState.confirmEmailError).toBe('foo')
  })
})

describe('CONFIG_UPDATE_EMAIL_REQUEST action', () => {
  const newState = reducer(
    { ...initialState, confirmEmailError: 'foo', updateEmailError: 'bar' },
    { type: 'CONFIG_UPDATE_EMAIL_REQUEST' }
  )

  it('sets updatingEmail to true', () => {
    expect(newState.updatingEmail).toBeTruthy()
  })
  it('clears confirmEmailError', () => {
    expect(newState.confirmEmailError).toBeNull()
  })
  it('clears updateEmailError', () => {
    expect(newState.updateEmailError).toBeNull()
  })
})

describe('CONFIG_UPDATE_EMAIL_SUCCESS action', () => {
  const newState = reducer(
    { updatingEmail: true, confirmEmailError: 'foo', updateEmailError: 'bar' },
    { type: 'CONFIG_UPDATE_EMAIL_SUCCESS' }
  )

  it('sets updatingEmail to false', () => {
    expect(newState.updatingEmail).toBeFalsy()
  })
  it('clears confirmEmailError', () => {
    expect(newState.confirmEmailError).toBeNull()
  })
  it('clears updateEmailError', () => {
    expect(newState.updateEmailError).toBeNull()
  })
})

describe('CONFIG_UPDATE_EMAIL_FAILURE action', () => {
  const newState = reducer(
    { ...initialState, updatingEmail: true },
    { type: 'CONFIG_UPDATE_EMAIL_FAILURE', error: 'foo' }
  )

  it('sets updatingEmail to false', () => {
    expect(newState.updatingEmail).toBeFalsy()
  })
  it('sets updateEmailError from action.error', () => {
    expect(newState.updateEmailError).toBe('foo')
  })
})

describe('STORED_AUTH_RESET_SUCCESS action', () => {
  it('resets the state', () => {
    expect(reducer({}, { type: 'STORED_AUTH_RESET_SUCCESS' }
  )).toEqual(initialState)
  })
})
