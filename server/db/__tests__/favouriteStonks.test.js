const knex = require('knex')
const config = require('../knexfile').test
const testDb = knex(config)
const db = require('../favouriteStonks')

beforeAll(() => {
  return testDb.migrate.latest()
})

beforeEach(() => {
  return testDb.seed.run()
})

describe('getUsersFavouriteStonks', () => {
  it('returns an array of the users favourite stonks', () => {
    return db.getUsersFavouriteStonks('auth0 | 1234', testDb)
      .then(stonks => {
        console.log(stonks)
        expect(stonks).toEqual({
          companyName: 'Algonquin Power & Utilities Corp.',
          stockSymbol: 'AQN'
        })
        return null
      })
  })
})
