const jwt = require('express-jwt')
const jwks = require('jwks-rsa')
require('dotenv').config()

const tenantUrl = process.env.AUTH0_TENANT_URL
const audienceUrl = process.env.AUTH0_AUDIENCE_URL

const checkJwt = jwt({
  secret: jwks.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `${tenantUrl}/.well-known/jwks.json`
  }),
  audience: audienceUrl,
  issuer: `${tenantUrl}/`,
  algorithms: ['RS256']
})

module.exports = checkJwt
