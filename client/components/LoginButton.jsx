import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { Button } from '@chakra-ui/react'

const LoginButton = (styleProps) => {
  const { loginWithRedirect } = useAuth0()
  return <Button onClick={() => loginWithRedirect()} {...styleProps}>Log in</Button>
}

export default LoginButton
