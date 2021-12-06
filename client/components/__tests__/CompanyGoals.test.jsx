/* eslint-disable jest/no-mocks-import */
import '@testing-library/jest-dom'
import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import { ChakraProvider } from '@chakra-ui/react'

import { getGoals } from '../../apis/stonks'
import CompanyGoals from '../CompanyGoals'

jest.mock('../../apis/stonks')

// jest.mock('react', () => ({
//   ...jest.requireActual('react'),
//   useEffect: jest.fn()
// }))
// const MockCompanyGoals = ({ stockSymbol }) => {
//   return (
//     <Provider store={fakeStore}>
//       <CompanyGoals stockSymbol={stockSymbol} />
//     </Provider>
//   )
// }
describe('<CompanyGoals />', () => {
  getGoals.mockImplementation(() => Promise.resolve([
    { sasb: 'goal1', sdg: 'goal1' },
    { sasb: 'goal2', sdg: 'goal2' },
    { sasb: 'goal3', sdg: 'goal3' }
  ]))
  // useEffect.mockImplentation(React.useLayoutEffect)
  // React.useEffect.mockImplementation(f => f())
  it('should render the goals of the respective company', async () => {
    render(<ChakraProvider><CompanyGoals stockSymbol='AAPL' /></ChakraProvider>)
    await waitFor(() => {
      console.log(getGoals.mock.calls.length)
      return getGoals.mock.calls.length > 0
    })
    console.log(getGoals.mock.calls.length)
    expect(screen.getAllByRole('list')[0]).toBeInTheDocument()
    screen.debug()
    // TODO finish with useEffect properly mocked
  })
})
