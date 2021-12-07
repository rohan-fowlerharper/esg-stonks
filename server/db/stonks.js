const connection = require('./connection')
const allQueryFields = require('../util/db-helper')

function getStonks (db = connection) {
  return db('stonks')
    .select('id')
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

async function getUserStonks (id, db = connection) {
  const response = await db('favourite_stonks')
    .join('stonks', 'favourite_stonks.stonk_id', 'stonks.id')
    .where('favourite_stonks.user_id', id)
    .select('stonk_id as id')
    .select(allQueryFields)
  return response
}

module.exports = {
  getUserStonks,
  getStonks,
  getStonksByName,
  getStonkBySymbol
}
