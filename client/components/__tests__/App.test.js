import React from 'react'
import { render, screen } from '@testing-library/react'

import App from '../App'

describe.skip('App', () => {
  it('works', () => {
    render(<App />)
    expect(screen.getByText('Stonks')).toBeInTheDocument()
  })
})
