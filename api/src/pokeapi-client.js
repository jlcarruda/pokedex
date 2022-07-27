const axios = require('axios')

const API_URL = "https://pokeapi.co/api/v2"

const client = axios.create({
  baseURL: API_URL
})

async function getPokemon(name) {
  try {
    const { data } = await client.get(`/pokemon/${name}`);
    return data
  } catch (err) {
    console.error(err)
    throw new Error(err.message)
  }
}

async function getPokemonAbilities(name) {
  try {
    console.log(`Recebendo nome ${name}`)
    const response = await getPokemon(name);
    // console.log(`Resposta: ${JSON.stringify(response.abilities)}`)
    return response.abilities.map(i => i.ability.name)
  } catch (err) {
    throw new Error(err.message)
  }
}

module.exports = {
  getPokemon,
  getPokemonAbilities
}
