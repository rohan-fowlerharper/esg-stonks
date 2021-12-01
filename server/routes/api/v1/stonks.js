const express = require('express')

const router = express.Router()

const db = require('../../../db/stonks')

router.get('/', (req, res) => {
  db.getStonks()
    .then(stonks => {
      return res.json(stonks)
    })
    .catch(err => {
      console.log(err)
      res.status(500).send('There was an error')
    })
})

router.get('/:symbol', (req, res) => {
  db.getStonkBySymbol(req.params.symbol)
    .then(stonk => {
      return res.json(stonk)
    })
    .catch(err => {
      console.log(err)
      res.status(500).send('There was an error')
    })
})

router.get('/:name', (req, res) => {
  db.getStonkByName(req.params.name)
    .then(stonk => {
      return res.json(stonk)
    })
    .catch(err => {
      console.log(err)
      res.status(500).send('There was an error')
    })
})

module.exports = router
