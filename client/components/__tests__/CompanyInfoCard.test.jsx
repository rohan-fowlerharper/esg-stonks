import '@testing-library/jest-dom'
import React from 'react'
import { render, screen } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import CompanyInfoCard from '../CompanyInfoCard'

const stonk = [
  {
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
  },
  {
    id: 2,
    esgId: 2664,
    companyName: 'Facebook, Inc.',
    exchangeSymbol: 'NASDAQ',
    stockSymbol: 'FB',
    environmentGrade: 'A',
    environmentLevel: 'High',
    socialGrade: 'B',
    socialLevel: 'Medium',
    gorvernanceGrade: 'BB',
    governanceLevel: 'Medium',
    totalGrade: 'BBB',
    totalLevel: 'High',
    lastProcessingDate: '30-11-2021',
    environmentScore: 505,
    socialScore: 273,
    governanceScore: 315,
    totalScore: 1093
  }
]

describe('<CompanyInfoCard />', () => {
  const fakeStore = {
    getState: () => ({ stonk }),
    dispatch: jest.fn(),
    subscribe: jest.fn()
  }
  it('displays a table of information for a given company', () => {
    render(<Provider store={fakeStore}><Router><CompanyInfoCard stonk={stonk} /></Router></Provider>)
    const table = screen.getByRole('table')
    const rows = table.querySelectorAll('tr')
    expect(table).toBeInTheDocument()
    expect(table).toHaveTextContent(/Last Processing Date:/i)
    expect(rows).toHaveLength(22)
    expect(rows[0]).toHaveTextContent(/Company Name/i)
  })
})
