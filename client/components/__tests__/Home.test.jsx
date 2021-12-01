import React from 'react'
import { render, screen } from '@testing-library/react'

import Home from '../pages/Home'

describe('<Home />', () => {
  it('renders stuff', () => {
    render(<Home />)
    const heading = screen.getByRole('heading')
    expect(heading).toHaveTextContent('Welcome to ESG stonks')
    expect(true).toBe(true)
  })
})
