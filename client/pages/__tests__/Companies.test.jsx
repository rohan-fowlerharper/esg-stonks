import React from 'react'
import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import { useAuth0 } from '@auth0/auth0-react'

import Companies from '../Companies'
import CompanyGridItem from '../../components/CompanyGridItem'
import CompanyComparisons from '../../components/CompanyComparisons'
import SearchBar from '../../components/SearchBar'
import InfoCardModal from '../../components/InfoCardModal'

jest.mock('@auth0/auth0-react')
jest.mock('../../components/CompanyGridItem')
jest.mock('../../components/CompanyComparisons')
jest.mock('../../components/SearchBar')
jest.mock('../../components/InfoCardModal')

CompanyGridItem.mockImplementation(() =>
  <div>CompanyGridItem</div>)
CompanyComparisons.mockImplementation(() =>
  <div>CompanyComparisons</div>)
SearchBar.mockImplementation(() =>
  <div>SearchBar</div>)
InfoCardModal.mockImplementation(() =>
  <div>InfoCardModal</div>)

const stonks = [
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

describe('<Companies />', () => {
  const fakeStore = {
    getState: () => ({ stonks }),
    dispatch: jest.fn(),
    subscribe: jest.fn()
  }
  beforeEach(() => {
    useAuth0.mockReturnValue({
      getAccessTokenSilently: jest.fn()
    })
    render(<Provider store={fakeStore}><Companies /></Provider>)
  })
  it('renders correct number of companies', () => {
    const list = screen.getAllByRole('list')
    expect(list).toHaveLength(6)
  })
  it('SearchBar component appears on page', () => {
    const searchBar = screen.getByText('SearchBar')
    expect(searchBar).toHaveTextContent('SearchBar')
  })
  it('displays correct headings', () => {
    const headings = screen.getAllByRole('heading')
    expect(headings).toHaveLength(2)
    expect(headings[0]).toHaveTextContent('Company Listings')
    expect(headings[1]).toHaveTextContent('Your comparison will appear here.')
  })
})
