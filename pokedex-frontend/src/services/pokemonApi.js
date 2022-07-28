const URL = 'https://pokeapi.co/api/v2/pokemon/'

export function getPokemonDetails(name) {
  return fetch(`${URL}${name}`)
    .then(data => data.json())
}
