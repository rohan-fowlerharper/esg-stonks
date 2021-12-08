import React from 'react'
import { AiOutlineStar, AiFillStar } from 'react-icons/ai'
import { useAuth0 } from '@auth0/auth0-react'
import { addUserFavourite, removeUserFavourite } from '../apis/stonks'
import { useSelector } from 'react-redux'

function FavouriteStonkButton ({ stonkId }) {
  const { getAccessTokenSilently } = useAuth0()
  const isFavourite = useSelector(state => state.favouriteStonks.includes(stonkId))

  async function handleClick () {
    const token = await getAccessTokenSilently()
    if (isFavourite) {
      await removeUserFavourite(stonkId, token)
    } else {
      await addUserFavourite(stonkId, token)
    }
  }

  return (
    <>
      {isFavourite ? (
        <AiFillStar onClick={handleClick} />
      ) : (
        <AiOutlineStar onClick={handleClick} />
      )}
    </>
  )
}

export default FavouriteStonkButton
