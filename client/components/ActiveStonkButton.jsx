import React, { useState } from 'react'
import { AddIcon } from '@chakra-ui/icons'
import { IconButton } from '@chakra-ui/react'

function ActiveStonkButton () {
  const [activeStonk, setActiveStonk] = useState([])

  function handleClick () {
    console.log('clicked')
  }

  return (
    <IconButton
      variant='outline'
      rounded='full'
      size='xs'
      icon={<AddIcon />}
      onClick={handleClick}
    />
    // <IconButton
    //   colorScheme='green'
    //   rounded='full'
    //   size='xs'
    //   icon={<AddIcon />}
    //   onClick={handleClick}
    // />
  )
}

export default ActiveStonkButton
