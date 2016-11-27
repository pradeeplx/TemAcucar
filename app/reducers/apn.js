export const initialState = {
  token: null,
}

export default function apn(state = initialState, action) {
  switch (action.type) {
    case 'APN_REGISTER':
      return {
        ...state,
        token: action.token,
      }
    default:
      return state
  }
}
