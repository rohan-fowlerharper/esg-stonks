import activeStonks from '../activeStonks'
import { addActiveStonk, removeActiveStonk } from '../../actions/activeStonks'

describe('activeStonks', () => {
  test('check initial state', () => {
    const initialState = [null, null]
    const state = activeStonks(initialState, {})
    expect(state).toEqual(initialState)
  })
  test('ADD_ACTIVE_STONK: add one active stonk to state', () => {
    const state = activeStonks([null, null], addActiveStonk('AAPL'))
    expect(state).toEqual(['AAPL', null])
  })
  test('ADD_ACTIVE_STONK: add two active stonks to state', () => {
    const state = activeStonks([null, null], addActiveStonk('AAPL'))
    const state2 = activeStonks(state, addActiveStonk('GOOG'))
    expect(state2).toEqual(['AAPL', 'GOOG'])
  })
})

describe('removeActiveStonk', () => {
  test('REMOVE_ACTIVE_STONK: remove one active stonk from state', () => {
    const state = activeStonks(['AAPL', 'GOOG'], removeActiveStonk('AAPL'))
    expect(state).toEqual([null, 'GOOG'])
  })
  test('REMOVE_ACTIVE_STONK: remove two active stonks from state', () => {
    const state = activeStonks(['AAPL', 'GOOG'], removeActiveStonk('AAPL'))
    const state2 = activeStonks(state, removeActiveStonk('GOOG'))
    expect(state2).toEqual([null, null])
  })
})
