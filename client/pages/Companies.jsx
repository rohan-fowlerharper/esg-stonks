import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchStonks } from '../redux/actions/stonks'
import { useAuth0 } from '@auth0/auth0-react'
import { Heading, Text, Grid, useColorModeValue, Box, Center } from '@chakra-ui/react'

import CompanyGridItem from '../components/CompanyGridItem'
import CompanyComparisons from '../components/CompanyComparisons'
import SearchBar from '../components/SearchBar'

// I like the use of a wrapping layout
import RegularLayout from '../layouts/RegularLayout'

function Companies () {
  const dispatch = useDispatch()
  const stonks = useSelector(state => state.stonks)
  const activeStonks = useSelector(state => state.activeStonks)
  const isFull = activeStonks?.every(el => el !== null)
  const { isAuthenticated, user } = useAuth0()
  const [searchTerm, setSearchTerm] = useState('')

  // TODO: ensure to pass token
  useEffect(() => {
    dispatch(fetchStonks())
  }, [])

  useEffect(() => {
    if (searchTerm === '') return true
  }, [searchTerm])

  function filterStonks ({ stockSymbol }) {
    if (searchTerm === '') return true
    if (stockSymbol.match(new RegExp(searchTerm, 'i'))) return true
    return false
  }

  return (
    <RegularLayout>
      <Box>
        {isAuthenticated ? (
          <>
            <Link to={'/profile'}>
              <h2>Welcome {user.name}</h2>
              <p>Here is some restricted content: </p>
              {stonks.map(stonk => (
                <p key={stonk.id}>{stonk.company_name}</p>
              ))}
            </Link>
          </>
        ) : (
          <p>Please log in to see your profile and restricted content</p>

        )}
      </Box>
      {/* extract as page header component */}
      <Heading as='h1' size='2xl' my={[2, null, 6]}>
        Company Listings
      </Heading>
      {/* extract as page subheader component */}
      <Text mb={4} fontSize='xl' color={useColorModeValue('gray.800', 'gray.300')}>
        Select 2 companies to compare ESG scores
      </Text>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
      <br />
      <Grid
        templateColumns={[
          'repeat(2, minmax(150px, 1fr))',
          'repeat(3, minmax(150px, 1fr))',
          'repeat(4, minmax(150px, 1fr))'
        ]}
        gap={4}
        w='full'
      >
        {stonks.filter(filterStonks).map(stonk => (
          <CompanyGridItem key={stonk.id} stonk={stonk}/>
        ))}
      </Grid>
      {isFull ? (
        <Box
          mt={4}
          w='full'
        >
          <CompanyComparisons activeStonks={activeStonks} stonks={stonks} />
        </Box>
      ) : (
        <Center mt={6}>
          <Heading as='h1' fontSize='2xl' fontWeight='bold'>Your comparison will appear here.</Heading>
        </Center>
      )}
    </RegularLayout>
  )
}

export default Companies
