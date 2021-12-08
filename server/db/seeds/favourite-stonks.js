exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('favourite_stonks').del()
    .then(function () {
      // Inserts seed entries
      return knex('favourite_stonks').insert([
        { id: 1, user_id: 'auth0|619abd1de3a44d00699e917d', stonk_id: 6 },
        { id: 2, user_id: 'auth0|619abd1de3a44d00699e917d', stonk_id: 2 },
        { id: 3, user_id: 'auth0|619abd1de3a44d00699e917d', stonk_id: 3 },
        { id: 4, user_id: 'auth0|619abd1de3a44d00699e917d', stonk_id: 4 },
        { id: 6, user_id: 'auth0 | 5678', stonk_id: 2 },
        { id: 7, user_id: 'auth0 | 5678', stonk_id: 3 }
      ])
    })
}
