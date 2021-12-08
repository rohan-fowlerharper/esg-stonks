import React from 'react'
import { Box } from '@chakra-ui/react'

const RatingBar = ({ rating, max, level, ...rest }) => {
  const value = Math.floor((rating / max) * 100)
  const color = _getColor(level)
  return (
    <Box role='rating-bar' w='full' height='10px' bg='gray.700' rounded='full' {...rest}>
      <Box width={`${value}%`} height='10px' bg={color} rounded='full' />
    </Box>
  )
}

function _getColor (level) {
  switch (level) {
    case 'Low':
      return 'red.500'
    case 'Medium':
      return 'orange.300'
    case 'High':
      return 'green.300'
    case 'Excellent':
      return 'green.500'
    default:
      return 'yellow'
  }
}

export default RatingBar
