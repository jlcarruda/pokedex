const statsMapper = (stats) => stats
  .reduce((prev, { base_stat, stat }) => ([
    ...prev,
    { name: stat.name, value: base_stat }
  ]), [])

module.exports = statsMapper
