const abilitiesMapper = require('../../src/helpers/abilitiesMapper.helper')

const statsMock = [
  {
    ability: {
      name: 'ability_1',
      test: true
    },
    is_hidden: true
  },
  {
    ability: {
      name: 'ability_2',
      test: false
    },
    is_hidden: false
  }
]

describe('abilitiesMapper Helper Unit Testing', () => {
  it('should map correctly the stats from a pokemon', () => {
    const formatted = abilitiesMapper(statsMock)

    expect(Object.keys(formatted).sort()).toStrictEqual(['ability_1', 'ability_2'].sort())
    expect(formatted[statsMock[0].ability.name].hidden).toBeTruthy()
    expect(formatted[statsMock[1].ability.name].hidden).toBeFalsy()
  })
})
