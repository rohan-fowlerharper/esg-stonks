import React from 'react'
import '@testing-library/jest-dom'
import { screen, render } from '@testing-library/react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'

import Navigation from '../Navigation'

const stonk = {
  id: 1,
  esgId: 11119,
  companyName: 'Algonquin Power & Utilities Corp.',
  exchangeSymbol: 'TSE',
  stockSymbol: 'AQN',
  environmentGrade: 'AA',
  environmentLevel: 'Excellent',
  socialGrade: 'BB',
  socialLevel: 'Medium',
  gorvernanceGrade: 'BB',
  governanceLevel: 'Medium',
  totalGrade: 'A',
  totalLevel: 'High',
  lastProcessingDate: '04-11-2021',
  environmentScore: 671,
  socialScore: 341,
  governanceScore: 300,
  totalScore: 1312
}

const fakeStore = {
  getState: () => ({ stonk }),
  dispatch: jest.fn(),
  subscribe: jest.fn()
}

describe('<Navigation />', () => {
  beforeEach(() => {
    render(<Provider store={fakeStore}><Router><Navigation /></Router></Provider>)
  })
  it('nav bar links render to correct location', () => {
    const links = screen.getAllByRole('link')
    expect(links[0]).toHaveAttribute('href', '/')
    expect(links[2]).toHaveAttribute('href', '/companies')
  })
})
