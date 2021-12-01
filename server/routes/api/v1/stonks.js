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

// TODO: use actual db function to get stonk by name
router.get('/name/:name', (req, res) => {
  const name = req.params.name
  db.getStonksByName(name)
    .then(stonks => {
      return res.json(stonks)
    })
    .catch(err => {
      console.log(err)
      res.status(500).send('There was an error')
    })
})

// TODO: use actual db function to get stonk by symbol
router.get('/symbol/:symbol', (req, res) => {
  const symbol = req.params.symbol
  db.getStonkBySymbol(symbol)
    .then(stonk => res.json(stonk))
    .catch(err => {
      console.log(err)
      res.status(500).send('There was an error')
    })
})

module.exports = router
