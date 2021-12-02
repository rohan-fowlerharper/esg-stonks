const request = require('superagent')

require('dotenv').config()

const esgApiKey = process.env.ESG_API_KEY
const esgApiHost = process.env.ESG_API_HOST
const esgApiUrl = process.env.ESG_API_URL

async function fetchGoalsByStockSymbol (stockSymbol) {
  const response = await request
    .get(`${esgApiUrl}/goals/search`)
    .query({
      q: `${stockSymbol}`
    })
    .set('x-rapidapi-key', `${esgApiKey}`)
    .set('x-rapidapi-host', `${esgApiHost}`)
  return response.body[0].goals
}

module.exports = {
  fetchGoalsByStockSymbol
}
