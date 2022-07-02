import * as React from 'react'
import { usePagination } from '../../hooks/usePagination'
import { Pokemon } from '../../typescript/types'
import Card from './Card'

interface Props {
  pokemonsArray: Pokemon[]
}

const Pokemons: React.FC<Props> = ({ pokemonsArray }: Props) => {
  const {
    array,
    changeHiddenPagination,
    hiddenPagination
  } = usePagination(pokemonsArray, 20)

  const handleClickPagination = (positon: number) => {
    changeHiddenPagination(positon)
  }

  if (array.length < 1) {
    return <h1>Loading...</h1>
  }

  return (
    <main className='container-pokemons'>
      <ol className='pagination'>
        {
          array.map((value, index) =>
            <li className='pagination__item' key={index}>
              <ul className='pagination__cards' hidden={hiddenPagination[index]}>
                {
                  value.map((value) =>
                    <li className='pagination__card' key={value.id}>
                      <Card pokemon={value} />
                    </li>
                  )
                }
              </ul>

              <button
                className='pagination__index'
                onClick={() => handleClickPagination(index)}
                disabled={!hiddenPagination[index]}
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
