import React from 'react'
import { Text, useColorModeValue, HStack } from '@chakra-ui/react'

const Rating = ({ label, rating }) => {
  return (
    <HStack justifyContent='space-between'>
      <Text
        fontWeight='semibold'
        color={useColorModeValue('gray.600', 'gray.400')}
        fontSize={['md', 'lg', null]}
      >
        {label}:
      </Text>
      <Text
        fontWeight='semibold'
        color={useColorModeValue('gray.600', 'gray.400')}
        fontSize={['md', 'lg', null]}
      >
        {rating}
      </Text>
    </HStack>

  )
}

export default Rating
