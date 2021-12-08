exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('favourite_stonks').del()
}
