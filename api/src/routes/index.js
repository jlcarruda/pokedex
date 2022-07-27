const { Router } = require('express')
const pokemonRouter = require('./pokemon.route')

module.exports = Router().use(pokemonRouter)
