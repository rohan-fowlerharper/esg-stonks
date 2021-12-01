// React
import React, { useEffect } from 'react'

// Hooks
import { useDispatch, useSelector } from 'react-redux'
import { useAuth0 } from '@auth0/auth0-react'

// Redux
import { fetchStonks } from '../redux/actions/stonks'

// Components
import { Heading, Flex, Box } from '@chakra-ui/react'
import LoginButton from './LoginButton'
import LogoutButton from './LogoutButton'

function App () {
  const dispatch = useDispatch()
  const stonks = useSelector(state => state.stonks)
  console.log(stonks)

  useEffect(() => {
    // TODO: ensture to pass token
    dispatch(fetchStonks())
  }, [])

  const { isAuthenticated, user } = useAuth0()

  console.log(isAuthenticated, user)
  return (
    <>
      <header className="header">
        <Flex justify='space-between'>
          <Box mr={4}>
            <Heading as="h1" size="lg">
              Stonks
            </Heading>
          </Box>
          {isAuthenticated ? (
            <LogoutButton colorScheme='teal' />
          ) : (
            <LoginButton colorScheme='teal' />
          )}
        </Flex>
      </header>
      <section className="main">
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
      </section>
    </>
  )
}

export default App
