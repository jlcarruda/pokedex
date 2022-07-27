const statsMapper = require('../../src/helpers/statsMapper.helper')

const statsMock = [
  {
    base_stat: 1,
    stat: {
      name: 'stat_1',
    }
  },
  {
    base_stat: 2,
    stat: {
      name: 'stat_2',
    }
  }
]

describe('StatsMapper Helper Unit Testing', () => {
  it('should map correctly the stats from a pokemon', () => {
    const formatted = statsMapper(statsMock)

    expect(Object.keys(formatted).sort()).toStrictEqual(['stat_1', 'stat_2'].sort())
    expect(Object.values(formatted).sort()).toStrictEqual([1, 2].sort())
  })
})
