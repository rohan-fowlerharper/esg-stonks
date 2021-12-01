const connection = require('./connection')
const allQueryFields = require('../util/db-helper')

function getStonks (db = connection) {
  return db('stonks')
    .select(allQueryFields)
}

function getStonksByName (companyName, db = connection) {
  return db('stonks')
    .select(allQueryFields)
    .where('companyName', 'like', `%${companyName}%`)
}

function getStonkBySymbol (stockSymbol, db = connection) {
  return db('stonks')
    .select(allQueryFields)
    .whereRaw('LOWER(stockSymbol) LIKE ?', stockSymbol)
    .first()
}

module.exports = {
  getStonks,
  getStonksByName,
  getStonkBySymbol
}
