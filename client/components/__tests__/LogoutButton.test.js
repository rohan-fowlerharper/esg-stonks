import '@testing-library/jest-dom'
import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import LogoutButton from '../LogoutButton'
import { useAuth0 } from '@auth0/auth0-react'

jest.mock('@auth0/auth0-react')

describe('<LogoutButton />', () => {
  beforeEach(() => {
    useAuth0.mockReturnValue({
      logout: jest.fn()
    })
  })
  it('should render the logout button', () => {
    const { getByRole } = render(<LogoutButton />)
    expect(getByRole('logout-button')).toBeInTheDocument()
  })

  it('should render the logout button with the correct text', () => {
    const { getByRole } = render(<LogoutButton />)
    expect(getByRole('logout-button')).toHaveTextContent(/Log Out/i)
  })

  it('should call the logout function when the button is clicked', () => {
    const { getByRole } = render(<LogoutButton />)
    fireEvent.click(getByRole('logout-button'))
    expect(useAuth0().logout).toHaveBeenCalled()
    expect(useAuth0().logout).toHaveBeenCalledWith({ returnTo: window.location.origin })
  })
})
