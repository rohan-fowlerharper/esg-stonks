import request from 'superagent'

const stonksUrl = '/api/v1/stonks'

export function getStonks () {
  return request
    .get(`${stonksUrl}`)
    .then(res => res.body)
}

export function getUserStonks (token) {
  return request
    .get(`${stonksUrl}/user/stonks`)
    .set('Authorization', `Bearer ${token}`)
    .then(res => res.body)
}

export function getGoals (stockSymbol) {
  return request
    .get(`${stonksUrl}/goals/${stockSymbol}`)
    .then(res => {
      return res.body
    })
}

export function addUserStonks (stockSymbol) {
  return request
    .post(`${stonksUrl}/user/stonks`)
    .send({ stockSymbol })
    .then(res => res.body)
}
