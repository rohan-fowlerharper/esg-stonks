import '@testing-library/jest-dom'
import React from 'react'
import { render, screen } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'
import Footer from '../Footer'

// Tests for Footer component
describe('Footer', () => {
  test('should render Footer component with correct text', () => {
    render(
      <ChakraProvider>
        <Router>
          <Footer />
        </Router>
      </ChakraProvider>

    )
    expect(screen.getByText(/Chakra Templates/i)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Home' })).toBeInTheDocument()
  })
  test('should render Footer component with correct links', () => {
    render(
      <Router>
        <Footer />
      </Router>
    )
    expect(screen.getByRole('link', { name: 'Home' })).toHaveAttribute(
      'href',
      '/'
    )
    expect(screen.getByRole('link', { name: 'About' })).toHaveAttribute(
      'href',
      '#'
    )
    expect(screen.getByRole('link', { name: 'Contact' })).toHaveAttribute(
      'href',
      '#'
    )
  })
})
