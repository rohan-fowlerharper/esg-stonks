const connection = require('./connection')

function getUsers (db = connection) {
  return db('users').select()
}

function getUserById (id, db = connection) {
  return db('users')
    .where({ id })
    .first()
}

function createUser (user, db = connection) {
  const { userName, name, email, password, picture } = user
  return db('users')
    .insert({
      nickname: userName,
      name,
      email,
      password,
      picture
    })
    .then(([id]) => getUserById(id, db))
}

function updateUser (id, user, db = connection) {
  const { userName, email, password, picture } = user
  return db('users')
    .where({ id })
    .update({
      nickname: userName,
      email,
      password,
      picture
    })
}

function deleteUser (id, db = connection) {
  return db('users')
    .where({ id })
    .del()
}

module.exports = {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser
}
