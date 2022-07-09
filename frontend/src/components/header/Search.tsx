import * as React from 'react'
import { useState, ChangeEvent, FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'

import '../../styles/search.css'
import searchIcon from '../../assets/search.png'

const Search: React.FC = () => {
  const [pokemonName, setPokemonName] = useState<string>('')
  const [activeForm, setActiveForm] = useState<boolean>(false)
  const navigate = useNavigate()

  const handleChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toLowerCase().trim()
    setPokemonName(value)

    if (value) return setActiveForm(true)
    setActiveForm(false)
  }

  const handleSubmiSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (pokemonName) navigate(`search/${pokemonName}`, { replace: true })
  }

  return (
    <form className={activeForm ? 'search-form search-form--active' : 'search-form'} onSubmit={handleSubmiSearch}>
      <input
        className='search-form__input'
        type='text'
        value={pokemonName}
        onChange={handleChangeSearch}
      />

      <button className='search-form__btn' type='submit'>
        <img className='search-form__btn-icon' src={searchIcon} alt="search-icon" />
      </button>
    </form>
  )
}

export default Search
