const statsMapper = (stats) => stats
  .reduce((prev, { base_stat, stat }) => ({
    ...prev,
    [stat.name]: base_stat
  }), {})

module.exports = statsMapper
