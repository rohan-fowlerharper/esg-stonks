import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchStonks } from '../redux/actions/stonks'
// import { useAuth0 } from '@auth0/auth0-react'
import { Heading, Box, Text, SimpleGrid } from '@chakra-ui/react'

import Company from '../components/Company'

import RegularLayout from '../layouts/RegularLayout'

function Companies () {
  const dispatch = useDispatch()
  const stonks = useSelector(state => state.stonks)
  // const { isAuthenticated, user } = useAuth0()

  // TODO: ensture to pass token
  useEffect(() => {
    dispatch(fetchStonks())
  }, [])

  return (
    <RegularLayout>
      <Heading as='h1' size='2xl' m={10}>Company Listings</Heading>

      <Box>
        <Text fontSize='xl'>Select 2 companies to compare ESG scores</Text>
      </Box>
      <SimpleGrid columns={4} spacing={10}>
        {stonks.map(stonk => (
          <Company key={stonk.id} stonk={stonk}/>
        ))}
      </SimpleGrid>
      {/* <Box>
        {isAuthenticated ? (
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
      )}
      </Box> */}
    </RegularLayout>
  )
}

export default Companies
