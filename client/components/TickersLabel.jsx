import React from 'react'
import { HStack, Heading, Text, useColorModeValue } from '@chakra-ui/react'

const TickersLabel = ({ stockSymbol, exchangeSymbol }) => {
  const grayResponsive = useColorModeValue('gray.600', 'gray.400')

  return (
    <HStack justifyContent='flex-start' spacing={1} color={grayResponsive} mb={2}>
      <Heading
        as='h5'
        fontSize={['sm', '0.9rem', 'md']}
        fontWeight='semibold'
        lineHeight='tight'
      >
        {stockSymbol}
      </Heading>
      <Text>|</Text>
      <Heading
        as='h5'
        fontSize={['sm', '0.9rem', 'md']}
        fontWeight='semibold'
        lineHeight='tight'
      >
        {exchangeSymbol}
      </Heading>
    </HStack>
  )
}

export default TickersLabel
