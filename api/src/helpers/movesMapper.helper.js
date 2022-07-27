const movesMapper = (moves) => moves
  .reduce((prev, m) => ({
    ...prev,
    [m.move.name]: {
      visualName: m.move.name.split('-').join(' '),
      link: m.move.url
    }
  }), {});

module.exports = movesMapper
