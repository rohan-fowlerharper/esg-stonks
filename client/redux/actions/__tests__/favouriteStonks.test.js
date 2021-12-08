import { addFavouriteStonk, removeFavouriteStonk, fetchUserFavourites } from '../favouriteStonks'

describe('addFavouriteStonk', () => {
  const stonkId = 1
  it('should add a favourite stonk to the users favourites', () => {
    const action = addFavouriteStonk(stonkId)
    expect(action).toEqual({ type: 'ADD_FAVOURITE_STONK', stonkId })
  })
})
