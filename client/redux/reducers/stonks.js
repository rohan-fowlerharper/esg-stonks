export const SET_STONKS = 'SET_STONKS'

export default function stonks (state = [], action) {
  switch (action.type) {
    case SET_STONKS:
      return action.stonks
    default:
      return state
  }
}
