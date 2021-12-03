import React from 'react'
import { AddIcon, CheckIcon } from '@chakra-ui/icons'
import { IconButton } from '@chakra-ui/react'

import { useSelector, useDispatch } from 'react-redux'
import { addActiveStonk, removeActiveStonk } from '../redux/actions/activeStonks'

function ActiveStonkButton ({ stockSymbol }) {
  const dispatch = useDispatch()

  const activeStonks = useSelector(state => state.activeStonks)
  const isActive = activeStonks?.includes(stockSymbol)
  const isFull = activeStonks?.every(el => el !== null)
  // const isFull = false

  function handleClick () {
    if (isActive) {
      dispatch(removeActiveStonk(stockSymbol))
    } else {
      dispatch(addActiveStonk(stockSymbol))
    }
  }

  return (
    <>
      {isActive ? (
        <IconButton
          colorScheme='green'
          rounded='full'
          size='xs'
          icon={<CheckIcon />}
          onClick={handleClick}/>
      ) : (
        <IconButton
          colorScheme={isFull ? 'red' : 'green'}
          variant='outline'
          rounded='full'
          size='xs'
          isDisabled={isFull}
          icon={<AddIcon />}
          onClick={handleClick}
        />)}
    </>
  )
}

export default ActiveStonkButton
