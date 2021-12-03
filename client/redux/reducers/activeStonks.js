export const SET_FIRST_STONK = 'SET_FIRST_STONK'
export const SET_SECOND_STONK = 'SET_SECOND_STONK'

export default function activeStonks (state = [null, null], action) {
  switch (action.type) {
    case SET_FIRST_STONK:
      return []
    case SET_SECOND_STONK:
      return []
    default:
      return state
  }
}
