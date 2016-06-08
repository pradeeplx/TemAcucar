import { apiAction } from './BasicActions'

export function startUp() {
  return dispatch => {
    dispatch({ type: 'DASHBOARD_START_UP' })
  }
}

export function refresh() {
  return dispatch => {
    dispatch({ type: 'DASHBOARD_REFRESH' })
  }
}

export function openDrawer() {
  return dispatch => {
    dispatch({ type: 'DASHBOARD_OPEN_DRAWER' })
  }
}

export function closeDrawer() {
  return dispatch => {
    dispatch({ type: 'DASHBOARD_CLOSE_DRAWER' })
  }
}

export function signOut() {
  return dispatch => {
    dispatch({ type: 'DASHBOARD_SIGN_OUT' })
  }
}
