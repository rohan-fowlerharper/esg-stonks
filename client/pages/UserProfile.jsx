import React from 'react'
import { Container, Image, Text, Button, Link } from '@chakra-ui/react'
import { useAuth0 } from '@auth0/auth0-react'

// import EditProfile from '../components/EditProfile'

function UserProfile () {
  const { user, isAuthenticated } = useAuth0()
  console.log({ user })

  return (
    <Container maxW={'5xl'} centerContent>
      {isAuthenticated && (
        <>
          <Image src={user.picture} alt="Profile" />
          <Text> Welcome, {user.name}!</Text>
          <Button variantColor="teal" onClick={() => console.log('clicked')}>
            <Link href="/edit-profile">
              Edit Profile
            </Link>
          </Button>
          {!isAuthenticated && <p>Please log in to view profile</p>}
        </>
      )}
    </Container>

  )
}

export default UserProfile
