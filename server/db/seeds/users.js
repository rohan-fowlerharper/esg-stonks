exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          id: 1,
          nickname: 'dantheman',
          name: 'Dan Mannering',
          email: 'dantheman@gmail.com',
          password: 'abcd1234',
          picture: 'https://somepicture.com'
        }
      ])
    })
}
