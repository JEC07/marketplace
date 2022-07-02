import * as React from 'react'
import { useGetPokemonsAbilitiesQuery } from '../../services/pokemonApi'
import Items from './Items'

const Abilities: React.FC = () => {
  const { data, isLoading } = useGetPokemonsAbilitiesQuery()

  if (isLoading) {
    return (
      <div>Loading...</div>
    )
  }

  return (
    <Items data={data.results} name="ability" />
  )
}

export default Abilities
