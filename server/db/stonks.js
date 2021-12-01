const connection = require('./connection')

function getStonks (db = connection) {
  return db('stonks')
    .select()
}

function getStonkByName (name, db = connection) {
  return db('stonks')
    .where({ company_name: name })
    .first()
    
}

function getStonkBySymbol (symbol, db = connection) {
  return db('stonks')
    .where({ stock_symbol: symbol })
    .first()
    
}

module.exports = {
getStonks,
getStonkByName,
getStonkBySymbol
}
