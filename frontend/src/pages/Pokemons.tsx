import * as React from 'react'
import { useState, useEffect } from 'react'
import { getPokemonByName, useGetPokemonsQuery } from '../services/pokemonApi'
import { Pokemon } from '../typescript/types'
import Card from '../components/pokemons/Card'

import '../styles/pokemons.css'

const Pokemons: React.FC = () => {
  const { data } = useGetPokemonsQuery('')
  const [pokemonsListArray, setPokemonsListArray] = useState<Pokemon[][]>([])
  const [isHidden, setIsHidden] = useState<boolean[]>([false])

  useEffect(() => {
    if (data) {
      const getPokemons = async () => {
        let start = 0
        let end = 20
        const pokemonList: Pokemon[][] = []
        const hidden: [boolean] = [false]
        const pokemons = await Promise.all(
          data.results.map((value) => getPokemonByName(value.name))
        )

        while (start < pokemons.length) {
          pokemonList.push(pokemons.slice(start, end))
          hidden.push(true)
          start = end
          end = end + 20
        }

        setPokemonsListArray(pokemonList)
        setIsHidden(hidden)
      }

      getPokemons()
    }
  }, [data])

  const handleClickPagination = (positon: number) => {
    setIsHidden((prevState) =>
      prevState.map((value, index) => {
        if (index === positon) return !value
        return true
      })
    )
  }

  return (
    <main className='container-pokemons'>
      <ol className='pagination'>
        {
          pokemonsListArray.map((value: Pokemon[], index: number) =>
            <li className='pagination__item' key={index}>
              <ul className='pagination__cards' hidden={isHidden[index]}>
                {
                  value.map((value: Pokemon) =>
                    <li className='pagination__card' key={value.id}>
                      <Card pokemon={value} />
                    </li>
                  )
                }
              </ul>

              <button
                className='pagination__index'
                onClick={() => handleClickPagination(index)}
                disabled={!isHidden[index]}
              >
                {index}
              </button>
            </li>
          )
        }
      </ol>
    </main>
  )
}

export default Pokemons
