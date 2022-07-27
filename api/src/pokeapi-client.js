const axios = require('axios')

const API_URL = "https://pokeapi.co/api/v2"

const client = axios.create({
  baseURL: API_URL
})

async function getPokemon(name) {
  const { data } = await client.get(`/pokemon/${name}`);
  return data
}

async function getPokemonAbilities(name) {
  console.log(`Recebendo nome ${name}`)
  const response = await getPokemon(name);
  return response.abilities.map(i => i.ability.name)
}

module.exports = {
  getPokemon,
  getPokemonAbilities
}
