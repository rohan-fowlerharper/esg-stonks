import { getStonks } from '../../apis/stonks'

import { SET_STONKS } from '../reducers/stonks'

export function setStonks (stonks) {
  return {
    type: SET_STONKS,
    stonks
  }
}

// todo: add token to this
export function fetchStonks () {
  return dispatch => {
    return getStonks()
      .then(stonks => {
        dispatch(setStonks(stonks))
        return null
      })
      .catch(err => {
        console.log(err)
      })
  }
}
