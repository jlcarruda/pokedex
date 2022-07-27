const express = require('express')
const requestApi = require('./pokeapi-client')
const router = require('./routes')

const app = express()
const version = 'v1'
app.use(`/api/${version}`, router)

module.exports = () => {
  app.listen('8080', () => {
    console.log(`Server running @ port 80`)
  })
}
