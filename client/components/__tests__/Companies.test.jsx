import '@testing-library/jest-dom/extend-expect'
import React from 'react'
import { render, screen } from '@testing-library/react'

import Companies from '../pages/Companies'

describe.skip('<Companies />', () => {
  it('renders list of companies', () => {
    render(<Companies />)
    screen.debug()
  })
})
