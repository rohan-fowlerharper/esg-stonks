import request from 'superagent'

const stonksUrl = '/api/v1/stonks'

export function getStonks () {
  return request
    .get(`${stonksUrl}`)
    .then(res => res.body)
}
