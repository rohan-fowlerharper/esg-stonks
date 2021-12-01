import request from 'supertest'
const server = require('../../server')
const db = require('../../db/stonks')

jest.mock('../../db/stonks')

describe.skip('GET /api/v1/stonks/name/:name', () => {
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
    db.getStonksByName.mockResolvedValue(fakeStonks)
  })

  it('calls db.getStonksByName', () => {
    return request(server)
      .get('/api/v1/stonks/name/facebook')
      .expect(200)
      .then(() => {
        expect(db.getStonksByName).toHaveBeenCalled()
        return null
      })
  })

  it('returns a stonk from database that matches given name', () => {
    return request(server)
      .get('/api/v1/stonks/name/facebook')
      .expect(200)
      .then(res => {
        console.log(res.body)
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

describe('when database does not work', () => {
  test('returns 500', () => {
    expect.assertions(1)
    const err = new Error('no worky')
    db.getStonks.mockImplementation(() => Promise.reject(err))
    return request(server)
      .get('/api/v1/stonks')
      .then(res => {
        expect(res.status).toBe(500)
        return null
      })
  })
})
