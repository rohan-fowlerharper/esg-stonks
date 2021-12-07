import React, { useEffect, useState } from 'react'
import { VStack, Image, Text, Button, Link, Grid } from '@chakra-ui/react'
import { useAuth0, withAuthenticationRequired } from '@auth0/auth0-react'

import { getUserStonks } from '../apis/stonks'

// import EditProfile from '../components/EditProfile'
import StonkInformation from '../components/StonkInformation'
import RegularLayout from '../layouts/RegularLayout'

function UserProfile () {
  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0()
  const [userStonks, setUserStonks] = useState([])

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
          <VStack mt={10}>
            <Image src={user.picture} alt="Profile" />
            <Text> Welcome, {user.name}!</Text>
            <Button colorScheme="teal" onClick={() => console.log('clicked')}>
              <Link href="/edit-profile">
              Edit Profile
              </Link>
            </Button>
          </VStack>

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
              <StonkInformation stonk={stonk} key={stonk.id} />
            ))}
          </Grid>
        </>
      ) : <p>Please log in to view profile</p>}
    </RegularLayout>

  )
}

export default withAuthenticationRequired(UserProfile)
