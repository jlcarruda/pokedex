const { Router } = require('express')
const PokeApiClient = require('../services/pokeapi-client');

const getPokemonDetailsRule = require('../business-rules/getPokemonDetails.rule')
const getPokemonAbilitiesRule = require('../business-rules/getPokemonAbilities.rule')

const pokemonRouter = Router();

const RESOURCE = 'pokemon'

pokemonRouter.get(`/${RESOURCE}/:name`, async (request, response, next) => {
  const { name } = request.params

  try {
    const data = await getPokemonDetailsRule(name)

    response.status(200).json(
      {
        data
      }
    )
  } catch (error) {
    next(error)
  }
})

pokemonRouter.get(`/${RESOURCE}/:name/abilities`, async (request, response, next) => {
  const { name } = request.params

  try {
    const data = await getPokemonAbilitiesRule(name)

    response.status(200).json(
      {
        data
      }
    )
  } catch (error) {
    next(error)
  }
})

module.exports = pokemonRouter;
