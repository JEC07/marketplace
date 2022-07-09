import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getPokemonByName } from '../services/pokemonApi'
import { Pokemon } from '../typescript/types'
import Card from '../components/pokemons/Card'

import notFound from '../assets/not_found.jpg'
import '../styles/pokemonSearchPage.css'

const PokemonSearchPage: React.FC = () => {
  const { pokemonName } = useParams()
  const [pokemon, setPokemon] = useState<Pokemon>()

  useEffect(() => {
    if (pokemonName) {
      const getPokemon = async () => {
        const data = await getPokemonByName(pokemonName)

        setPokemon(data)
      }

      getPokemon()
    }
  }, [pokemonName])

  return (
    <>
      { pokemon
        ? <div className='search-card'>
            <Card pokemon={pokemon} />
          </div>
        : <div className='search-not-found'>
            <p className='search-not-found__text'>
              Sorry! We could not find <span className='search-not-found__span'>{pokemonName}</span>
            </p>
            <img className='search-not-found__img' src={notFound} alt="not-found" />
          </div>
      }
    </>
  )
}

export default PokemonSearchPage
