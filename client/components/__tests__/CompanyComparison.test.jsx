import '@testing-library/jest-dom'
import React from 'react'
import { render } from '@testing-library/react'
import { Provider } from 'react-redux'
import CompanyComparison from '../CompanyComparison'

jest.mock('../CompanyGoals', () => {
  const MockCompanyGoals = require('../__mocks__/CompanyGoals').default
  return MockCompanyGoals('CompanyGoals')
})

jest.mock('../CompanyInfoCard', () => {
  const MockCompanyInfoCard = require('../__mocks__/CompanyInfoCard').default
  return MockCompanyInfoCard('CompanyInfoCard')
})

jest.mock('../CompanyPie', () => {
  const MockCompanyPieComponent = require('../__mocks__/CompanyPie').default
  return MockCompanyPieComponent('CompanyPie')
})

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

describe('<CompanyComparison', () => {
  beforeAll(() => {
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: jest.fn().mockImplementation(query => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(), // Deprecated
        removeListener: jest.fn(), // Deprecated
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn()
      }))
    })
  })

  const fakeStore = {
    getState: () => ({ stonk }),
    dispatch: jest.fn(),
    subscribe: jest.fn()
  }
  test('testing', () => {
    const { container } = render(<Provider store={fakeStore}><CompanyComparison stonk={stonk} /></Provider>)
    expect(container).toBeInTheDocument()
    // TODO: Clean up warnings when taking snapshot
  })
})
