const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
const router = require('./routes')
const errorHandler = require('./errorHandler')

const app = express()
const version = 'v1'

const PORT = process.env.PORT || '8080'

app.use(helmet())
app.use(cors({
  origin: 'http://localhost:3000'
}))

app.use(`/api/${version}`, router)

app.all('*', (req, res) => {
  res.status(404).send("OPS! Recurso não encontrado")
})

app.use(errorHandler)

module.exports = () => {
  app.listen(PORT, () => {
    console.log(`Server running @ port ${PORT}`)
  })
}
