const abilitiesMapper = require('./abilitiesMapper.helper')
const movesMapper = require('./movesMapper.helper')
const statsMapper = require('./statsMapper.helper')

module.exports = (pokemon) => {
  const { name, id, abilities, moves, types, weight, sprites, stats, height } = pokemon

  let pokemonDetails = {
    id,
    name,
    weight,
    height,
    types: types.map(t => t.type.name.toUpperCase()).join('/'),
    stats: statsMapper(stats),
    abilities: abilitiesMapper(abilities),
    moves: movesMapper(moves)
  }

  if (sprites && sprites.other && sprites.other['official-artwork']) {
    pokemonDetails.image = sprites.other['official-artwork'].front_default
  }

  return pokemonDetails
}
