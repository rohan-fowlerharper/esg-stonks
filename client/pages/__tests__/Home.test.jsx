import React from 'react'
import { render, screen } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'

import Home from '../Home'

describe('<Home />', () => {
  it('renders stuff', () => {
    render(<Router><Home /></Router>)
    const headings = screen.getAllByRole('heading')
    expect(headings[0]).toHaveTextContent('Comparing ESG scores')
    expect(true).toBe(true)
  })
})
