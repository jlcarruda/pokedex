const axios = require('axios')

const API_URL = "https://pokeapi.co/api/v2"

const defaultClient = axios.create({
  baseURL: API_URL
})

class PokeAPIClient {
  constructor(client) {
    if (!client) {
      this.client = defaultClient
    } else {
      this.client = client
    }
  }

  async getPokemon(name) {
    const { data } = await this.client.get(`/pokemon/${name}`);
    return data
  }

  async getPokemonAbilitiesNames(name) {
    const response = await this.getPokemon(name);
    return response.abilities.map(i => i.ability.name).sort()
  }

  async getPokemonAbilities(name) {
    const { data } = await this.getPokemon(name);
    
  }
}

module.exports = PokeAPIClient
