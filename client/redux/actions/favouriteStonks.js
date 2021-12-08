import { getUserFavourites, removeUserFavourite, addUserFavourite } from '../../apis/stonks'
import { ADD_FAVOURITE_STONK, REMOVE_FAVOURITE_STONK, SET_FAVOURITE_STONKS } from '../reducers/favouriteStonks'

export function addFavouriteStonk (stonkId, token) {
  return dispatch => {
    return addUserFavourite(stonkId, token)
      .then(() => {
        dispatch({
          type: ADD_FAVOURITE_STONK,
          stonkId
        })
        return null
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
        return dispatch({
          type: SET_FAVOURITE_STONKS,
          stonkIds: favourites.stonks
        })
      })
      .catch(() => dispatch({
        type: SET_FAVOURITE_STONKS,
        stonkIds: null
      }))
  }
}
