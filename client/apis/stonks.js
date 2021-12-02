import request from 'superagent'

const stonksUrl = '/api/v1/stonks'

export function getStonks () {
  return request
    .get(`${stonksUrl}`)
    .then(res => res.body)
}

export function getGoals (stockSymbol) {
  return request
    .get(`${stonksUrl}/goals/${stockSymbol}`)
    .then(res => {
      return res.body
    })
}
