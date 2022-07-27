const express = require('express')
const requestApi = require('./pokeapi-client')
const router = require('./routes')
const errorHandler = require('./errorHandler')

const app = express()
const version = 'v1'

app.use(`/api/${version}`, router)

app.all('*', (req, res) => {
  res.status(404).send("OPS! Recurso não encontrado")
})

app.use(errorHandler)

module.exports = () => {
  app.listen('8080', () => {
    console.log(`Server running @ port 80`)
  })
}
