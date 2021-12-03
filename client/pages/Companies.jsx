import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchStonks } from '../redux/actions/stonks'
// import { useAuth0 } from '@auth0/auth0-react'
import { Heading, Text, SimpleGrid, GridItem } from '@chakra-ui/react'

import Company from '../components/Company'
import CompanyPie from '../components/CompanyPie'
import CompanyInfocard from '../components/CompanyInfoCard'

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
      <Text fontSize='xl'>Select 2 companies to compare ESG scores</Text>
      <SimpleGrid columns={[2, null, 3]} gap={6} width={'100%'}>
        {stonks.map(stonk => (
          <GridItem key={stonk.id} w={['300px', '250px', '300px']}>
            <Company stonk={stonk}/>
          </GridItem>
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
      {stonks[0] && (
        <div
          style={{
            height: '500px',
            width: '500px'
          }}>
          <CompanyPie stonk={stonks[1]} />
        </div>
      )}
      <CompanyInfocard stonk={stonks} />
    </RegularLayout>
  )
}

export default Companies
