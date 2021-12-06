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
        expect(stonks).toHaveLength(6)
        expect(stonks[0].companyName).toBe('Algonquin Power & Utilities Corp.')
        return null
      })
  })
})

describe('getStonkBySymbol', () => {
  it('returns a stonk by its stock symbol', () => {
    expect.assertions(4)
    return db.getStonkBySymbol('FB', testDb)
      .then(stonk => {
        expect(stonk).toBeDefined()
        expect(stonk?.stockSymbol).toBe('FB')
        expect(stonk?.companyName).toBe('Facebook, Inc.')
        expect(stonk?.esgId).toBe(2664)
        return null
      })
  })
  it('returns nothing when no symbol exists', () => {
    expect.assertions(1)
    return db.getStonkBySymbol('NOT A SYMBOL', testDb)
      .then(stonk => {
        expect(stonk).toBeUndefined()
        return null
      })
  })
  it('returns correct stock regardless of case in params', () => {
    expect.assertions(4)
    return db.getStonkBySymbol('fb', testDb)
      .then(stonk => {
        expect(stonk).toBeDefined()
        expect(stonk?.stockSymbol).toBe('FB')
        expect(stonk?.companyName).toBe('Facebook, Inc.')
        expect(stonk?.esgId).toBe(2664)
        return null
      })
  })
})

describe('getStonksByName', () => {
  const companyName = 'Algonquin Power & Utilities Corp.'
  it('returns a stonk by its company name', () => {
    expect.assertions(3)
    return db.getStonksByName(companyName, testDb)
      .then(stonks => {
        expect(stonks[0].stockSymbol).toBe('AQN')
        expect(stonks[0].companyName).toBe('Algonquin Power & Utilities Corp.')
        expect(stonks[0].esgId).toBe(11119)
        return null
      })
  })
  it('returns nothing when no name exists', () => {
    expect.assertions(1)
    return db.getStonksByName('NOT A NAME', testDb)
      .then(stonks => {
        expect(stonks).toHaveLength(0)
        return null
      })
  })
})
