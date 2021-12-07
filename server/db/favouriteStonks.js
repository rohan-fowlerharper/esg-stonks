const connection = require('./connection')

function getUsersFavouriteStonks (id, db = connection) {
  console.log(id)
  return db('favourite_stonks')
    .join('stonks', 'favourite_stonks.stonk_id', 'stonks.id')
    .where('favourite_stonks.user_id', id)
    .select('company_name as companyName', 'stock_symbol as stockSymbol')
    .first()
}

module.exports = { getUsersFavouriteStonks }
