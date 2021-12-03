import React from 'react'
import { Box } from '@chakra-ui/react'

const RatingBar = ({ rating, max, ...rest }) => {
  const value = Math.floor((rating / max) * 100)
  const color = _getColor(value)
  return (
    <Box w='full' height='10px' bg='gray.700' rounded='full' {...rest}>
      <Box width={`${value}%`} height='10px' bg={color} rounded='full' />
    </Box>

  )
}

function _getColor (value) {
  if (value <= 20) return 'red.500'
  if (value <= 40) return 'orange.300'
  if (value <= 60) return 'yellow.300'
  if (value <= 80) return 'green.300'
  if (value <= 100) return 'green.500'
  else return 'yellow'
}

export default RatingBar
