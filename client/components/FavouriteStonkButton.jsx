import React, { useState } from 'react'
import { AiOutlineStar, AiFillStar } from 'react-icons/ai'
import { addUserStonks } from '../apis/stonks'

function FavouriteStonkButton ({ stockSymbol }) {
  const [isFavourite, setIsFavourite] = useState(false)

  function handleClick () {
    addUserStonks(stockSymbol)
      .then(() => {
        setIsFavourite(true)
        return null
      })
      .catch(() => {
        setIsFavourite(false)
      })
  }

  return (
    <>
      { isFavourite
        ? <AiFillStar onClick={handleClick} />
        : <AiOutlineStar onClick={handleClick} />
      }
    </>
  )
}

export default FavouriteStonkButton
