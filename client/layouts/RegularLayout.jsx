import React from 'react'
import { Container, Center, VStack } from '@chakra-ui/react'

const RegularLayout = ({ children }) => {
  return (
    <Container maxW='container.xl'>
      <Center>
        <VStack>

          {children}

        </VStack>
      </Center>

    </Container>
  )
}

export default RegularLayout
