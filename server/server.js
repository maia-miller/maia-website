const path = require('path')
const express = require('express')

const server = express()

// middleware
server.use(express.static(path.join(__dirname, '../public')))

// wildcard route
server.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '../public/index.html'))
})

module.exports = server
