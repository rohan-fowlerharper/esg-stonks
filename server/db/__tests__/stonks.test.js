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
        expect(stonks.length).toBe(2)
        expect(stonks[0].company_name).toBe('Algonquin Power & Utilities Corp.')
      })
  })
})

describe('getStonkBySymbol', () => {
  it('returns a stonk by its stock symbol', () => {
    expect.assertions(3)
    return db.getStonkBySymbol('FB', testDb)
      .then(stonk => {
        expect(stonk.stock_symbol).toBe('FB')
        expect(stonk.company_name).toBe('Facebook, Inc.')
        expect(stonk.esg_id).toBe(2664)
      })
  })
})

describe('getStonkByName', () => {
  it('returns a stonk by its company name', () => {
    expect.assertions(3)
    return db.getStonkByName('Algonquin Power & Utilities Corp.', testDb)
      .then(stonk => {
        expect(stonk.stock_symbol).toBe('AQN')
        expect(stonk.company_name).toBe('Algonquin Power & Utilities Corp.')
        expect(stonk.esg_id).toBe(11119)
      })
  })
})
