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

function getUserFavourites (id, db = connection) {
  return db('favourite_stonks')
    .where('favourite_stonks.user_id', id)
    .select('stonk_id as stonkId')
    .then(ids => {
      return {
        user: id,
        stonks: ids.map(id => id.stonkId)
      }
    })
}

function addUserFavourite (userId, stonksId, db = connection) {
  return db('favourite_stonks')
    .insert({
      user_id: userId,
      stonk_id: stonksId
    })
}

function removeUserFavourite (id, stonksId, db = connection) {
  return db('favourite_stonks')
    .where({
      user_id: id,
      stonk_id: stonksId
    })
    .del()
}
module.exports = {
  getUserStonks,
  getStonks,
  getStonksByName,
  getStonkBySymbol,
  addUserFavourite,
  getUserFavourites,
  removeUserFavourite
}
