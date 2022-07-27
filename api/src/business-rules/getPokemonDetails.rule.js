const PokeApiClient = require('../services/pokeapi-client');
const formatDetails = require('../helpers/formatPokemonDetails.helper')

module.exports = async (name) => {
  const client = new PokeApiClient();

  try {
    const pokemon = await client.getPokemon(name)
    if (!pokemon) {
      return null
    }

    const details = formatDetails(pokemon)

    return details
  } catch (err) {
    throw err
  }
}
