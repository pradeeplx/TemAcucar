import reducer, { initialState } from '../auth'

test('initialState', () => {
  expect(initialState).toEqual({
    currentUser: null,
    credentials: null,
    startingUp: true,
    gettingStoredAuth: false,
    signingIn: false,
    signingOut: false,
    facebookSigningIn: false,
    facebookConnecting: false,
    requestingPassword: false,
    resetPassword: false,
    resetingPassword: false,
    signInError: null,
    signUpError: null,
    facebookError: null,
    requestPasswordError: null,
    refreshedUser: false,
    refreshingUser: false,
    refreshUserError: null,
  })
})

const stateWithUser = { ...initialState, currentUser: { id: 1 } }
const actionWithUser = type => ({ type, currentUser: { name: 'john' }, credentials: 1 })
const filledErrors = {
  signInError: null,
  signUpError: null,
  facebookError: null,
  requestPasswordError: null,
  refreshUserError: null,
}

describe('STORED_AUTH_GET_REQUEST action', () => {
  const newState = reducer(initialState, { type: 'STORED_AUTH_GET_REQUEST' })

  it('sets gettingStoredAuth to true', () => {
    expect(newState.gettingStoredAuth).toBeTruthy()
  })
})

describe('STORED_AUTH_GET_SUCCESS action', () => {
  const newState = reducer(
    {
      ...initialState,
      gettingStoredAuth: true,
    },
    {
      type: 'STORED_AUTH_GET_SUCCESS',
      credentials: 'foo',
      currentUser: 'bar',
    }
  )

  it('sets credentials from action.credentials', () => {
    expect(newState.credentials).toBe('foo')
  })
  it('sets currentUser from action.currentUser', () => {
    expect(newState.currentUser).toBe('bar')
  })
  it('sets gettingStoredAuth to false', () => {
    expect(newState.gettingStoredAuth).toBeFalsy()
  })
})

describe('STORED_AUTH_GET_FAILURE action', () => {
  const newState = reducer(
    { ...initialState, gettingStoredAuth: true },
    { type: 'STORED_AUTH_GET_FAILURE' }
  )

  it('sets gettingStoredAuth to false', () => {
    expect(newState.gettingStoredAuth).toBeFalsy()
  })
  it('sets startingUp to false', () => {
    expect(newState.startingUp).toBeFalsy()
  })
})

describe('STORED_AUTH_RESET_SUCCESS action', () => {
  const newState = reducer(
    {
      ...initialState,
      credentials: 'foo',
      currentUser: 'bar',
    },
    { type: 'STORED_AUTH_RESET_SUCCESS' }
  )

  it('clears credentials', () => {
    expect(newState.credentials).toBeNull()
  })
  it('clears currentUser', () => {
    expect(newState.currentUser).toBeNull()
  })
})

describe('AUTH_REFRESH_USER_REQUEST action', () => {
  const newState = reducer(
    stateWithUser,
    actionWithUser('AUTH_REFRESH_USER_REQUEST')
  )

  it('set currentUser merging state and action', () => {
    expect(newState.currentUser).toEqual({ id: 1, name: 'john' })
  })
  it('sets refreshingUser to true', () => {
    expect(newState.refreshingUser).toBeTruthy()
  })
})

describe('AUTH_REFRESH_USER_SUCCESS action', () => {
  const newState = reducer(
    { ...stateWithUser, refreshingUser: true },
    actionWithUser('AUTH_REFRESH_USER_SUCCESS')
  )

  it('set currentUser merging state and action', () => {
    expect(newState.currentUser).toEqual({ id: 1, name: 'john' })
  })
  it('sets credentials from action.credentials', () => {
    expect(newState.credentials).toBe(1)
  })
  it('sets refreshingUser to false', () => {
    expect(newState.refreshingUser).toBeFalsy()
  })
  it('sets refreshedUser to true', () => {
    expect(newState.refreshedUser).toBeTruthy()
  })
  it('sets startingUp to false', () => {
    expect(newState.startingUp).toBeFalsy()
  })
})

describe('AUTH_REFRESH_USER_FAILURE action', () => {
  const newState = reducer(
    { ...initialState, refreshingUser: true },
    { type: 'AUTH_REFRESH_USER_FAILURE', error: 'foo' }
  )

  it('sets refreshingUser to false', () => {
    expect(newState.refreshingUser).toBeFalsy()
  })
  it('sets refreshUserError from action.refreshUserError', () => {
    expect(newState.refreshUserError).toBe('foo')
  })
  it('sets startingUp to false', () => {
    expect(newState.startingUp).toBeFalsy()
  })
})

describe('AUTH_SIGN_IN_REQUEST action', () => {
  const newState = reducer(
    { ...stateWithUser, ...filledErrors },
    actionWithUser('AUTH_SIGN_IN_REQUEST')
  )

  it('set currentUser merging state and action', () => {
    expect(newState.currentUser).toEqual({ id: 1, name: 'john' })
  })
  it('clears signInError', () => {
    expect(newState.signInError).toBeNull()
  })
  it('clears signUpError', () => {
    expect(newState.signUpError).toBeNull()
  })
  it('clears facebookError', () => {
    expect(newState.facebookError).toBeNull()
  })
  it('sets signingIn to true', () => {
    expect(newState.signingIn).toBeTruthy()
  })
})

describe('AUTH_SIGN_IN_SUCCESS action', () => {
  const newState = reducer(
    {
      ...stateWithUser,
      ...filledErrors,
      signingIn: true,
    }, actionWithUser('AUTH_SIGN_IN_SUCCESS')
  )

  it('set currentUser merging state and action', () => {
    expect(newState.currentUser).toEqual({ id: 1, name: 'john' })
  })
  it('sets credentials from action.credentials', () => {
    expect(newState.credentials).toBe(1)
  })
  it('sets signingIn to false', () => {
    expect(newState.signingIn).toBeFalsy()
  })
  it('clears signInError', () => {
    expect(newState.signInError).toBeNull()
  })
  it('clears signUpError', () => {
    expect(newState.signUpError).toBeNull()
  })
  it('clears facebookError', () => {
    expect(newState.facebookError).toBeNull()
  })
  it('sets startingUp to false', () => {
    expect(newState.startingUp).toBeFalsy()
  })
  it('sets refreshedUser to true', () => {
    expect(newState.refreshedUser).toBeTruthy()
  })
})

describe('AUTH_SIGN_IN_FAILURE action', () => {
  const newState = reducer(
    { ...initialState, signingIn: true },
    { type: 'AUTH_SIGN_IN_FAILURE', error: 'foo' }
  )

  it('sets signingIn to false', () => {
    expect(newState.signingIn).toBeFalsy()
  })
  it('sets signInError from action.error', () => {
    expect(newState.signInError).toBe('foo')
  })
  it('sets startingUp to false', () => {
    expect(newState.startingUp).toBeFalsy()
  })
})

describe('AUTH_SIGN_UP_REQUEST action', () => {
  const newState = reducer(
    { ...stateWithUser, ...filledErrors },
    actionWithUser('AUTH_SIGN_UP_REQUEST')
  )

  it('set currentUser merging state and action', () => {
    expect(newState.currentUser).toEqual({ id: 1, name: 'john' })
  })
  it('clears signInError', () => {
    expect(newState.signInError).toBeNull()
  })
  it('clears signUpError', () => {
    expect(newState.signUpError).toBeNull()
  })
  it('clears facebookError', () => {
    expect(newState.facebookError).toBeNull()
  })
  it('sets signingUp to true', () => {
    expect(newState.signingUp).toBeTruthy()
  })
})

describe('AUTH_SIGN_UP_SUCCESS action', () => {
  const newState = reducer(
    {
      ...stateWithUser,
      ...filledErrors,
      signingUp: true,
    }, actionWithUser('AUTH_SIGN_UP_SUCCESS')
  )

  it('set currentUser merging state and action', () => {
    expect(newState.currentUser).toEqual({ id: 1, name: 'john' })
  })
  it('sets credentials from action.credentials', () => {
    expect(newState.credentials).toBe(1)
  })
  it('clears signInError', () => {
    expect(newState.signInError).toBeNull()
  })
  it('clears signUpError', () => {
    expect(newState.signUpError).toBeNull()
  })
  it('clears facebookError', () => {
    expect(newState.facebookError).toBeNull()
  })
  it('sets signingUp to false', () => {
    expect(newState.signingUp).toBeFalsy()
  })
  it('sets refreshedUser to true', () => {
    expect(newState.refreshedUser).toBeTruthy()
  })
})

describe('AUTH_SIGN_UP_FAILURE action', () => {
  const newState = reducer(
    { ...initialState, currentUser: 'foo', signingUp: true },
    { type: 'AUTH_SIGN_UP_FAILURE', error: 'bar' }
  )

  it('clears currentUser', () => {
    expect(newState.currentUser).toBeNull()
  })
  it('sets signingUp to false', () => {
    expect(newState.signingUp).toBeFalsy()
  })
  it('sets signUpError from action.error', () => {
    expect(newState.signUpError).toBe('bar')
  })
})

describe('AUTH_SIGN_OUT_REQUEST action', () => {
  const newState = reducer(initialState, { type: 'AUTH_SIGN_OUT_REQUEST' })

  it('sets signingOut to true', () => {
    expect(newState.signingOut).toBeTruthy()
  })
})

describe('AUTH_SIGN_OUT_SUCCESS action', () => {
  const newState = reducer(
    {
      ...initialState,
      currentUser: 'john',
      credentials: 1,
      signingOut: true,
      refreshedUser: true,
    },
    { type: 'AUTH_SIGN_OUT_SUCCESS' }
  )

  it('clears currentUser', () => {
    expect(newState.currentUser).toBeNull()
  })
  it('clears credentials', () => {
    expect(newState.credentials).toBeNull()
  })
  it('sets signingOut to false', () => {
    expect(newState.signingOut).toBeFalsy()
  })
  it('sets refreshedUser to false', () => {
    expect(newState.refreshedUser).toBeFalsy()
  })
})

describe('AUTH_SIGN_OUT_FAILURE action', () => {
  const newState = reducer(
    {
      ...initialState,
      currentUser: 'john',
      credentials: 1,
      signingOut: true,
    },
    { type: 'AUTH_SIGN_OUT_FAILURE' }
  )

  it('clears currentUser', () => {
    expect(newState.currentUser).toBeNull()
  })
  it('clears credentials', () => {
    expect(newState.credentials).toBeNull()
  })
  it('sets signingOut to false', () => {
    expect(newState.signingOut).toBeFalsy()
  })
})

describe('AUTH_FACEBOOK_REQUEST action', () => {
  const newState = reducer(
    {
      ...stateWithUser,
      ...filledErrors,
    }, actionWithUser('AUTH_FACEBOOK_REQUEST')
  )

  it('set currentUser merging state and action', () => {
    expect(newState.currentUser).toEqual({ id: 1, name: 'john' })
  })
  it('clears signInError', () => {
    expect(newState.signInError).toBeNull()
  })
  it('clears signUpError', () => {
    expect(newState.signUpError).toBeNull()
  })
  it('clears facebookError', () => {
    expect(newState.facebookError).toBeNull()
  })
  it('sets facebookSigningIn to true', () => {
    expect(newState.facebookSigningIn).toBeTruthy()
  })
})

describe('AUTH_FACEBOOK_SUCCESS action', () => {
  const newState = reducer(
    {
      ...stateWithUser,
      ...filledErrors,
      facebookSigningIn: true,
    }, actionWithUser('AUTH_FACEBOOK_SUCCESS')
  )

  it('set currentUser merging state and action', () => {
    expect(newState.currentUser).toEqual({ id: 1, name: 'john' })
  })
  it('sets credentials from action.credentials', () => {
    expect(newState.credentials).toBe(1)
  })
  it('sets facebookSigningIn to false', () => {
    expect(newState.facebookSigningIn).toBeFalsy()
  })
  it('clears signInError', () => {
    expect(newState.signInError).toBeNull()
  })
  it('clears signUpError', () => {
    expect(newState.signUpError).toBeNull()
  })
  it('clears facebookError', () => {
    expect(newState.facebookError).toBeNull()
  })
  it('sets startingUp to false', () => {
    expect(newState.startingUp).toBeFalsy()
  })
  it('sets refreshedUser to true', () => {
    expect(newState.refreshedUser).toBeTruthy()
  })
})

describe('AUTH_FACEBOOK_FAILURE action', () => {
  const newState = reducer(
    {
      ...initialState,
      facebookSigningIn: true,
    },
    {
      type: 'AUTH_FACEBOOK_FAILURE',
      error: 'foo',
    }
  )

  it('sets facebookSigningIn to false', () => {
    expect(newState.facebookSigningIn).toBeFalsy()
  })
  it('sets facebookError from action.error', () => {
    expect(newState.facebookError).toBe('foo')
  })
  it('sets startingUp to false', () => {
    expect(newState.startingUp).toBeFalsy()
  })
})

describe('AUTH_FACEBOOK_CONNECT_REQUEST action', () => {
  const newState = reducer(
    {
      ...stateWithUser,
      facebookError: 'foo',
    }, actionWithUser('AUTH_FACEBOOK_CONNECT_REQUEST')
  )

  it('set currentUser merging state and action', () => {
    expect(newState.currentUser).toEqual({ id: 1, name: 'john' })
  })
  it('clears facebookError', () => {
    expect(newState.facebookError).toBeNull()
  })
  it('sets facebookConnecting to true', () => {
    expect(newState.facebookConnecting).toBeTruthy()
  })
})

describe('AUTH_FACEBOOK_CONNECT_SUCCESS action', () => {
  const newState = reducer(
    {
      ...stateWithUser,
      facebookError: 'foo',
      facebookConnecting: true,
    }, actionWithUser('AUTH_FACEBOOK_CONNECT_SUCCESS')
  )

  it('set currentUser merging state and action', () => {
    expect(newState.currentUser).toEqual({ id: 1, name: 'john' })
  })
  it('sets credentials from action.credentials', () => {
    expect(newState.credentials).toBe(1)
  })
  it('sets facebookConnecting to false', () => {
    expect(newState.facebookConnecting).toBeFalsy()
  })
  it('clears facebookError', () => {
    expect(newState.facebookError).toBeNull()
  })
})

describe('AUTH_FACEBOOK_CONNECT_FAILURE action', () => {
  const newState = reducer(
    { ...initialState, facebookConnecting: true },
    { type: 'AUTH_FACEBOOK_CONNECT_FAILURE', error: 'foo' }
  )

  it('sets facebookConnecting to false', () => {
    expect(newState.facebookConnecting).toBeFalsy()
  })
  it('sets facebookError from action.facebookError', () => {
    expect(newState.facebookError).toBe('foo')
  })
})

describe('AUTH_REQUEST_PASSWORD_REQUEST action', () => {
  const newState = reducer(
    {
      ...stateWithUser,
      ...filledErrors,
      resetPassword: true,
    }, actionWithUser('AUTH_REQUEST_PASSWORD_REQUEST')
  )

  it('set currentUser merging state and action', () => {
    expect(newState.currentUser).toEqual({ id: 1, name: 'john' })
  })
  it('sets requestingPassword to true', () => {
    expect(newState.requestingPassword).toBeTruthy()
  })
  it('sets resetPassword to false', () => {
    expect(newState.resetPassword).toBeFalsy()
  })
  it('clears requestPasswordError', () => {
    expect(newState.requestPasswordError).toBeNull()
  })
  it('clears signInError', () => {
    expect(newState.signInError).toBeNull()
  })
  it('clears signUpError', () => {
    expect(newState.signUpError).toBeNull()
  })
  it('clears facebookError', () => {
    expect(newState.facebookError).toBeNull()
  })
})

describe('AUTH_REQUEST_PASSWORD_SUCCESS action', () => {
  const newState = reducer(
    {
      ...initialState,
      ...filledErrors,
      requestingPassword: true,
    }, { type: 'AUTH_REQUEST_PASSWORD_SUCCESS' }
  )

  it('sets requestingPassword to false', () => {
    expect(newState.requestingPassword).toBeFalsy()
  })
  it('sets resetPassword to true', () => {
    expect(newState.resetPassword).toBeTruthy()
  })
  it('clears requestPasswordError', () => {
    expect(newState.requestPasswordError).toBeNull()
  })
  it('clears signInError', () => {
    expect(newState.signInError).toBeNull()
  })
  it('clears signUpError', () => {
    expect(newState.signUpError).toBeNull()
  })
  it('clears facebookError', () => {
    expect(newState.facebookError).toBeNull()
  })
})

describe('AUTH_REQUEST_PASSWORD_FAILURE action', () => {
  const newState = reducer(
    {
      ...initialState,
      requestingPassword: true,
      resetPassword: true,
    },
    {
      type: 'AUTH_REQUEST_PASSWORD_FAILURE',
      error: 'foo',
    }
  )

  it('sets requestingPassword to false', () => {
    expect(newState.requestingPassword).toBeFalsy()
  })
  it('sets resetPassword to false', () => {
    expect(newState.resetPassword).toBeFalsy()
  })
  it('sets requestPasswordError from action.error', () => {
    expect(newState.requestPasswordError).toBe('foo')
  })
})

describe('AUTH_RESET_PASSWORD_REQUEST action', () => {
  const newState = reducer(
    {
      ...stateWithUser,
      resetPasswordError: 'foo',
    }, actionWithUser('AUTH_RESET_PASSWORD_REQUEST')
  )

  it('set currentUser merging state and action', () => {
    expect(newState.currentUser).toEqual({ id: 1, name: 'john' })
  })
  it('sets resetingPassword to true', () => {
    expect(newState.resetingPassword).toBeTruthy()
  })
  it('clears resetPasswordError', () => {
    expect(newState.resetPasswordError).toBeNull()
  })
})

describe('AUTH_RESET_PASSWORD_SUCCESS action', () => {
  const newState = reducer(
    {
      ...stateWithUser,
      resetPasswordError: 'foo',
      resetingPassword: true,
      resetPassword: true,
    }, actionWithUser('AUTH_RESET_PASSWORD_SUCCESS')
  )

  it('set currentUser merging state and action', () => {
    expect(newState.currentUser).toEqual({ id: 1, name: 'john' })
  })
  it('set credentials from action.credentials', () => {
    expect(newState.credentials).toBe(1)
  })
  it('sets resetPassword to false', () => {
    expect(newState.resetingPassword).toBeFalsy()
  })
  it('sets resetingPassword to false', () => {
    expect(newState.resetingPassword).toBeFalsy()
  })
  it('clears resetPasswordError', () => {
    expect(newState.resetPasswordError).toBeNull()
  })
  it('sets refreshedUser to true', () => {
    expect(newState.refreshedUser).toBeTruthy()
  })
})

describe('AUTH_RESET_PASSWORD_FAILURE action', () => {
  const newState = reducer(
    {
      ...initialState,
      resetingPassword: true,
    },
    {
      type: 'AUTH_RESET_PASSWORD_FAILURE',
      error: 'foo',
    }
  )

  it('sets resetingPassword to false', () => {
    expect(newState.resetingPassword).toBeFalsy()
  })
  it('sets resetPasswordError from action.error', () => {
    expect(newState.resetPasswordError).toBe('foo')
  })
})

describe('CONFIG_UPDATE_EMAIL_NOTIFICATIONS_REQUEST action', () => {
  const newState = reducer(
    stateWithUser,
    {
      type: 'CONFIG_UPDATE_EMAIL_NOTIFICATIONS_REQUEST',
      attributes: { name: 'john' }
    }
  )

  it('set currentUser merging state and action', () => {
    expect(newState.currentUser).toEqual({ id: 1, name: 'john' })
  })
})

describe('CONFIG_UPDATE_APP_NOTIFICATIONS_REQUEST action', () => {
  const newState = reducer(
    stateWithUser,
    {
      type: 'CONFIG_UPDATE_APP_NOTIFICATIONS_REQUEST',
      attributes: { name: 'john' }
    }
  )

  it('set currentUser merging state and action', () => {
    expect(newState.currentUser).toEqual({ id: 1, name: 'john' })
  })
})

describe('Default, or any other action action', () => {
  const newState1 = reducer(initialState, { type: 'FOO_BAR' })
  const newState2 = reducer(
    { ...initialState, currentUser: { id: 1 } },
    { type: 'FOO_BAR', credentials: 1, currentUser: { name: 'john' } }
  )

  it('returns the state if there is no credentials', () => {
    expect(newState1).toEqual(initialState)
  })
  it('set currentUser if there was credentials in the action', () => {
    expect(newState2.currentUser).toEqual({ id: 1, name: 'john' })
  })
  it('set credentials from action.credentials', () => {
    expect(newState2.credentials).toBe(1)
  })
})
