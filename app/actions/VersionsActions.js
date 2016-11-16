import React, { Platform } from 'react-native'
import { apiAction } from './BasicActions'

export function list() {
  return apiAction({
    prefix: 'VERSIONS_LIST',
    path: `/versions?platform=${Platform.OS}`,
    currentUser: () => null,
    processResponse: (response, json) => {
      return { list: json }
    },
  })
}

export function ignoreUpdate() {
  return dispatch => {
    dispatch({ type: 'VERSIONS_IGNORE_UPDATE' })
  }
}
