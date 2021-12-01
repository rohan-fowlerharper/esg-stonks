const connection = require('./connection')

function getStonks (db = connection) {
  return db('stonks')
    .select()
}

module.exports = {
  getStonks
}
