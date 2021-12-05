import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchStonks } from '../redux/actions/stonks'
// import { useAuth0 } from '@auth0/auth0-react'
import { Heading, Text, Grid, useColorModeValue, Box, Center } from '@chakra-ui/react'

import CompanyGridItem from '../components/CompanyGridItem'
import CompanyComparisons from '../components/CompanyComparisons'

import RegularLayout from '../layouts/RegularLayout'

function Companies () {
  const dispatch = useDispatch()
  const stonks = useSelector(state => state.stonks)
  const activeStonks = useSelector(state => state.activeStonks)

  const isFull = activeStonks?.every(el => el !== null)
  // const { isAuthenticated, user } = useAuth0()

  // TODO: ensture to pass token
  useEffect(() => {
    dispatch(fetchStonks())
  }, [])

  return (
    <RegularLayout>
      {/* extract as page header component */}
      <Heading as='h1' size='2xl' my={[2, null, 6]}>
        Company Listings
      </Heading>
      {/* extract as page subheader component */}
      <Text mb={4} fontSize='xl' color={useColorModeValue('gray.800', 'gray.300')}>
        Select 2 companies to compare ESG scores
      </Text>
      <Grid
        templateColumns={[
          'repeat(2, minmax(150px, 1fr))',
          'repeat(3, minmax(150px, 1fr))',
          'repeat(4, minmax(150px, 1fr))'
        ]}
        gap={4}
        w='full'
      >
        {stonks.map(stonk => (
          <CompanyGridItem key={stonk.id} stonk={stonk}/>
        ))}
      </Grid>

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
      {isFull ? (
        <Box
          mt={4}
          w='full'
        >
          <CompanyComparisons activeStonks={activeStonks} stonks={stonks} />
        </Box>
      ) : (
        <Center mt={6}>
          <Heading as='h1' fontSize='2xl' fontWeight='bold'>Please select your componany blah blah</Heading>
        </Center>
      )}
    </RegularLayout>
  )
}

export default Companies
