import React, { useEffect, useState } from 'react'
import { VStack, Center, Box, Image, Text, Button, Link, Grid, Flex, Heading } from '@chakra-ui/react'
import { useAuth0, withAuthenticationRequired } from '@auth0/auth0-react'

import { getUserStonks } from '../apis/stonks'

// import EditProfile from '../components/EditProfile'
import UserCompanyTile from '../components/UserCompanyTile'
import RegularLayout from '../layouts/RegularLayout'
import Rating from '../components/Rating'
import RatingBar from '../components/RatingBar'

function UserProfile () {
  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0()
  const [userStonks, setUserStonks] = useState([])

  const avgRatings = {
    total: _avgRating(userStonks, 'totalScore'),
    environment: _avgRating(userStonks, 'environmentScore'),
    social: _avgRating(userStonks, 'socialScore'),
    governance: _avgRating(userStonks, 'governanceScore')
  }

  const avgLevels = {
    total: _avgLevel(avgRatings.total, 3000),
    environment: _avgLevel(avgRatings.environment, 1000),
    social: _avgLevel(avgRatings.social, 1000),
    governance: _avgLevel(avgRatings.governance, 1000)
  }

  const avgGrades = {
    total: _avgGrade(avgRatings.total, 3000),
    environment: _avgGrade(avgRatings.environment, 1000),
    social: _avgGrade(avgRatings.social, 1000),
    governance: _avgGrade(avgRatings.governance, 1000)
  }

  useEffect(() => {
    (async () => {
      try {
        const token = await getAccessTokenSilently()
        const response = await getUserStonks(token)
        setUserStonks(response)
      } catch (err) {
        console.error(err)
      }
    })()
  }, [getAccessTokenSilently])

  return (
    <RegularLayout>
      {isAuthenticated ? (
        <>
          <Center mb={4}>
            <Heading as='h3'>Your Portfolio:</Heading>
          </Center>

          <Flex direction={['column', 'row']} justifyContent='space-evenly'>
            <VStack>
              <Image src={user.picture} alt="Profile" />
              <Text> Welcome, {user.name}!</Text>
              <Button colorScheme="teal" onClick={() => console.log('clicked')}>
                <Link href="/edit-profile">
              Edit Profile
                </Link>
              </Button>
            </VStack>
            {userStonks && userStonks.length > 0 && (
              <Box maxW='md' mx='2' minW='2xs'>

                <Rating
                  rating={avgGrades.total}
                  label='Overall'
                />
                <RatingBar
                  rating={avgRatings.total}
                  max={3000}
                  mb={4}
                  level={avgLevels.total}
                />

                <Rating
                  rating={avgGrades.environment}
                  label='Environment'
                />
                <RatingBar
                  rating={avgRatings.environment}
                  max={1000}
                  mb={2}
                  level={avgLevels.environment}
                />

                <Rating
                  label='Social'
                  rating={avgGrades.social}
                />
                <RatingBar
                  rating={avgRatings.social}
                  max={1000}
                  mb={2}
                  level={avgLevels.social}
                />

                <Rating
                  label='Governance'
                  rating={avgGrades.governance}
                />
                <RatingBar
                  rating={avgRatings.governance}
                  max={1000}
                  mb={2}
                  level={avgLevels.governance}
                />
              </Box>)}
          </Flex>

          <Grid
            templateColumns={[
              'repeat(2, minmax(150px, 1fr))',
              'repeat(3, minmax(150px, 1fr))',
              'repeat(4, minmax(150px, 1fr))'
            ]}
            gap={4}
            w='full'
            mt={6}
          >
            {userStonks.map(stonk => (
              <UserCompanyTile stonk={stonk} key={stonk.id} />
            ))}
          </Grid>
        </>
      ) : <p>Please log in to view profile</p>}
    </RegularLayout>
  )
}

export default withAuthenticationRequired(UserProfile)

function _avgRating (stonks, key) {
  return stonks.reduce((acc, stonk) => acc + stonk[key], 0) / stonks.length
}

function _avgLevel (rating, max) {
  const value = Math.floor(rating / max * 100)
  if (value < 20) return 'Low'
  if (value < 40) return 'Medium'
  if (value < 60) return 'High'
  else return 'Excellent'
}

function _avgGrade (rating, max) {
  const value = rating / max * 100
  if (value < 2.5) return 'D'
  if (value < 5) return 'DD'
  if (value < 7.5) return 'DDD'
  if (value < 10) return 'C'
  if (value < 15) return 'CC'
  if (value < 20) return 'CCC'
  if (value < 30) return 'B'
  if (value < 40) return 'BB'
  if (value < 50) return 'BBB'
  if (value < 60) return 'A'
  if (value < 90) return 'AA'
  else return 'AAA'
}
