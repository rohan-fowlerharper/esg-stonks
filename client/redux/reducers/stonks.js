export const SET_STONKS = 'SET_STONKS'
export const CLEAR_STONKS = 'CLEAR_STONKS'

export default function stonks (state = [], action) {
  switch (action.type) {
    case SET_STONKS:
      return action.stonks
    case CLEAR_STONKS:
      return []
    default:
      return state
  }
}
