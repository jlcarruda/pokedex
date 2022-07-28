const axios = require('axios')
const PokeApiClient = require('../../src/services/pokeapi-client')
const { getPokemonSuccessMock, getPokemonErrorMock } = require('../mocks/services/pokeapi-client.mock')

const clientMock = {
  get: jest.fn()
}

describe('Poke API Client Unit Testing', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  describe('Success Cases', () => {
    describe('.getPokemon function', () => {

      it('should return successfully a pokemon', async () => {
        clientMock.get.mockResolvedValue(getPokemonSuccessMock)
        const client = new PokeApiClient(clientMock)
        const response = await client.getPokemon('pikachu')

        expect(response).toBeDefined();
        expect(clientMock.get).toBeCalled();
      })
    })

    describe('.getPokemonAbilitiesNames function', () => {
      it('should return successfully the abilities of the fetched pokemon', async () => {
        clientMock.get.mockResolvedValue(getPokemonSuccessMock)
        const client = new PokeApiClient(clientMock)
        const response = await client.getPokemonAbilitiesNames('pikachu')

        expect(response).toBeDefined()
        expect(Array.isArray(response)).toBeTruthy();
        expect(response.length).toBe(2)
        expect(response).toStrictEqual(["limber", "imposter"].sort())
        expect(clientMock.get).toBeCalled()
      })
    })
  })

  describe('Error Cases', () => {
    describe('.getPokemon function', () => {
      it('should throw error if service rejects with 404', async () => {
        clientMock.get.mockRejectedValue(getPokemonErrorMock)
        const client = new PokeApiClient(clientMock)
        let errorCatched;
        try {
          await client.getPokemon('pikachu')
        } catch (err) {
          errorCatched = err
        }

        expect(errorCatched).toBeDefined();
        expect(clientMock.get).toBeCalled();
      })
    })

    describe('.getPokemonAbilitiesNames function', () => {
      it('should throw error if service rejects with 404', async () => {
        clientMock.get.mockRejectedValue(getPokemonErrorMock)
        const client = new PokeApiClient(clientMock)
        let errorCatched;
        try {
          await client.getPokemonAbilitiesNames('pikachu')
        } catch (err) {
          errorCatched = err
        }

        expect(errorCatched).toBeDefined();
        expect(clientMock.get).toBeCalled();
      })
    })
  })
})
