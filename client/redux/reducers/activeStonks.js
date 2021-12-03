export const SET_FIRST_STONK = 'SET_FIRST_STONK'
export const SET_SECOND_STONK = 'SET_SECOND_STONK'

export default function activeStonks (state = [null, null], action) {
  switch (action.type) {
    case SET_FIRST_STONK:
      return [action.stonk, null]
    case SET_SECOND_STONK:
      return [action.stonk, action.stonk]
    default:
      return state
  }
}
