import * as React from 'react'
import { useState, ChangeEvent, KeyboardEvent } from 'react'
import { getPokemonByName } from '../../services/pokemonApi'

import '../../styles/search.css'

const Search: React.FC = () => {
  const [pokemonName, setPokemonName] = useState<string>('')

  const handleChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setPokemonName(e.target.value.toLowerCase().trim())
  }

  const handleKeyUpSearch = async (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && pokemonName) {
      const data = await getPokemonByName(pokemonName)
      console.log(data)
    }
  }

  return (
    <div className='search'>
      <input className='search__input' type="text"
        value={pokemonName}
        onChange={handleChangeSearch}
        onKeyUp={handleKeyUpSearch}
      />
      <img className='search__icon' src="icon-search" alt="icon-search" />
    </div>
  )
}

export default Search
