const knex = require('knex')
const config = require('../knexfile').test
const testDb = knex(config)
const db = require('../../db/stonks')

beforeAll(() => {
  return testDb.migrate.latest()
})

beforeEach(() => {
  return testDb.seed.run()
})

describe('getStonks', () => {
  it('returns all stonks within database', () => {
    expect.assertions(2)
    return db.getStonks(testDb)
      .then(stonks => {
        console.log(stonks)
        expect(stonks).toHaveLength(2)
        expect(stonks[0].companyName).toBe('Algonquin Power & Utilities Corp.')
        return null
      })
  })
})

describe('getStonkBySymbol', () => {
  it('returns a stonk by its stock symbol', () => {
    expect.assertions(3)
    return db.getStonkBySymbol('FB', testDb)
      .then(stonk => {
        expect(stonk.stockSymbol).toBe('FB')
        expect(stonk.companyName).toBe('Facebook, Inc.')
        expect(stonk.esgId).toBe(2664)
        return null
      })
  })
})

describe('getStonkByName', () => {
  const companyName = 'Algonquin Power & Utilities Corp.'
  it('returns a stonk by its company name', () => {
    expect.assertions(3)
    return db.getStonkByName(companyName, testDb)
      .then(stonk => {
        expect(stonk.stockSymbol).toBe('AQN')
        expect(stonk.companyName).toBe('Algonquin Power & Utilities Corp.')
        expect(stonk.esgId).toBe(11119)
        return null
      })
  })
})
