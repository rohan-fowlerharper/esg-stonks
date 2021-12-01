import React from 'react'
import { render, screen } from '@testing-library/react'

import App from '../App'

describe('hi', () => {
  it('hello', () => {
    render(<App />)
    expect(screen.getByText('stonks')).toBeInTheDocument()
  })
})
