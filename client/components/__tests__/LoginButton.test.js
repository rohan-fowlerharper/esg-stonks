import '@testing-library/jest-dom'
import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import LoginButton from '../LoginButton'
import { useAuth0 } from '@auth0/auth0-react'

jest.mock('@auth0/auth0-react')

describe('<LoginButton />', () => {
  beforeEach(() => {
    useAuth0.mockReturnValue({
      loginWithRedirect: jest.fn()
    })
  })
  it('should render the login button', () => {
    const { getByRole } = render(<LoginButton />)
    expect(getByRole('login-button')).toBeInTheDocument()
  })

  it('should render the login button with the correct text', () => {
    const { getByRole } = render(<LoginButton />)
    expect(getByRole('login-button')).toHaveTextContent(/Log In/i)
  })

  it('should call the login function when the button is clicked', () => {
    const { getByRole } = render(<LoginButton />)
    fireEvent.click(getByRole('login-button'))
    expect(useAuth0().loginWithRedirect).toHaveBeenCalled()
  })
})
