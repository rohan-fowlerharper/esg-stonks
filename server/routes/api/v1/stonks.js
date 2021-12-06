const express = require('express')
const router = express.Router()
const db = require('../../../db/stonks')

const { fetchGoalsByStockSymbol, fetchScoresByStockSymbol } = require('../../../util/goals')

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

router.get('/symbol/:symbol', (req, res) => {
  const symbol = req.params.symbol
  db.getStonkBySymbol(symbol)
    .then(stonk => res.json(stonk))
    .catch(err => {
      console.log(err)
      res.status(500).send('There was an error')
    })
})

router.get('/goals/:stockSymbol', (req, res) => {
  // if this is still TODO then it would be good to have a brief comment about what needs doing, as it looks done to me
  // TODO
  const stockSymbol = req.params.stockSymbol
  fetchGoalsByStockSymbol(stockSymbol)
    .then(goals => {
      return res.json(goals)
    })
    .catch(err => {
      console.log(err)
      res.status(500).send('There was an error')
    })
})

router.get('/external/:stockSymbol', (req, res) => {
  const stockSymbol = req.params.stockSymbol
  fetchScoresByStockSymbol(stockSymbol)
    .then(scoresData => {
      return res.json(scoresData)
    })
    .catch(err => {
      console.log(err)
      res.status(500).send('There was an error')
    })
})

module.exports = router
