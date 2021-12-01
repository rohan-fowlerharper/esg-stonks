const express = require('express')
const path = require('path')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/stonks', require('./routes/api/v1/stonks'))

module.exports = server
