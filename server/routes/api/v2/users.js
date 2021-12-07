const express = require('express')
const checkJwt = require('../../../util/auth')
const router = express.Router()

const db = require('../../../db/users')

router.get('/', (req, res) => {
  res.send('Users')
})

module.exports = router
