import * as React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Pokemons from '../components/pokemons/Pokemons'
import { getPokemonByName, getPokemonsByAbility } from '../services/pokemonApi'
import { Pokemon } from '../typescript/types'

const PokemonsAbilityPage: React.FC = () => {
  const { name } = useParams()
  const [pokemonsAbility, setPokemonsAbility] = useState<Pokemon[]>([])

  useEffect(() => {
    if (name) {
      const getPokemons = async () => {
        const data = await getPokemonsByAbility(name)
        const type: Pokemon[] = await Promise.all(
          data.map((value) => getPokemonByName(value.pokemon.name))
        )

        setPokemonsAbility(type)
      }

      getPokemons()
    }
  }, [name])

  return (
    <Pokemons pokemonsArray={pokemonsAbility} />
  )
}

export default PokemonsAbilityPage
