import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchStonks } from '../redux/actions/stonks'
// import { useAuth0 } from '@auth0/auth0-react'
import { Heading, Center, Box, Text } from '@chakra-ui/react'

import Company from './Company'

function Companies () {
  const dispatch = useDispatch()
  const stonks = useSelector(state => state.stonks)
  // const { isAuthenticated, user } = useAuth0()

  // TODO: ensture to pass token
  useEffect(() => {
    dispatch(fetchStonks())
  }, [])

  return (
    <>
      <Center>
        <Heading as='h1' size='2xl' m={10}>Company Listings</Heading>
      </Center>
      <Box>
        <Center>
          <Text fontSize='xl'>Select 2 companies to compare ESG scores</Text>
        </Center>
      </Box>
      <Box>
        {stonks.map(stonk => (
          <Center key={stonk.id}>
            <Text><Company stonk={stonk}/></Text>
          </Center>
        ))}
      </Box>
      <Box>
        {/* {isAuthenticated ? (
        <>
          <h2>Welcome {user.nickname}</h2>
          <p>Your email is {user.email}</p>
          <img src={user.picture} alt={`thumbnail of ${user.nickname}`} />
          <p>Here is some restricted content: </p>
          {stonks.map(stonk => (
            <p key={stonk.id}>{stonk.company_name}</p>
          ))}
        </>
      ) : (
        <p>Please log in to see your profile and restricted content</p>
      )} */}
      </Box>
    </>
  )
}

export default Companies
