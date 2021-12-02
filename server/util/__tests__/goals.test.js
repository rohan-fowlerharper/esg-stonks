const nock = require('nock')
const {
  fetchGoalsByStockSymbol
} = require('../goals')

describe('fetchGoalsByStockSymbols', () => {
  it('should return the goals of a company with the given stock symbol', async () => {
    const goalsData = [
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
    const scope = nock('https://esg-environmental-social-governance-data.p.rapidapi.com')
      .get('/goals/search?q=aapl')
      .reply(200, goalsData)

    return fetchGoalsByStockSymbol('aapl')
      .then(goals => {
        scope.done()
        expect(goals).toEqual(goalsData[0].goals)
        return null
      })
  })
})
