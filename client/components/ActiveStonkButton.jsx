import React from 'react'
import { AddIcon } from '@chakra-ui/icons'
import { IconButton } from '@chakra-ui/react'

function ActiveStonkButton () {
  function handleClick (event) {
    console.log('clicked')
    console.log(event)
  }

  return (
    <IconButton
      colorScheme='green'
      rounded='full'
      size='xs'
      icon={<AddIcon />}
      onClick={handleClick}
    />
  )
}

export default ActiveStonkButton
