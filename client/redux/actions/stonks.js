import { getStonks } from '../../apis/stonks'

import { SET_STONKS } from '../reducers/stonks'

export function setStonks (stonks) {
  return {
    type: SET_STONKS,
    stonks
  }
}

export function setError (message) {
  return {
    type: 'SET_ERROR',
    message
  }
}

// todo: add token to this
export function fetchStonks (token) {
  return dispatch => {
    return getStonks(token)
      .then(stonks => {
        dispatch(setStonks(stonks))
        return null
      })
      .catch(err => dispatch(setError(err)))
  }
}
