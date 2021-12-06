/* eslint-disable jest/no-mocks-import */
import '@testing-library/jest-dom'
import React, { useLayoutEffect } from 'react'
import { render, screen, fireEvent } from '@testing-library/react'

import { getGoals } from '../../apis/stonks'
import CompanyGoals from '../CompanyGoals'
import { act } from 'react-dom/test-utils'

jest.mock('../../apis/stonks')

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useEffect: jest.fn()
}))
// const MockCompanyGoals = ({ stockSymbol }) => {
//   return (
//     <Provider store={fakeStore}>
//       <CompanyGoals stockSymbol={stockSymbol} />
//     </Provider>
//   )
// }
describe('<CompanyGoals />', () => {
  getGoals.mockImplementation(() => Promise.resolve([{ sasb: 'goal1', sdg: 'goal1' }, { sasb: 'goal2', sdg: 'goal2' }, { sasb: 'goal3', sdg: 'goal3' }])
  )
  // useEffect.mockImplentation(React.useLayoutEffect)
  // React.useEffect.mockImplementation(f => f())
  it('should render the goals of the respective company', async () => {
    render(<CompanyGoals stockSymbol='AAPL' />)
    // screen.debug()
    expect(screen.getAllByRole('list')[0]).toBeInTheDocument()
    // TODO finish with useEffect properly mocked
  })
})
