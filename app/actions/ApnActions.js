import { updateCurrentUser } from './BasicActions'

export function register(token) {
  return dispatch => {
    dispatch({ type: 'APN_REGISTER', token })
  }
}

export function store(credentials, token) {
  return updateCurrentUser('APN_STORE', credentials, {
    apn_token: token,
  })
}

export function notify(notification) {
  return dispatch => {
    dispatch({ type: 'APN_NOTIFY', notification })
  }
}
