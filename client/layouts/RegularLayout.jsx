import React from 'react'
import { Container, VStack } from '@chakra-ui/react'

const RegularLayout = ({ children }) => {
  return (
    <Container maxW='container.xl'>
      <VStack w='100%'>
        {children}
      </VStack>
    </Container>
  )
}

export default RegularLayout
