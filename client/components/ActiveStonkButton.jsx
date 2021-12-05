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

  const sharedProps = {
    rounded: 'full',
    size: 'xs',
    onClick: handleClick
  }

  // I would extract the shared props (rounded, size, onClick) in to a var and avoid some duplication. eg. <IconButton {...sharedProps} colorScheme="... etc />

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
