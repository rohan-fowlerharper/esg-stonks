import nock from 'nock'
import { getStonks, getGoals, getUserStonks, addUserStonks } from '../stonks'

describe('getStonks', () => {
  const stonks = [
    {
      id: 1,
      esgId: 11119,
      companyName: 'Algonquin Power & Utilities Corp.',
      exchangeSymbol: 'TSE',
      stockSymbol: 'AQN'
    },
    {
      id: 2,
      esgId: 2664,
      companyName: 'Facebook, Inc.',
      exchangeSymbol: 'NASDAQ',
      stockSymbol: 'FB'
    }
  ]
  const scope = nock('http://localhost')
    .get('/api/v1/stonks')
    .reply(200, stonks)

  it('returns an array of all stonks', () => {
    return getStonks()
      .then(response => {
        scope.done()
        expect(response).toEqual(stonks)
        expect(response).toHaveLength(2)
        return null
      })
  })
})

describe('getGoals', () => {
  const goals = [
    {
      company_name: 'Apple Inc.',
      esg_id: 502,
      exchange_symbol: 'NASDAQ',
      stock_symbol: 'AAPL',
      goals: [
        {
          timestamp: '2021-11-14T05:48:48Z',
          score: 5,
          sasb: 'Business Ethics - SASB',
          sdg: 'Responsible Consumption & Production - U.N. SDG'
        },
        {
          timestamp: '2021-11-14T01:27:44Z',
          score: 5,
          sasb: 'Physical Impacts of Climate Change - SASB',
          sdg: 'Climate Action - U.N. SDG'
        }
      ]
    }
  ]
  const scope = nock('http://localhost')
    .get('/api/v1/stonks/goals/aapl')
    .reply(200, goals)

  it('returns the goal of the company being queried', () => {
    return getGoals('aapl')
      .then(res => {
        scope.done()
        expect(res).toEqual(goals)
        expect(res[0].goals).toHaveLength(2)
        expect(res[0].goals[0].score).toEqual(5)
        return null
      })
  })
})

describe('getUserStonks', () => {
  const token = '12345'
  const userStonks = [
    {
      esgId: 2994,
      companyName: 'GameStop Corp.',
      exchangeSymbol: 'NYSE',
      stockSymbol: 'GME',
      environmentGrade: 'BB',
      environmentLevel: 'Medium',
      socialGrade: 'B',
      socialLevel: 'Medium',
      governanceGrade: 'BB',
      governanceLevel: 'Medium',
      totalGrade: 'BB',
      totalLevel: 'Medium',
      lastProcessingDate: '30-11-2021',
      environmentScore: 335,
      socialScore: 226,
      governanceScore: 300,
      totalScore: 861
    },
    {
      esgId: 7009,
      companyName: 'Tesla, Inc.',
      exchangeSymbol: 'NASDAQ',
      stockSymbol: 'TSLA',
      environmentGrade: 'A',
      environmentLevel: 'High',
      socialGrade: 'CC',
      socialLevel: 'Low',
      governanceGrade: 'CCC',
      governanceLevel: 'Low',
      totalGrade: 'BB',
      totalLevel: 'Medium',
      lastProcessingDate: '03-11-2021',
      environmentScore: 580,
      socialScore: 146,
      governanceScore: 155,
      totalScore: 881
    }
  ]
  const scope = nock('http://localhost')
    .get('/api/v1/stonks/user/stonks')
    .reply(200, userStonks)

  it('returns the user stonks', () => {
    return getUserStonks(token)
      .then(res => {
        scope.done()
        expect(res).toEqual(userStonks)
        expect(res).toHaveLength(2)
        return null
      })
  })
})

describe('addUserStonks', () => {
  const userStonks = [
    {
      esgId: 2994,
      companyName: 'GameStop Corp.',
      exchangeSymbol: 'NYSE',
      stockSymbol: 'GME',
      environmentGrade: 'BB',
      environmentLevel: 'Medium',
      socialGrade: 'B',
      socialLevel: 'Medium',
      governanceGrade: 'BB',
      governanceLevel: 'Medium',
      totalGrade: 'BB',
      totalLevel: 'Medium',
      lastProcessingDate: '30-11-2021',
      environmentScore: 335,
      socialScore: 226,
      governanceScore: 300,
      totalScore: 861
    },
    {
      esgId: 7009,
      companyName: 'Tesla, Inc.',
      exchangeSymbol: 'NASDAQ',
      stockSymbol: 'TSLA',
      environmentGrade: 'A',
      environmentLevel: 'High',
      socialGrade: 'CC',
      socialLevel: 'Low',
      governanceGrade: 'CCC',
      governanceLevel: 'Low',
      totalGrade: 'BB',
      totalLevel: 'Medium',
      lastProcessingDate: '03-11-2021',
      environmentScore: 580,
      socialScore: 146,
      governanceScore: 155,
      totalScore: 881
    }
  ]
  const scope = nock('http://localhost')
    .post('/api/v1/stonks/user/stonks')
    .reply(200, userStonks)

  it('adds the user stonks', () => {
    return addUserStonks(userStonks)
      .then(res => {
        scope.done()
        expect(res).toEqual(userStonks)
        expect(res).toHaveLength(2)
        return null
      })
  })
})
