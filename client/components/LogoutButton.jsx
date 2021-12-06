import React from 'react'

import { useAuth0 } from '@auth0/auth0-react'

import { Button } from '@chakra-ui/react'

const LogoutButton = (styleProps) => {
  const { logout } = useAuth0()

  return (
    <Button
      role='logout-button'
      onClick={() => logout({ returnTo: window.location.origin })}
      {...styleProps}
    >
      Log out
    </Button>
  )
}

export default LogoutButton
