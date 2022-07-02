import * as React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Pokemons from '../components/pokemons/Pokemons'
import { getPokemonByName, getPokemonsByType } from '../services/pokemonApi'
import { Pokemon } from '../typescript/types'

const PokemonsTypePage: React.FC = () => {
  const { name } = useParams()
  const [pokemonsType, setPokemonsType] = useState<Pokemon[]>([])

  useEffect(() => {
    if (name) {
      const getPokemons = async () => {
        const data = await getPokemonsByType(name)
        const type: Pokemon[] = await Promise.all(
          data.map((value) => getPokemonByName(value.pokemon.name))
        )

        setPokemonsType(type)
      }

      getPokemons()
    }
  }, [name])

  return (
    <Pokemons pokemonsArray={pokemonsType} />
  )
}

export default PokemonsTypePage
