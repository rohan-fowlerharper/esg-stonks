import React from 'react'
import '@testing-library/jest-dom'
import { screen, render } from '@testing-library/react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'

import CompanyAccordion from '../CompanyAccordion'

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

describe('<CompanyAccordion />', () => {
  beforeEach(() => {
    render(<Provider store={fakeStore}><Router><CompanyAccordion stonk={stonk} /></Router></Provider>)
  })
  it('renders correct ESG total grade', () => {
    // const textDiv = screen.getAllByRole('div')
    const textDiv = screen.getByLabelText('total-grade')
    expect(textDiv).toHaveTextContent('A')
  })
  it('can open accordion button to see contents', () => {
    const button = screen.getByRole('button')
    expect(button).toBeVisible()
  })
})
