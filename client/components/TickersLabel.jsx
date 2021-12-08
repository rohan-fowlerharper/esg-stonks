import React from 'react'
import { HStack, Heading, useColorModeValue } from '@chakra-ui/react'

const TickersLabel = ({ stockSymbol, exchangeSymbol }) => {
  const grayResponsive = useColorModeValue('gray.600', 'gray.400')

  return (
    <HStack spacing={0} color={grayResponsive}>
      <Heading
        as='h5'
        fontSize={['xs', '0.9rem', 'md']}
        fontWeight='semibold'
        lineHeight='tight'
        color={grayResponsive}
      >
        {stockSymbol} | {exchangeSymbol}
      </Heading>
    </HStack>
  )
}

export default TickersLabel
