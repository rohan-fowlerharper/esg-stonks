import React from 'react'
import '@testing-library/jest-dom'
import { screen, render, fireEvent } from '@testing-library/react'
import { Provider } from 'react-redux'

import SearchBar from '../SearchBar'

const stonk = {
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

const fakeStore = {
  getState: () => ({ stonk }),
  dispatch: jest.fn(),
  subscribe: jest.fn()
}

describe('<SearchBar />', () => {
  it('input value empty by default', () => {
    render(
      <Provider store={fakeStore}>
        <SearchBar />
      </Provider>
    )
    const searchBar = screen.getByPlaceholderText('Symbol... (e.g. AAPL)')
    expect(searchBar.value).toBe('')
  })
  it('correct input value on search', () => {
    render(
      <Provider store={fakeStore}>
        <SearchBar searchTerm={'fb'} />
      </Provider>
    )
    const searchBar = screen.getByPlaceholderText('Symbol... (e.g. AAPL)')
    fireEvent.change(searchBar, { target: { value: 'fb' } })
    expect(searchBar.value).toBe('fb')
  })
})
