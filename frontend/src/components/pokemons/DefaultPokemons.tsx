import * as React from 'react'
import '../../styles/pokemons.css'
import { useState, useEffect } from 'react'
import { getPokemonByName, useGetPokemonsQuery } from '../../services/pokemonApi'
import { Pokemon } from '../../typescript/types'
import Pokemons from './Pokemons'

const DefaultPokemons: React.FC = () => {
  const { data } = useGetPokemonsQuery('')
  const [pokemons, setPokemons] = useState<Pokemon[]>([])

  useEffect(() => {
    if (data) {
      const getPokemons = async () => {
        const newPokemons: Pokemon[] = await Promise.all(
          data.results.map((value) => getPokemonByName(value.name))
        )

        setPokemons(newPokemons)
      }

      getPokemons()
    }
  }, [data])

  return (
    <Pokemons pokemonsArray={pokemons} />
  )
}

export default DefaultPokemons
