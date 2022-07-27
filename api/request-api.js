const axios = require('axios')

const API_URL = "https://pokeapi.co/api/v2/pokemon"

const client = axios.create({
  baseURL: API_URL
})

async function getPokemonAbilities(name) {
  try {
    const response = client.get(`/${name}`);
    if (!response) {
      throw new Error("")
    }
  } catch(err) {

  }
}

exports.module = {
  getPokemonAbilities
}
