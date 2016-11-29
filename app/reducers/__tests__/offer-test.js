import reducer, { initialState } from '../offer'

test('initialState', () => {
  expect(initialState).toEqual({
    dismissed: false,
  })
})

describe('OFFER_ACCEPT action', () => {
  it('sets dismissed to true', () => {
    expect(reducer(initialState, { type: 'OFFER_ACCEPT' }).dismissed)
      .toBeTruthy()
  })
})

describe('OFFER_DISMISS action', () => {
  it('sets dismissed to true', () => {
    expect(reducer(initialState, { type: 'OFFER_DISMISS' }).dismissed)
      .toBeTruthy()
  })
})
