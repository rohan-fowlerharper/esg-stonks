import React from 'react'
import { Text, useColorModeValue, HStack } from '@chakra-ui/react'

const Rating = ({ label, rating }) => {
  return (
    <HStack justifyContent='space-between'>
      <Text
        fontWeight='semibold'
        color={useColorModeValue('gray.600', 'gray.400')}
        fontSize={['sm', 'md', 'lg']}
      >
        {label}:
      </Text>
      <Text
        fontWeight='semibold'
        color={useColorModeValue('gray.600', 'gray.400')}
        fontSize={['sm', 'md', 'lg']}
      >
        {rating}
      </Text>
    </HStack>

  )
}

export default Rating
