import React from 'react'
import {
  Flex,
  Box,
  HStack
} from '@chakra-ui/react'
import { useAuth0 } from '@auth0/auth0-react'
import LoginButton from '../LoginButton'
import LogoutButton from '../LogoutButton'

function Navigation () {
  const { isAuthenticated } = useAuth0()
  const links = ['Home', 'ESG scores']

  return (
    <>
      <Box bg={'gray.100'} px={6}>
        <Flex as="nav" w="100%" h={20} alignItems={'center'} justifyContent={'space-between'}>
          <HStack spacing={8} alignItems={'center'}>
            <Box>
              <img src="/images/esg-stonks_logo.png" />
            </Box>
            <HStack
              as={'nav'}
              spacing={10}
              display={{ base: 'none', md: 'flex' }}>
              {links.map((link) => (
                <Box key={link}>{link}</Box>
              ))}
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
