import React from 'react'
import { render, screen } from '@testing-library/react'

import Home from '../pages/Home'

describe.skip('<Home />', () => {
  it('renders stuff', () => {
    render(<Home />)
    const heading = screen.getAllByRole('heading')
    expect(heading).toHaveTextContent('Welcome to ESG stonks')
    screen.debug()
    expect(true).toBe(true)
  })
})
