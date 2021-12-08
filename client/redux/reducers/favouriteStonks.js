export const ADD_FAVOURITE_STONK = 'ADD_FAVOURITE_STONK'
export const REMOVE_FAVOURITE_STONK = 'REMOVE_FAVOURITE_STONK'
export const SET_FAVOURITE_STONKS = 'SET_FAVOURITE_STONKS'

export default function favouriteStonks (state = [], action) {
  switch (action.type) {
    case ADD_FAVOURITE_STONK:
      return [...state, action.stonkId]
    case REMOVE_FAVOURITE_STONK:
      return state.filter(stonkId => stonkId !== action.stonkId)
    case SET_FAVOURITE_STONKS:
      return action.stonkIds
    default:
      return state
  }
}
