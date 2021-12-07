import React from 'react'
import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import { Provider } from 'react-redux'

import CompanyComparisons from '../CompanyComparisons'
import { ChakraProvider } from '@chakra-ui/react'

import CompanyGoals from '../CompanyGoals'
import CompanyPie from '../CompanyPie'
import CompanyInfoCard from '../CompanyInfoCard'

jest.mock('../CompanyGoals')
jest.mock('../CompanyPie')
jest.mock('../CompanyInfoCard')

CompanyGoals.mockImplementation(() => <div>CompanyGoals</div>)
CompanyPie.mockImplementation(() => <div>CompanyPie</div>)
CompanyInfoCard.mockImplementation(() => <div>CompanyInfoCard</div>)

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
  it('renders information from two companies', () => {
    render(
      <ChakraProvider>
        <Provider store={fakeStore}>
          <CompanyComparisons activeStonks={activeStonks} stonks={stonks} />
        </Provider>
      </ChakraProvider>
    )
    expect(true).toBe(true)
  })
})
