// React
import React, { useEffect } from 'react'

// Hooks
import { useDispatch, useSelector } from 'react-redux'
import { useAuth0 } from '@auth0/auth0-react'

// Redux
import { fetchStonks } from '../redux/actions/stonks'

// Components
import { Heading } from '@chakra-ui/react'
import LoginButton from './LoginButton'
import LogoutButton from './LogoutButton'

function App () {
  const dispatch = useDispatch()
  const stonks = useSelector(state => state.stonks)

  useEffect(() => {
    dispatch(fetchStonks())
  }, [])

  const { isAuthenticated, user, loginWithRedirect, logout } = useAuth0()
  console.log(isAuthenticated, user, loginWithRedirect, logout)
  return (
    <>
      <header className="header">
        <Heading as='h1'>Welcome to ESG stonks</Heading>
        <LoginButton colorScheme='teal' />
        <LogoutButton />
      </header>
      <section className="main">

        {stonks.map(stonk => {
          return <div key={stonk.esg_id}>{stonk.company_name}</div>
        })}

      </section>
    </>
  )
}

export default App
