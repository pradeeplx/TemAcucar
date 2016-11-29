export const initialState = {
  dismissed: false,
}

export default function apn(state = initialState, action) {
  switch (action.type) {
    case 'OFFER_ACCEPT':
      return {
        ...state,
        dismissed: true,
      }
    case 'OFFER_DISMISS':
      return {
        ...state,
        dismissed: true,
      }
    default:
      return state
  }
}
