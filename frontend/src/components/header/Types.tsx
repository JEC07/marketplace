import * as React from 'react'
import { useGetPokemonsTypesQuery } from '../../services/pokemonApi'
import Items from './Items'

const Types: React.FC = () => {
  const { data, isLoading } = useGetPokemonsTypesQuery()

  if (isLoading) {
    return (
      <div>Loading...</div>
    )
  }

  return (
    <Items data={data.results} name="type"/>
  )
}

export default Types
