import { ADD_ACTIVE_STONK, REMOVE_ACTIVE_STONK } from '../reducers/activeStonks'

export function addActiveStonk (stockSymbol) {
  return {
    type: ADD_ACTIVE_STONK,
    stockSymbol
  }
}

export function removeActiveStonk (stockSymbol) {
  return {
    type: REMOVE_ACTIVE_STONK,
    stockSymbol
  }
}
