import React, { useState } from 'react'
import '../styles/search.css'

import PokemonCard from './PokemonCard'
import useHttpRequest from '../hooks/useHttpRequest'

const URL = 'http://localhost:8080/api/v1/pokemon/'

export default function PokemonSearch() {
  const [query, setQuery] = useState('')
  const [name, setName] = useState('')

  const { data, loading } = useHttpRequest(`${URL}${name}`)

  const handleChange = (event) => {
    event.preventDefault()
    setQuery(event.target.value)
  }

  if (loading) return "Loading..."
  return (
    <div>
      {/* {error && <div>{`Error: ${error.message}`}</div>} */}
      <div className="searchWrapper">
        <form>
          <input
            type="search"
            id="search"
            placeholder='Procure um Pokémon...'
            onChange={handleChange}
            value={query}
          />
          <button
            type="button"
            className='submitButton btn btn-primary btn-sm'
            onClick={(e) => query && setName(query.toLowerCase()) && setQuery('')}
          >
            Procurar
          </button>
        </form>
      </div>
      {data && <PokemonCard detail={data} />}
    </div>
  )
}
