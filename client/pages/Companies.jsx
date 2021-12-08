import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchStonks } from '../redux/actions/stonks'
import { Heading, Text, Grid, useColorModeValue, Box, Center } from '@chakra-ui/react'

import CompanyGridItem from '../components/CompanyGridItem'
import CompanyComparisons from '../components/CompanyComparisons'
import SearchBar from '../components/SearchBar'
import InfoCardModal from '../components/InfoCardModal'

import RegularLayout from '../layouts/RegularLayout'

function Companies () {
  const dispatch = useDispatch()
  const { stonks, activeStonks } = useSelector(state => state)
  const isFull = activeStonks?.every(el => el !== null)
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    (async () => {
      try {
        dispatch(fetchStonks())
      } catch (err) {
        console.error(err)
      }
    })()
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
          <Center>
            <InfoCardModal />
          </Center>
          <br/>
          <CompanyComparisons activeStonks={activeStonks} stonks={stonks} />
        </Box>
      ) : (
        <Center mt={12}>
          <Heading as='h1' fontSize='2xl' fontWeight='bold'>Your comparison will appear here.</Heading>
        </Center>
      )}
    </RegularLayout>
  )
}

export default Companies
