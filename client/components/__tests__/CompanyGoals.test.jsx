/* eslint-disable jest/no-mocks-import */
import '@testing-library/jest-dom'
import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import { ChakraProvider } from '@chakra-ui/react'
import { getGoals } from '../../apis/stonks'
import CompanyGoals from '../CompanyGoals'

jest.mock('../../apis/stonks')

describe('<CompanyGoals />', () => {
  getGoals.mockImplementation(() => Promise.resolve([
    { sasb: 'goal1', sdg: 'goal1' },
    { sasb: 'goal2', sdg: 'goal2' },
    { sasb: 'goal3', sdg: 'goal3' }
  ]))
  it('should render the goals of the respective company', async () => {
    render(<ChakraProvider><CompanyGoals stockSymbol='AAPL' /></ChakraProvider>)
    await waitFor(() => {
      return getGoals.mock.calls.length > 0
    })
    expect(screen.getAllByRole('list')[0]).toBeInTheDocument()
    expect(screen.getAllByRole('listitem')).toHaveLength(3)
    expect(screen.getAllByRole('listitem')[0]).toHaveTextContent('goal1')
  })
})
