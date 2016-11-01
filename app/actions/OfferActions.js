import Communications from 'react-native-communications'

export function accept() {
  return dispatch => {
    Communications.web("https://benfeitoria.com/temacucar")
    dispatch({ type: 'OFFER_ACCEPT' })
  }
}

export function dismiss() {
  return dispatch => {
    dispatch({ type: 'OFFER_DISMISS' })
  }
}
