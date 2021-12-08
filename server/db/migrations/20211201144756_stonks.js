exports.up = function (knex) {
  return knex.schema.createTable('stonks', t => {
    t.increments('id').unique().primary()
    t.string('company_name')
    t.integer('esg_id').notNullable().unique()
    t.string('exchange_symbol')
    t.string('stock_symbol')
    t.string('environment_grade')
    t.string('environment_level')
    t.string('social_grade')
    t.string('social_level')
    t.string('governance_grade')
    t.string('governance_level')
    t.string('total_grade')
    t.string('total_level')
    t.string('last_processing_date')
    t.integer('environment_score')
    t.integer('social_score')
    t.integer('governance_score')
    t.integer('total')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('stonks')
}
