import reducer, { initialState } from '../versions'

test('versions reducer', () => {
  describe('VERSIONS_LIST_REQUEST', () => {
    const newState = reducer({ ...initialState, listError: 'foo' }, { type: 'VERSIONS_LIST_REQUEST' })

    expect(initialState.listing).toBeFalsy()

    expect(newState.listing).toBeTruthy()
    expect(newState.listError).toBeNull()
  })

  describe('VERSIONS_LIST_SUCCESS', () => {
    const action = {
      type: 'VERSIONS_LIST_SUCCESS',
      list: ['lemon'],
    }
    const newState = reducer({ ...initialState, listing: true }, action)

    expect(newState.startingUp).toBeFalsy()
    expect(newState.listing).toBeFalsy()
    expect(newState.list).toInclude('lemon')
  })

  describe('VERSIONS_LIST_FAILURE', () => {
    const action = {
      type: 'VERSIONS_LIST_FAILURE',
      error: 'Bug!',
    }
    const newState = reducer({ ...initialState, listing: true }, action)

    expect(newState.listing).toBeFalsy()
    expect(newState.startingUp).toBeFalsy()
    expect(newState.listError).toBe('Bug!')
  })

  describe('VERSIONS_IGNORE_UPDATE', () => {
    const newState = reducer(initialState, { type: 'VERSIONS_IGNORE_UPDATE' })
    expect(newState.ignoreUpdate).toBeTruthy()
  })
})
