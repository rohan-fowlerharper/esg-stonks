import React from 'react'
import { Flex } from '@chakra-ui/react'
// import { Link } from 'react-router-dom'

function Navigation () {
  return (
    <>
      <Flex as="nav" w="100%">
        <img src="/images/esg-stonks_logo.png" />
        {/* <Link as={}to='/'>Home</Link>
        <Link to={'/companies'}>ESG</Link> */}
      </Flex>
    </>
  )
}

export default Navigation
