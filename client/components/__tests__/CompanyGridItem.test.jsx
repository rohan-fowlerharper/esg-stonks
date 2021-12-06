import React from 'react'
import '@testing-library/jest-dom'
import { screen, render } from '@testing-library/react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'

import CompanyGridItem from '../CompanyGridItem'

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

describe('<CompanyGridItem />', () => {
  beforeEach(() => {
    render(<Provider store={fakeStore}><Router><CompanyGridItem stonk={stonk} /></Router></Provider>)
  })
  it('renders correct headings from stonk', () => {
    const headings = screen.getAllByRole('heading')
    expect(headings[0]).toHaveTextContent('Algonquin Power & Utilities Corp.')
    expect(headings[1]).toHaveTextContent('AQN')
    expect(headings[2]).toHaveTextContent('TSE')
  })
  it('renders correct logo image for stockSymbol', () => {
    const companyLogo = screen.getByRole('img')
    expect(companyLogo.src).toContain('aqn')
  })
})
