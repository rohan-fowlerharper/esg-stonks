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

function getUserStonks (id, db = connection) {
  return db('favourite_stonks')
    .join('stonks', 'favourite_stonks.stonk_id', 'stonks.id')
    .where('favourite_stonks.user_id', id)
    .select(allQueryFields)
}

function addUserStonks (id, stonksId, db = connection) {
  return db('favourite_stonks')
    .insert({
      user_id: id,
      stonk_id: stonksId
    })
    .then(() => getUserStonks(id, db))
}

module.exports = {
  getUserStonks,
  getStonks,
  getStonksByName,
  getStonkBySymbol,
  addUserStonks
}
