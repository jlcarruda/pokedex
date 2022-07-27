const abilitiesMapper = require('../helpers/abilitiesMapper.helper');
const PokeApiClient = require('../services/pokeapi-client')

module.exports = async (name) => {
  const client = new PokeApiClient();

  try {
    const pokemon = await client.getPokemon(name)
    if (!pokemon) {
      return null
    }

    return abilitiesMapper(pokemon.abilities)
  } catch (err) {
    throw err
  }
}
