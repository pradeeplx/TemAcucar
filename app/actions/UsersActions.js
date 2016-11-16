import { apiAction } from './BasicActions'

export function list(credentials, currentUser) {
  return apiAction({
    prefix: 'USERS_LIST',
    path: '/users',
    credentials,
    currentUser: () => currentUser,
    processResponse: (response, json) => {
      return { list: json }
    },
  })
}
