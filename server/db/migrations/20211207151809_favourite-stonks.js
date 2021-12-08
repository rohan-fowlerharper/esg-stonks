exports.up = function (knex) {
  return knex.schema.createTable('favourite_stonks', t => {
    t.increments('id').unique().primary()
    t.text('user_id')
    t.integer('stonk_id').notNullable().references('id').inTable('stonks').onDelete('cascade')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('favourite_stonks')
}
