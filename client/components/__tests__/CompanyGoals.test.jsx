/* eslint-disable jest/no-mocks-import */
import '@testing-library/jest-dom'
import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'

import { getGoals } from '../../apis/stonks'
import CompanyGoals from '../CompanyGoals'

jest.mock('../../apis/stonks')
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
  it('should render the goals of the respective company', () => {
    render(<CompanyGoals stockSymbol={'AAPL'} />)
  })
})
