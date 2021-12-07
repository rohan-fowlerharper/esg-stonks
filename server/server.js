const express = require('express')
const path = require('path')

// comment these out when you don't want to use jwt middleware
// const checkJwt = require('./util/auth')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

// server.use(checkJwt)

server.use('/api/v1/stonks', require('./routes/api/v1/stonks'))
server.use('/api/v2/users', require('./routes/api/v2/users'))

server.get('*', (req, res) => {
  res.sendFile(path.resolve('server/public/index.html'))
})

module.exports = server
