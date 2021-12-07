import React from 'react'
import '@testing-library/jest-dom'
import { screen, render } from '@testing-library/react'
import { Provider } from 'react-redux'

import CompanyComparisons from '../CompanyComparisons'
import { ChakraProvider } from '@chakra-ui/react'

const stonks = [
  {
    companyName: 'Pfizer Inc.',
    environmentGrade: 'A',
    environmentLevel: 'High',
    environmentScore: 510,
    esgId: 5604,
    exchangeSymbol: 'NYSE',
    governanceGrade: 'BB',
    governanceLevel: 'Medium',
    governanceScore: 305,
    id: 6,
    lastProcessingDate: '01-12-2021',
    socialGrade: 'BB',
    socialLevel: 'Medium',
    socialScore: 300,
    stockSymbol: 'PFE',
    totalGrade: 'BBB',
    totalLevel: 'High',
    totalScore: 1115
  },
  {
    companyName: 'Tesla, Inc.',
    environmentGrade: 'A',
    environmentLevel: 'High',
    environmentScore: 580,
    esgId: 7009,
    exchangeSymbol: 'NASDAQ',
    governanceGrade: 'CCC',
    governanceLevel: 'Low',
    governanceScore: 155,
    id: 5,
    lastProcessingDate: '03-11-2021',
    socialGrade: 'CC',
    socialLevel: 'Low',
    socialScore: 146,
    stockSymbol: 'TSLA',
    totalGrade: 'BB',
    totalLevel: 'Medium',
    totalScore: 881
  }
]

const fakeStore = {
  getState: () => ({ stonks }),
  dispatch: jest.fn(),
  subscribe: jest.fn()
}

const activeStonks = [
  'PFE',
  'TSLA'
]

describe('<CompanyComparisons />', () => {
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

  it('renders information from two companies', () => {
    render(
      <ChakraProvider>
        <Provider store={fakeStore}>
          <CompanyComparisons activeStonks={activeStonks} stonks={stonks} />
        </Provider>
      </ChakraProvider>
    )
    const tableCaptions = screen.getAllByRole('table')
    const companyLogo = screen.getAllByRole('img')
    const headings = screen.getAllByRole('heading')
    expect(tableCaptions[0]).toHaveTextContent('Last Processing Date: 01-12-2021')
    expect(tableCaptions[1]).toHaveTextContent('Last Processing Date: 03-11-2021')
    expect(companyLogo[0].src).toContain('pfe')
    expect(companyLogo[1].src).toContain('tsla')
    expect(headings[0]).toHaveTextContent('PFE')
    expect(headings[1]).toHaveTextContent('TSLA')
  })
})
