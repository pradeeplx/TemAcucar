import reducer, { initialState, success, failure, tip } from '../toast'

test('initialState', () => {
  expect(initialState).toEqual({
    show: false,
    type: null,
    message: null,
    duration: 3500,
  })
})

test('success', () => {
  expect(success('Foo')).toEqual({
    show: true,
    type: 'success',
    message: 'Foo',
  })
})

test('failure', () => {
  expect(failure('Foo')).toEqual({
    show: true,
    type: 'failure',
    message: 'Oops! Foo. Por favor, tente novamente.',
  })
})

test('tip', () => {
  expect(tip('Foo')).toEqual({
    show: true,
    type: 'tip',
    message: 'Foo',
  })
})

describe('TOAST_SHOW action', () => {
  const newState = reducer({}, { type: 'TOAST_SHOW' })

  it('returns the initialState', () => {
    expect(newState).toEqual(initialState)
  })
})
