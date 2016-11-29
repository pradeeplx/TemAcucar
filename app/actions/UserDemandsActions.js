import { apiAction } from './BasicActions'

export function list(credentials, currentUser, offset = 0) {
  return apiAction({
    prefix: 'USER_DEMANDS_LIST',
    path: '/demands?filter=user&offset=' + offset,
    credentials,
    currentUser: () => currentUser,
    processResponse: (response, json) => {
      return { list: json }
    },
  })
}
