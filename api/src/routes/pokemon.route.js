const { Router } = require('express')
const PokeApiClient = require('../services/pokeapi-client');
const pokemonRouter = Router();


// pokemonRouter.use('/pokemon', (_, __, next) => next());

pokemonRouter.get('/pokemon/:name', async (request, response, next) => {
  const pokemonName = request.params.name

  try {
    const client = new PokeApiClient()
    const data = await client.getPokemonAbilities(pokemonName)

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
