import React, { useState } from 'react'
import { AddIcon, CheckIcon } from '@chakra-ui/icons'
import { IconButton } from '@chakra-ui/react'

function ActiveStonkButton () {
  const [activeStonk, setActiveStonk] = useState(false)

  function handleClick () {
    setActiveStonk(!activeStonk)
    console.log('clicked')
  }

  return (
    <>
      {activeStonk ? <IconButton colorScheme='green' rounded='full' size='xs'icon={<CheckIcon />} onClick={handleClick}/> : <IconButton
        variant='outline'
        rounded='full'
        size='xs'
        icon={<AddIcon />}
        onClick={handleClick}
      />}
    </>
  )
}

export default ActiveStonkButton
