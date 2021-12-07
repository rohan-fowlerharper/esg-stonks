import React, { useState } from 'react'
import { AiOutlineStar, AiFillStar } from 'react-icons/ai'
import { addUserStonks } from '../apis/stonks'

function FavouriteStonkButton ({ stockSymbol }) {
  const [isFavourite, setIsFavourite] = useState(false)

  function handleClick () {
    setIsFavourite(true)
    return null
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
