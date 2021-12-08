import { getUserFavourites, removeUserFavourite, addUserFavourite } from '../../apis/stonks'
import { ADD_FAVOURITE_STONK, REMOVE_FAVOURITE_STONK, SET_FAVOURITE_STONKS } from '../reducers/favouriteStonks'

export function addFavouriteStonk (stonkId, token) {
  return dispatch => {
    addUserFavourite(stonkId, token)
      .then(() => {
        return dispatch({
          type: ADD_FAVOURITE_STONK,
          stonkId
        })
      })
      .catch(() => null)
  }
}

export function removeFavouriteStonk (stonkId, token) {
  return dispatch => {
    return removeUserFavourite(stonkId, token)
      .then(() => {
        return dispatch({
          type: REMOVE_FAVOURITE_STONK,
          stonkId
        })
      })
      .catch(() => null)
  }
}

export function fetchUserFavourites (token) {
  return dispatch => {
    return getUserFavourites(token)
      .then(favourites => {
        dispatch({
          type: SET_FAVOURITE_STONKS,
          stonkIds: favourites.stonks
        })
        return null
      })
      .catch(() => dispatch({
        type: SET_FAVOURITE_STONKS,
        stonkIds: null
      }))
  }
}
