import React from 'react'
import { Container } from '@chakra-ui/react'

const RegularLayout = ({ children }) => {
  return (
    <Container maxW='container.xl' px={[2, null, 4]}>
      {children}
    </Container>
  )
}

export default RegularLayout
