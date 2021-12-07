import React from 'react'
import { Container } from '@chakra-ui/react'
import Footer from '../components/Footer'

const RegularLayout = ({ children }) => {
  return (
    <>
      <Container position='relative' maxW='container.xl' minH='100vh' px={[2, null, 4]}>
        {children}

      </Container>
      <Footer mt={48} />
    </>
  )
}

export default RegularLayout
