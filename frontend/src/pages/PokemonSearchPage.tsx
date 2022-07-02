import * as React from 'react'
import { useEffect } from 'react'

import { useParams } from 'react-router-dom'

const PokemonSearchPage = () => {
  const { pokemonName } = useParams()

  useEffect(() => {

  }, [pokemonName])

  return (
    <h1>eee</h1>
  )
}

export default PokemonSearchPage
