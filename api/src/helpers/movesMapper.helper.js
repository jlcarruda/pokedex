const movesMapper = (moves) => moves
  .sort((a, b) => {
    if (a.move.name > b.move.name) return 1
    if (a.move.name < b.move.name) return -1
    return 0
  })
  .reduce((prev, m) => ([
    ...prev,
    {
      name: m.move.name,
      visualName: m.move.name.split('-').join(' '),
      link: m.move.url
    }
  ]), []);

module.exports = movesMapper
