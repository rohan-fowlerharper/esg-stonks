import favouriteStonks, { ADD_FAVOURITE_STONK, REMOVE_FAVOURITE_STONK, SET_FAVOURITE_STONKS } from '../favouriteStonks'

describe('favouriteStonks', () => {
  test('should return the initial state', () => {
    expect(favouriteStonks(undefined, {})).toEqual([])
  })
  test('ADD_ACTIVE_STONK: adds a favourite stonk to the user profile', () => {
    const initialState = []
    const stonkId = 1
    const state = favouriteStonks(initialState, {
      type: ADD_FAVOURITE_STONK,
      stonkId
    })
    expect(state).toEqual([1])
    expect(state).not.toEqual(initialState)
  })
  test('REMOVE_ACTIVE_STONK: removes a favourite stonk from the user profile', () => {
    const initialState = [1, 2, 3, 4]
    const stonkId = 1
    const state = favouriteStonks(initialState, {
      type: REMOVE_FAVOURITE_STONK,
      stonkId
    })
    expect(state).toEqual([2, 3, 4])
    expect(state).not.toEqual(initialState)
  })
  test('SET_FAVOURITE_STONKS: sets favourite stonks', () => {
    const initialState = [5, 6, 7]
    const stonkIds = [1, 2, 3, 4]
    const state = favouriteStonks(initialState, {
      type: SET_FAVOURITE_STONKS,
      stonkIds
    })
    expect(state).toEqual([1, 2, 3, 4])
    expect(state).not.toEqual(initialState)
  })
})
