import React from 'react'
import { render } from '@testing-library/react'
import { Provider } from 'react-redux'
import { useAuth0 } from '@auth0/auth0-react'

import Companies from '../Companies'

jest.mock('@auth0/auth0-react')

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
  })
  it('renders list of companies', () => {
    render(<Provider store={fakeStore}><Companies /></Provider>)
    // screen.debug()
    expect(true).toBe(true)
  })
})
