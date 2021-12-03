export const ADD_ACTIVE_STONK = 'ADD_ACTIVE_STONK'
export const REMOVE_ACTIVE_STONK = 'REMOVE_ACTIVE_STONK'

export default function activeStonks (state = [null, null], action) {
  switch (action.type) {
    case ADD_ACTIVE_STONK:
      if (state[0] === null) {
        return [action.stockSymbol, state[1]]
      } else if (state[1] === null) {
        return [state[0], action.stockSymbol]
      } else {
        return state
      }
    case REMOVE_ACTIVE_STONK:
      return state.map(stateSymbol => {
        if (stateSymbol === action.stockSymbol) {
          return null
        } else return stateSymbol
      })
    default:
      return state
  }
}
