import React from 'react'
import { Container } from '@chakra-ui/react'

const RegularLayout = ({ children }) => {
  return (
    <>
      <Container position='relative' maxW='container.xl' minH='100vh' px={[2, null, 4]}>
        {children}

      </Container>
    </>
  )
}

export default RegularLayout
