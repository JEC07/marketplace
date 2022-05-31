import * as React from 'react'
import { useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { addOneProduct, selectProductById } from '../../redux/productsSlice'
import { useCarousel } from '../../hooks/useCarousel'
import { Pokemon } from '../../typescript/types'
import { getPokemonsByAbility } from '../../services/pokemonApi'

import addCart from '../../assets/add_to_cart.svg'
import addedCart from '../../assets/added_to_cart.svg'
import '../../styles/card.css'

interface Props {
  pokemon : Pokemon
}

const Card: React.FC<Props> = ({ pokemon }: Props) => {
  const [abilitySummary, setAbilitySummary] = useState<string>('')
  const [detailsIsOpen, setDetailsIsOpen] = useState<boolean[]>(Array(pokemon.abilities.length).fill(false))
  const imgPokemon: string = pokemon.sprites.other.dream_world.front_default ?? pokemon.sprites.other['official-artwork'].front_default
  const {
    position,
    increase,
    decrease
  } = useCarousel(3)
  const dispatch = useAppDispatch()
  const pokemonIsAdded = useAppSelector((state) => selectProductById(state, pokemon.id))

  const handleAbilityClick = async (ability: string, position: number) => {
    const data = await getPokemonsByAbility(ability)

    for (const element of data.effect_entries) {
      if (element.language.name === 'en') setAbilitySummary(element.effect)
    }

    setDetailsIsOpen((prevState) => {
      return prevState.map((value: boolean, index: number) => {
        if (index === position) return !value
        return false
      })
    })
  }

  const handleBtnClick = (type: string) => {
    if (type === 'prev') decrease()
    if (type === 'next') increase()
  }

  const handleImgShoppingCartClick = (pokemon: Pokemon) => {
    dispatch(addOneProduct(pokemon))
  }

  return (
    <div className='card'>
      <div className='card__front' hidden={position !== 0}>
        <h2 className='card__title'>{pokemon.name}</h2>
        <img
          className='card__img'
          src={imgPokemon}
          alt={pokemon.name}
        />
        <div className='card__types'>
          {
            pokemon.types.map((value, index) =>
              <div key={index}>{value.type.name}</div>
            )
          }
        </div>
      </div>

      <div className='card__back' hidden={position !== 1}>
        <h3 className='card__stats'>Stats</h3>
        <div>
          {
            pokemon.stats.map((value, index) =>
              <div key={index}>
                <span>{value.stat.name}: </span>
                <span>{value.base_stat}</span>
              </div>
            )
          }
        </div>
      </div>

      <div className='card__back' hidden={position !== 2}>
        <h3>Ability</h3>
          {
            pokemon.abilities.map((value, index: number) =>
              <details key={index} open={detailsIsOpen[index]}>
                <summary onClick={() => handleAbilityClick(value.ability.name, index)}>
                  {value.ability.name}
                </summary>
                {abilitySummary}
              </details>
            )
          }
      </div>

      <button className='btn-prev' onClick={() => handleBtnClick('prev')}>{'<'}</button>
      <button className='btn-next' onClick={() => handleBtnClick('next')}>{'>'}</button>

      <div className='card__price'>
        <span>$ {pokemon.base_experience * 10},00</span>
        <img
          src={pokemonIsAdded ? addedCart : addCart}
          alt="cart-icon"
          onClick={() => handleImgShoppingCartClick(pokemon)}
        />
      </div>
    </div>
  )
}

export default Card
