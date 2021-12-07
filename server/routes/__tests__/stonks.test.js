const request = require('supertest')
const { fetchGoalsByStockSymbol, fetchScoresByStockSymbol } = require('../../util/goals')
const server = require('../../server')
const checkJwt = require('../../util/auth')
const db = require('../../db/stonks')

jest.mock('../../db/stonks')
jest.mock('../../util/goals')
jest.mock('../../util/auth')

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

describe('GET /api/v1/stonks/external/:stockSymbol', () => {
  const fakeStonk = {
    esg_id: 502,
    company_name: 'Apple Inc.',
    exchange_symbol: 'NASDAQ',
    stock_symbol: 'AAPL',
    environment_grade: 'BB',
    environment_level: 'Medium',
    social_grade: 'B',
    social_level: 'Medium',
    governance_grade: 'B',
    governance_level: 'Medium',
    total_grade: 'BB',
    total_level: 'Medium',
    last_processing_date: '14-11-2021',
    environment_score: 360,
    social_score: 275,
    governance_score: 260,
    total: 895
  }
  beforeAll(() => {
    fetchScoresByStockSymbol.mockResolvedValue(fakeStonk)
  })
  it('calls fetchStonkBySymbol', () => {
    return request(server)
      .get('/api/v1/stonks/external/AAPL')
      .expect(200)
      .then(() => {
        expect(fetchScoresByStockSymbol).toHaveBeenCalled()
        return null
      })
  })

  it('returns stonk for given symbol', () => {
    return request(server)
      .get('/api/v1/stonks/external/AAPL')
      .expect(200)
      .then(res => {
        expect(res.body).toEqual(fakeStonk)
        return null
      })
  })

  it('throws error when symbol is invalid', () => {
    const err = new Error('Invalid stock symbol')
    fetchScoresByStockSymbol.mockRejectedValue(err)
    console.log = jest.fn()
    return request(server)
      .get('/api/v1/stonks/external/INVALID')
      .expect(500)
      .then(res => {
        expect(res.text).toEqual('There was an error')
        expect(console.log).toHaveBeenCalledWith(err)
        return null
      })
  })
})

describe('ERROR handling', () => {
  it('returns 500 when getStonks fails', () => {
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

  it('returns 500 when getStonkBySymbol fails', () => {
    console.log = jest.fn()
    expect.assertions(2)
    const err = new Error('no worky')
    db.getStonkBySymbol.mockImplementation(() => Promise.reject(err))
    return request(server)
      .get('/api/v1/stonks/symbol/FB')
      .then(res => {
        expect(res.status).toBe(500)
        expect(console.log).toHaveBeenCalledWith(err)
        return null
      })
  })

  it('returns 500 when getStonkByName fails', () => {
    console.log = jest.fn()
    expect.assertions(2)
    const err = new Error('no worky')
    db.getStonksByName.mockImplementation(() => Promise.reject(err))
    return request(server)
      .get('/api/v1/stonks/name/facebook')
      .then(res => {
        expect(res.status).toBe(500)
        expect(console.log).toHaveBeenCalledWith(err)
        return null
      })
  })
})

describe('getUserStonks', () => {
  checkJwt.mockImplementation((req, res, next) => {
    req.user = {
      sub: 'auth0|12345'
    }
    next()
  })

  const fakeStonks = [{
    esgId: 1,
    stockSymbol: 'FB',
    companyName: 'Facebook'
  },
  {
    esgId: 2,
    stockSymbol: 'GOOG',
    companyName: 'Google'
  }]

  db.getUserStonks.mockResolvedValue(fakeStonks)

  it('calls checkJwt', () => {
    return request(server)
      .get('/api/v1/stonks/user/stonks')
      .expect(200)
      .then(() => {
        expect(checkJwt).toHaveBeenCalled()
        return null
      })
  })

  it('calls getUserStonks', () => {
    return request(server)
      .get('/api/v1/stonks/user/stonks')
      .expect(200)
      .then(() => {
        expect(db.getUserStonks).toHaveBeenCalledWith('auth0|12345')
        return null
      })
  })

  it('returns stonks when called', () => {
    return request(server)
      .get('/api/v1/stonks/user/stonks')
      .expect(200)
      .then(res => {
        console.log(res)
        expect(res.body).toEqual(fakeStonks)
        return null
      })
  })
})
