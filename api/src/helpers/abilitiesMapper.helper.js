const abilitiesMapper = (abilities) => abilities
  .reduce((prev, { ability: { name, ...ability }, is_hidden }) => ({
    ...prev, [name]: {
      ...ability,
      hidden: is_hidden,
    }
  }), {})

module.exports = abilitiesMapper
