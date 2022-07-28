import React from 'react'
import '../styles/card.css'

export default function PokemonCard(props) {
  const { abilities, id, name, weight, height, types, stats, image } = props?.detail
  return (
    <div className='cardWrapper container'>
      {/* <ul> */}
      <div className='card'>
        <div className='row justify-content-center'>
          <div className='col-md'>
            <h4 className="nameLabel">{name.charAt(0).toUpperCase() + name.slice(1)} (#{id})</h4>
            <label className="types">{types}</label>
            <div className='statsCard'>
              {stats.map(stat =>
                (<label className="status">{stat.name.toUpperCase()} : <span className='statusValue'>{stat.value}</span></label>)
              )}
            </div>
          </div>
          <div className='col-sm align-content-center'>
            <div className="card text-center">
              <img src={image} className="pokemonPicture" alt="" />
              <label className="sizeValue">Peso: {weight} </label>
              <label className="sizeValue">Altura: {height} </label>
            </div>
          </div>

        </div>

        <div className='row movesAbilities'>
          <div className='col-sm text-center'>
            <label>Habilidades</label>
            <div className='movementsCard'>
              {Object.keys(abilities).map(ability =>
              (
                <div ref={abilities[ability].link} >{ability.split('-').map(name => name.charAt(0).toUpperCase() + name.slice(1)).join(' ')}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* </ul> */}
    </div >
  )
}

