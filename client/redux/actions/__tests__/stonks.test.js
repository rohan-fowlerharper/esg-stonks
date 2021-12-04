import { getStonks } from '../../../apis/stonks'
import { setStonks, setError, fetchStonks } from '../stonks'

jest.mock('../../../apis/stonks')

getStonks.mockImplementation(() => Promise.resolve({
  id: 1,
  esg_id: 11119,
  company_name: 'Algonquin Power & Utilities Corp.',
  exchange_symbol: 'TSE',
  stock_symbol: 'AQN',
  environment_grade: 'AA',
  environment_level: 'Excellent',
  social_grade: 'BB',
  social_level: 'Medium',
  governance_grade: 'BB',
  governance_level: 'Medium',
  total_grade: 'A',
  total_level: 'High',
  last_processing_date: '04-11-2021',
  environment_score: 671,
  social_score: 341,
  governance_score: 300,
  total: 1312
}))

describe('fetchStonks', () => {
  it('should fetch all stonks and calls setStonks', () => {
    const dispatch = jest.fn()
    return fetchStonks()(dispatch)
      .then(() => {
        expect(dispatch).toHaveBeenCalledWith({
          type: 'SET_STONKS',
          stonks: {
            id: 1,
            esg_id: 11119,
            company_name: 'Algonquin Power & Utilities Corp.',
            exchange_symbol: 'TSE',
            stock_symbol: 'AQN',
            environment_grade: 'AA',
            environment_level: 'Excellent',
            social_grade: 'BB',
            social_level: 'Medium',
            governance_grade: 'BB',
            governance_level: 'Medium',
            total_grade: 'A',
            total_level: 'High',
            last_processing_date: '04-11-2021',
            environment_score: 671,
            social_score: 341,
            governance_score: 300,
            total: 1312
          }
        })
        expect(dispatch.mock.calls[0][0].type).toBe('SET_STONKS')
        return null
      })
  })

  it('should dispatch an error if fetching stonks fails', () => {
    const dispatch = jest.fn()
    const error = new Error('Error fetching stonks')
    getStonks.mockImplementation(() => Promise.reject(error))
    return fetchStonks()(dispatch)
      .then(() => {
        expect(dispatch.mock.calls[0][0].type).toBe('SET_ERROR')
        expect(dispatch.mock.calls[0][0].message).toBe(error)
        return null
      })
  })
})

describe('setStonks', () => {
  it('sets the stonks in the store', () => {
    const action = setStonks({
      id: 1,
      esg_id: 11119,
      company_name: 'Algonquin Power & Utilities Corp.',
      exchange_symbol: 'TSE',
      stock_symbol: 'AQN',
      environment_grade: 'AA',
      environment_level: 'Excellent',
      social_grade: 'BB',
      social_level: 'Medium',
      governance_grade: 'BB',
      governance_level: 'Medium',
      total_grade: 'A',
      total_level: 'High',
      last_processing_date: '04-11-2021',
      environment_score: 671,
      social_score: 341,
      governance_score: 300,
      total: 1312
    })
    expect(action.type).toEqual('SET_STONKS')
    expect(action.stonks).toEqual({
      id: 1,
      esg_id: 11119,
      company_name: 'Algonquin Power & Utilities Corp.',
      exchange_symbol: 'TSE',
      stock_symbol: 'AQN',
      environment_grade: 'AA',
      environment_level: 'Excellent',
      social_grade: 'BB',
      social_level: 'Medium',
      governance_grade: 'BB',
      governance_level: 'Medium',
      total_grade: 'A',
      total_level: 'High',
      last_processing_date: '04-11-2021',
      environment_score: 671,
      social_score: 341,
      governance_score: 300,
      total: 1312
    })
  })
})

describe('setError', () => {
  it('catches an error when api call fails', () => {
    const action = setError('error')
    expect(action.type).toEqual('SET_ERROR')
    expect(action.message).toEqual('error')
  })
})
