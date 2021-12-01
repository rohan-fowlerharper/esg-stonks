import React from 'react'
import { render, screen } from '@testing-library/react'

import App from '../../components/pages/App'

describe.skip('App', () => {
  it('works', () => {
    render(<App />)
    expect(screen.getByText('Stonks')).toBeInTheDocument()
  })
})
