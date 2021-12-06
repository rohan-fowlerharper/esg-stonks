import React from 'react'
import '@testing-library/jest-dom'
import { screen, render, fireEvent } from '@testing-library/react'

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

describe('<CompanyAccordion />', () => {
  beforeEach(() => {
    render(<CompanyAccordion stonk={stonk} />)
  })
  it('renders correct ESG total grade', () => {
    const textDiv = screen.getByLabelText('total-grade')
    expect(textDiv).toHaveTextContent('A')
  })
  it('check that accordion button is closed by default', () => {
    const button = screen.getByRole('button', 'button', { expanded: false })
    expect(button).toHaveAttribute('aria-expanded', 'false')
  })
  it('check that accordion button expands when clicked', () => {
    const button = screen.getByRole('button', { expanded: false })
    fireEvent.click(button)
    expect(button).toHaveAttribute('aria-expanded', 'true')
  })
})
