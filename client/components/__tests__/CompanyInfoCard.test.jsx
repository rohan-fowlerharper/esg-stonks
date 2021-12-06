import '@testing-library/jest-dom'
import React from 'react'
import { render, screen } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { ChakraProvider } from '@chakra-ui/react'
import CompanyInfoCard from '../CompanyInfoCard'

// jest.mock('@chakra-ui/react', () => ({
//   ...jest.requireActual('@chakra-ui/react'),
//   useBreakpointValue: jest.fn().mockReturnValueOnce(<>
//     <thead key={1}>
//       <tr>
//         <th>title</th>
//       </tr>

//     </thead>

//     <tbody key={2}>
//       <tr>
//         <td><b>value</b></td>
//       </tr>
//     </tbody>
//   </>)
// }))

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

describe('<CompanyInfoCard />', () => {
  beforeAll(() => {
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: jest.fn().mockImplementation(query => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(), // Deprecated
        removeListener: jest.fn(), // Deprecated
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn()
      }))
    })
    // useBreakpointValue.mockReturnValue('base')
  })

  const fakeStore = {
    getState: () => ({ stonk }),
    dispatch: jest.fn(),
    subscribe: jest.fn()
  }
  it('displays a table of information for a given company', () => {
    render(
      <ChakraProvider>
        <Provider store={fakeStore}>
          <Router><CompanyInfoCard stonk={stonk} /></Router>
        </Provider>
      </ChakraProvider>)
    const table = screen.getByRole('table')
    expect(table).toBeInTheDocument()
    expect(table).toHaveTextContent(/Last Processing Date:/i)
  })
})
