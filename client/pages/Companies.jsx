import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchStonks } from '../redux/actions/stonks'
// import { useAuth0 } from '@auth0/auth0-react'
import { Heading, Text, Grid, useColorModeValue } from '@chakra-ui/react'

import CompanyGridItem from '../components/CompanyGridItem'
import CompanyPie from '../components/CompanyPie'
import CompanyInfoCard from '../components/CompanyInfoCard'

import RegularLayout from '../layouts/RegularLayout'

function Companies () {
  const dispatch = useDispatch()
  const stonks = useSelector(state => state.stonks)
  const activeStonks = useSelector(state => state.activeStonks)
  console.log(activeStonks)
  const isFull = activeStonks?.every(el => el !== null)
  // const { isAuthenticated, user } = useAuth0()
  // const [stonk, setStonk] = useState([])
  // const [isFilled, setisFilled] = useState(false)

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
      {stonks[0] && (
        <div
          style={{
            height: '500px',
            width: '500px'
          }}>
          <CompanyPie stonk={stonks[1]} />
        </div>
      )}
      <SimpleGrid columns={[1, null, 2]} gap={10} width={'75%'}>
        {/* // if active stonks is full then render the div */}
        {isFull && (
          <div
            style={{
              height: '500px',
              width: '500px'
            }}>

            {/* If stockSymbol within stonks matches with the stockSymbol within activeStonks then render the component */}

            {stonks.map(stonk => (
              stonk.stockSymbol === activeStonks[0] &&
              stonk.stockSymbol === activeStonks[1] &&
              ((
                <CompanyInfoCard key={stonk.id} stonk={stonk} />
              ))))}
          </div>
        )}
      </SimpleGrid>
    </RegularLayout>
  )
}

export default Companies
