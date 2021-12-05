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

  function handleClick () {
    if (isActive) {
      dispatch(removeActiveStonk(stockSymbol))
    } else {
      dispatch(addActiveStonk(stockSymbol))
    }
  }

  const sharedProps = {
    role: 'active-stonk-toggle',
    rounded: 'full',
    size: 'xs',
    onClick: handleClick
  }

  return (
    <>
      {isActive ? (
        <IconButton
          colorScheme='green'
          icon={<CheckIcon />}
          {...sharedProps}
        />
      ) : (
        <IconButton
          colorScheme={isFull ? 'red' : 'green'}
          variant='outline'
          isDisabled={isFull}
          icon={<AddIcon />}
          {...sharedProps}
        />)}
    </>
  )
}

export default ActiveStonkButton
