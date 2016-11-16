import { apiAction } from './BasicActions'

export function create(credentials, currentUser, review) {
  return apiAction({
    prefix: 'REVIEWS_CREATE',
    path: '/reviews',
    method: 'post',
    params: {
      transaction_id: review.transaction_id,
      rating: parseInt(review.rating),
      text: review.text,
    },
    requestAttributes: { review },
    credentials,
    currentUser: () => currentUser,
    processResponse: (response, json) => {
      return { review: json }
    },
  })
}

export function list(credentials, currentUser, user, offset = 0) {
  return apiAction({
    prefix: 'REVIEWS_LIST',
    path: `/reviews?user_id=${user.id}&offset=${offset}`,
    credentials,
    requestAttributes: { user, offset },
    currentUser: () => currentUser,
    processResponse: (response, json) => {
      return { list: json }
    },
  })
}
