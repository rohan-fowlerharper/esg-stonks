const knex = require('knex')
const testConfig = require('../knexfile').test
const testDb = knex(testConfig)
const db = require('../users')

beforeAll(() => {
  return testDb.migrate.latest()
})

beforeEach(() => {
  return testDb.seed.run()
})

const testUser = {
  id: 1,
  nickname: 'dantheman',
  name: 'Dan Mannering',
  email: 'dantheman@gmail.com',
  password: 'abcd1234',
  picture: 'https://somepicture.com'
}

describe('getUsers', () => {
  it('returns a list of all users', () => {
    return db.getUsers(testDb)
      .then(users => {
        expect(users).toHaveLength(1)
        expect(users[0]).toEqual(testUser)
        return null
      })
  })
})

describe('getUserById', () => {
  it('should return the correct user', () => {
    return db.getUserById(1, testDb)
      .then(user => {
        expect(user).toEqual(testUser)
        return null
      })
  })
})

describe('createUser', () => {
  it('should add user', () => {
    console.log = jest.fn()
    const newUser = {
      userName: 'stantheman',
      name: 'Stan Mannering',
      email: 'stantheman@gmail.com',
      password: 'abcd5678',
      picture: 'https://somepicture.com'
    }
    return db.createUser(newUser, testDb)
      .then(user => {
        expect(user.id).toEqual(2)
        expect(user.nickname).toEqual(newUser.userName)
        expect(user.name).toEqual(newUser.name)
        expect(user.email).toEqual(newUser.email)
        expect(user.password).toEqual(newUser.password)
        expect(user.picture).toEqual(newUser.picture)
        return null
      })
  })
})

describe('deleteUser', () => {
  it('should delete user', () => {
    return db.deleteUser(1, testDb)
      .then(numDeleted => {
        expect(numDeleted).toEqual(1)
        return null
      })
  })
})

describe('updateUser', () => {
  it('should update user', () => {
    const id = 1
    const updatedUser = {
      userName: 'daniscool',
      email: 'test@best.rest',
      password: 'bananas'
    }
    return db.updateUser(id, updatedUser, testDb)
      .then(numUpdated => {
        expect(numUpdated).toEqual(1)
        return db.getUserById(id, testDb)
      })
      .then(user => {
        console.log(user)
        expect(user.nickname).toEqual(updatedUser.userName)
        expect(user.email).toEqual(updatedUser.email)
        expect(user.password).toEqual(updatedUser.password)
        return null
      })
  })
})
