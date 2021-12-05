const jwt = require('express-jwt')
const jwks = require('jwks-rsa')

// I would extract core variables into a .env file so the app can be configured without making a commit
const checkJwt = jwt({
  secret: jwks.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: 'https://aihe-2021-rohan.au.auth0.com/.well-known/jwks.json'
  }),
  audience: 'https://esg-stonks/users',
  issuer: 'https://aihe-2021-rohan.au.auth0.com/',
  algorithms: ['RS256']
})

module.exports = checkJwt
