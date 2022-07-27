const express = require('express')
const requestApi = require('./request-api')

const app = express()

app.use('/api')

app.get('/pokemon/:name', (req, res, next) => {
  
})


app.listen('8080')
