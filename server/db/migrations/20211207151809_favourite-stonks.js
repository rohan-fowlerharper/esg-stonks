exports.up = function (knex) {
  return knex.schema.createTable('favourite_stonks', t => {
    t.increments('id')
    t.text('user_id')
    t.integer('stonk_id').references('id').inTable('stonks')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('favourite_stonks')
}
