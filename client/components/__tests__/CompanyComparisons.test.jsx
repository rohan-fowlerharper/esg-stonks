import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'

import CompanyComparisons from '../CompanyComparisons'
import CompanyGoals from '../CompanyGoals'
import CompanyPie from '../CompanyPie'
import CompanyInfoCard from '../CompanyInfoCard'
import CompanyRadar from '../CompanyRadar'

jest.mock('../CompanyGoals')
jest.mock('../CompanyPie')
jest.mock('../CompanyInfoCard')
jest.mock('../CompanyRadar')

CompanyGoals.mockImplementation(() => <div>CompanyGoals</div>)
CompanyPie.mockImplementation(() => <div>CompanyPie</div>)
CompanyInfoCard.mockImplementation(() => <div>CompanyInfoCard</div>)
CompanyRadar.mockImplementation(() => <div>CompanyRadar</div>)

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
  beforeEach(() => {
    render(
      <Provider store={fakeStore}>
        <CompanyComparisons activeStonks={activeStonks} stonks={stonks} />
      </Provider>
    )
  })
  it('renders information from two companies', () => {
    const companyInfoCard = screen.getAllByText('CompanyInfoCard')
    const companyPie = screen.getAllByText('CompanyPie')
    const companyGoals = screen.getAllByText('CompanyGoals')
    expect(companyInfoCard[0]).toHaveTextContent('CompanyInfoCard')
    expect(companyInfoCard).toHaveLength(2)
    expect(companyPie[0]).toHaveTextContent('CompanyPie')
    expect(companyPie).toHaveLength(2)
    expect(companyGoals[0]).toHaveTextContent('CompanyGoals')
    expect(companyGoals).toHaveLength(2)
  })
  it('CompanyRadar appears once on the page', () => {
    const companyRadar = screen.getByText('CompanyRadar')
    expect(companyRadar).toHaveTextContent('CompanyRadar')
  })
})
