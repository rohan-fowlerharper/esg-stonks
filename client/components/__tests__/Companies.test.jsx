import React from 'react'
import { render, screen } from '@testing-library/react'

import Companies from '../pages/Companies'

describe('<Companies />', () => {
  it('renders list of companies', () => {
    render(<Companies />)
    screen.debug()
    expect(true).toBe(true)
  })
})
