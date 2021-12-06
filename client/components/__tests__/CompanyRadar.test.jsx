import React from 'react'
import '@testing-library/jest-dom'
import { screen, render } from '@testing-library/react'

import CompanyRadar from '../CompanyRadar'

const activeStonk1 = {
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
}

const activeStonk2 = {
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

describe('<CompanyRadar />', () => {
  it('renders correct data for graph', () => {
    render(<CompanyRadar stonk1={activeStonk1} stonk2={activeStonk2} />)
    screen.debug()
  })
})
