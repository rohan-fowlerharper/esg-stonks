const express = require('express')

const router = express.Router()

const stonksDb = require('../../../db/stonks')

router.get('/', (req, res) => {
  stonksDb.getStonks()
    .then(stonks => {
      return res.json(stonks)
    })
    .catch(err => console.error(err))
})

module.exports = router
