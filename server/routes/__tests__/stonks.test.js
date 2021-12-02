const request = require('supertest')
const { fetchGoalsByStockSymbol } = require('../../util/goals')
const server = require('../../server')
const db = require('../../db/stonks')

jest.mock('../../db/stonks')
jest.mock('../../util/goals')

describe('GET /api/v1/stonks/name/:name', () => {
  const fakeStonks = [{
    id: 1,
    stockSymbol: 'FB',
    companyName: 'Facebook'
  },
  {
    id: 2,
    stockSymbol: 'GOOG',
    companyName: 'Google'
  }]

  it('calls db.getStonksByName', () => {
    db.getStonksByName.mockResolvedValue([fakeStonks[0]])
    return request(server)
      .get('/api/v1/stonks/name/facebook')
      .expect(200)
      .then(() => {
        expect(db.getStonksByName).toHaveBeenCalled()
        return null
      })
  })

  it('returns a stonk from database that matches given name', () => {
    db.getStonksByName.mockResolvedValue([fakeStonks[0]])
    return request(server)
      .get('/api/v1/stonks/name/facebook')
      .expect(200)
      .then(res => {
        expect(res.body[0]).toEqual(fakeStonks[0])
        return null
      })
  })
})

describe('GET /api/v1/stonks/symbol/:symbol', () => {
  const fakeStonks = [{
    id: 1,
    stockSymbol: 'FB',
    companyName: 'Facebook'
  },
  {
    id: 2,
    stockSymbol: 'GOOG',
    companyName: 'Google'
  }]

  it('calls db.getStonkBySymbol', () => {
    db.getStonkBySymbol.mockResolvedValue(fakeStonks[0])
    return request(server)
      .get('/api/v1/stonks/symbol/FB')
      .expect(200)
      .then(() => {
        expect(db.getStonkBySymbol).toHaveBeenCalled()
        return null
      })
  })

  it('returns a stonk from database that matches given symbol', () => {
    db.getStonkBySymbol.mockResolvedValue(fakeStonks[0])
    return request(server)
      .get('/api/v1/stonks/symbol/FB')
      .expect(200)
      .then(res => {
        expect(res.body).toEqual(fakeStonks[0])
        return null
      })
  })
})

describe('GET /api/v1/stonks', () => {
  const fakeStonks = [{
    id: 1,
    stockSymbol: 'FB',
    companyName: 'Facebook'
  },
  {
    id: 2,
    stockSymbol: 'GOOG',
    companyName: 'Google'
  }]
  beforeAll(() => {
    db.getStonks.mockResolvedValue(fakeStonks)
  })

  it('calls db.getStonks', () => {
    return request(server)
      .get('/api/v1/stonks')
      .expect(200)
      .then(() => {
        expect(db.getStonks).toHaveBeenCalled()
        return null
      })
  })

  it('returns all stonks from database', () => {
    return request(server)
      .get('/api/v1/stonks')
      .expect(200)
      .then(res => {
        expect(res.body).toEqual(fakeStonks)
        return null
      })
  })
})

describe('GET /api/v1/stonks/goals/:symbol', () => {
  const fakeGoals = [{
    timestamp: '2021-11-14T01:27:44Z',
    score: 5,
    sasb: 'Physical Impacts of Climate Change - SASB',
    sdg: 'Climate Action - U.N. SDG'
  }]
  const fakeSymbol = 'ABC'
  beforeAll(() => {
    fetchGoalsByStockSymbol.mockResolvedValue(fakeGoals)
  })

  it('calls fetchGoalsByStockSymbol', () => {
    return request(server)
      .get(`/api/v1/stonks/goals/${fakeSymbol}`)
      .expect(200)
      .then(() => {
        expect(fetchGoalsByStockSymbol).toHaveBeenCalled()
        return null
      })
  })

  it('returns goals for given symbol', () => {
    return request(server)
      .get(`/api/v1/stonks/goals/${fakeSymbol}`)
      .expect(200)
      .then(res => {
        expect(res.body).toEqual(fakeGoals)
        return null
      })
  })

  it('throws error when stock symbol is invalid', () => {
    const err = new Error('Invalid stock symbol')
    fetchGoalsByStockSymbol.mockRejectedValue(err)
    console.log = jest.fn()
    return request(server)
      .get('/api/v1/stonks/goals/INVALID')
      .expect(500)
      .then(res => {
        expect(res.text).toEqual('There was an error')
        expect(console.log).toHaveBeenCalledWith(err)
        return null
      })
  })
})

describe('when database does not work', () => {
  test('returns 500', () => {
    console.log = jest.fn()
    expect.assertions(2)
    const err = new Error('no worky')
    db.getStonks.mockImplementation(() => Promise.reject(err))
    return request(server)
      .get('/api/v1/stonks')
      .then(res => {
        expect(res.status).toBe(500)
        expect(console.log).toHaveBeenCalledWith(err)
        return null
      })
  })
})
