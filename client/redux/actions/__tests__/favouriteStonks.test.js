import { addFavouriteStonk, removeFavouriteStonk, fetchUserFavourites } from '../favouriteStonks'
import { addUserFavourite, removeUserFavourite, getUserFavourites } from '../../../apis/stonks'

jest.mock('../../../apis/stonks')

addUserFavourite.mockImplementation(() => Promise.resolve(null))
removeUserFavourite.mockImplementation(() => Promise.resolve())
getUserFavourites.mockImplementation(() => Promise.resolve({
  user: 'auth0|619abd1de3a44d00699e917d',
  stonks: [6, 2, 3, 4]
}))

const stonkId = 1
const token = 'token'

describe('addFavouriteStonk', () => {
  it('should add favourite stonks', () => {
    const dispatch = jest.fn()
    return addFavouriteStonk(stonkId, token)(dispatch)
      .then(() => {
        expect(dispatch.mock.calls[0][0]).toEqual({ stonkId: 1, type: 'ADD_FAVOURITE_STONK' })
        return null
      })
  })
})

describe('removeFavouriteStonk', () => {
  it('should dispatch stonkId to the api and delete a stonk from favourites', () => {
    const dispatch = jest.fn()
    return removeFavouriteStonk(stonkId, token)(dispatch)
      .then(() => {
        expect(dispatch).toHaveBeenCalledWith({ stonkId: 1, type: 'REMOVE_FAVOURITE_STONK' })
        expect(removeUserFavourite).toHaveBeenCalledWith(1, 'token')
        return null
      })
  })
})

describe('fetchUserFavourites', () => {
  it('should dispatch token to the api and fetch user favourites', () => {
    const dispatch = jest.fn()
    return fetchUserFavourites(token)(dispatch)
      .then(() => {
        expect(dispatch).toHaveBeenCalledWith({ stonkIds: [6, 2, 3, 4], type: 'SET_FAVOURITE_STONKS' })
        expect(getUserFavourites).toHaveBeenCalledWith(token)
        return null
      })
  })
})
