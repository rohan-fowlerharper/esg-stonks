exports.up = function (knex) {
  return knex.schema.createTable('users', t => {
    t.increments('id')
    t.string('nickname').notNullable().unique()
    t.string('name')
    t.string('email')
    t.string('password')
    t.string('picture')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('users')
}
