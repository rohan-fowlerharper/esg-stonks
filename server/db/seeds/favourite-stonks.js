exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('favourite_stonks').del()
    .then(function () {
      // Inserts seed entries
      return knex('favourite_stonks').insert([
        { id: 1, user_id: 'auth0 | 1234', stonk_id: 1 },
        { id: 2, user_id: 'auth0 | 5678', stonk_id: 2 }
      ])
    })
}
