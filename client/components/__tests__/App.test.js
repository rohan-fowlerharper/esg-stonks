import React from 'react'
import { render, screen } from '@testing-library/react'

import App from '../App'

describe('App', () => {
  it('works', () => {
    render(<App />)
    expect(screen.getByText('Welcome to ESG stonks')).toBeInTheDocument()
  })
})
