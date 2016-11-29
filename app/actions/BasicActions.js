import keyFilter from 'object-key-filter'
import Config from 'react-native-config'
import * as StoredAuthActions from './StoredAuthActions'

function requestHeaders(credentials) {
  return {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Access-Token': credentials.accessToken,
    'Expiry': credentials.expiry,
    'Token-Type': credentials.tokenType,
    'Uid': credentials.uid,
    'Client': credentials.client,
  }
}

function responseCredentials(response) {
  return {
    accessToken: response.headers.get('access-token'),
    client: response.headers.get('client'),
    expiry: response.headers.get('expiry'),
    tokenType: response.headers.get('token-type'),
    uid: response.headers.get('uid'),
  }
}

export function parseError(error) {
  if (error instanceof Error) {
    return {
      id: error.name,
      message: error.message,
    }
  }
  const response = error
  const contentType = response.headers.get('content-type')
  response.json().then(json => {
    if (contentType && contentType.match(/application\/json/)) {
      return json
    } else {
      return {
        id: `${response.status}`,
        message: json,
      }
    }
  })
}

export function updateCurrentUser(prefix, credentials, attributes) {
  return apiAction({
    prefix,
    path: `/users/${credentials.uid}`,
    method: 'put',
    params: attributes,
    credentials,
    requestAttributes: { attributes },
    currentUser: (response, json) => json,
    processResponse: (response, json) => {
      return { currentUser: json }
    },
  })
}

export function apiAction(options) {
  return dispatch => apiDispatchAction(dispatch, options)
}

export function apiDispatchAction(dispatch, options) {
  const { prefix, path, credentials, currentUser, method, params, requestAttributes, processResponse, afterAction } = options
  dispatch({
    type: `${prefix}_REQUEST`,
    ...requestAttributes,
  })
  let fetchOptions = { method: (method ? method : 'get') }
  if (credentials) {
    fetchOptions.headers = requestHeaders(credentials)
  } else {
    fetchOptions.headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    }
  }
  if (params) {
    fetchOptions.body = JSON.stringify(params)
  }
  fetch(`${Config.API_URL}${path}`, fetchOptions)
  .then(response => {
    if(response.ok) {
      response.json().then(json => {
        const newCredentials = responseCredentials(response)
        if (newCredentials.accessToken) {
          StoredAuthActions.set(dispatch, newCredentials, keyFilter(currentUser(response, json), ['password', 'facebook']))
        }
        dispatch({
          type: `${prefix}_SUCCESS`,
          ...(newCredentials.accessToken && { credentials: newCredentials }),
          ...(processResponse && processResponse(response, json)),
        })
      })
    } else {
      dispatch({
        type: `${prefix}_FAILURE`,
        ...requestAttributes,
        error: parseError(response),
      })
    }
    return response
  })
  .then((response) => {
    afterAction && afterAction(dispatch, response)
  })
  .catch(error => {
    dispatch({
      type: `${prefix}_FAILURE`,
      ...requestAttributes,
      error: parseError(error),
    })
  })
}
