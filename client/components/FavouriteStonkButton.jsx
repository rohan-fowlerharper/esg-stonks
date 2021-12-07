import React, { useEffect, useState } from 'react'
import { AiOutlineStar, AiFillStar } from 'react-icons/ai'
import { useAuth0 } from '@auth0/auth0-react'
import { addUserStonks, getUserStonks } from '../apis/stonks'

function FavouriteStonkButton ({ stockSymbol }) {
  const [isFavourite, setIsFavourite] = useState(false)
  const { getAccessTokenSilently } = useAuth0()

  useEffect(() => {
    getUserStonks(getAccessTokenSilently)
      .then(({ data }) => {
        const { favourites } = data
        setIsFavourite(favourites.includes(stockSymbol))
        return null
      })
      .catch(err => console.log(err))
  })

  const handleClick = () => {
    if (isFavourite) {
      addUserStonks(stockSymbol)
    }
  }

  return (
    <>
      {/* { isFavourite
        ? <AiFillStar onClick={handleClick} />
        : <AiOutlineStar onClick={handleClick} />
      } */}
      {isFavourite && <AiFillStar onClick={handleClick} />}
      {!isFavourite && <AiOutlineStar onClick={handleClick} />}
    </>
  )
}

export default FavouriteStonkButton
