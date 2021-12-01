const connection = require('./connection')
const allQueryFields = require('../util/db-helper')

function getStonks (db = connection) {
  return db('stonks')
    .select(allQueryFields)
}

function getStonkByName (companyName, db = connection) {
  return db('stonks')
    .select(allQueryFields)
    .where('companyName', 'like', `%${companyName}%`)
    .first()
}

function getStonkBySymbol (stockSymbol, db = connection) {
  return db('stonks')
    .select(allQueryFields)
    .where({ stockSymbol })
    .first()
}

module.exports = {
  getStonks,
  getStonkByName,
  getStonkBySymbol
}
