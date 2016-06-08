const initialState = {
  startingUp: true,
  drawerOpen: false,
  signingOut: false,
}

export default function dashboard(state = initialState, action) {
  switch (action.type) {
    case 'DASHBOARD_OPEN_DRAWER':
      return {
        ...state, 
        drawerOpen: true,
      }
    case 'DASHBOARD_CLOSE_DRAWER':
      return {
        ...state, 
        drawerOpen: false,
      }
    case 'DASHBOARD_SIGN_OUT':
      return {
        ...state, 
        signingOut: true,
      }
    case 'DASHBOARD_START_UP':
      return {
        ...state, 
        startingUp: false,
      }
    case 'DASHBOARD_REFRESH':
      return initialState
    case 'LOCATION_SET_LOCATION_SUCCESS':
      return initialState
    case 'STORED_AUTH_RESET_SUCCESS':
      return initialState
    default:
      return state
  }
}
