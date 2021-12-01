import React from 'react'
import {
  Flex,
  Box,
  HStack,
  Link,
  useColorModeValue
} from '@chakra-ui/react'
import { useAuth0 } from '@auth0/auth0-react'
import LoginButton from './LoginButton'
import LogoutButton from './LogoutButton'
import { Link as RouteLink } from 'react-router-dom'

function Navigation () {
  const { isAuthenticated } = useAuth0()

  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray700')} px={6}>
        <Flex as="nav" w="100%" h={20} alignItems={'center'} justifyContent={'space-between'}>
          <HStack spacing={8} alignItems={'center'}>
            <Box>
              <img src="/images/esg-stonks_logo.png" />
            </Box>
            <HStack
              as={'nav'}
              spacing={10}
              display={{ base: 'none', md: 'flex' }}>
              <Box><Link as={RouteLink} to='/'>Home</Link></Box>
              <Box><Link as={RouteLink} to='/companies'>ESG scores</Link></Box>
            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
            {isAuthenticated ? (
              <LogoutButton bg="#95BF8F" color="white" />
            ) : (
              <LoginButton bg="#95BF8F" color="white" />
            )}
          </Flex>
        </Flex>
      </Box>
    </>
  )
}

export default Navigation
