import * as React from 'react'
import { useState, useEffect } from 'react'
import { Pokemon } from '../../typescript/types'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { removeAllProducts, removeOneProductByID, selectAllProducts } from '../../redux/productsSlice'
import Product from './Product'

import shoppingCart from '../../assets/shopping_cart.svg'
import shoppingCartNotification from '../../assets/shopping_cart_notification.svg'
import '../../styles/cart.css'

interface ProductList {
  id: number
  pokemons: Pokemon[]
}

const Cart: React.FC = () => {
  const pokemonsProducts: Pokemon[] = useAppSelector(selectAllProducts)
  const dispatch = useAppDispatch()

  const [productsListIsHidden, setProductsListIsHidden] = useState<boolean[]>([false])
  const productList: ProductList[] = []
  let pokemons: Pokemon[] = []
  let position: number = 0
  let total: number = 0
  let id: number = 0

  pokemonsProducts.forEach((value: Pokemon, index: number, array: Pokemon[]) => {
    pokemons.push(value)

    if (position === 4 || (array.length - 1) === index) {
      productList.push({
        id,
        pokemons
      })

      position = -1
      pokemons = []
      id++
    }

    position++
    total = (value.base_experience * 10) + total
  })

  useEffect(() => {
    if (productList.length >= 2) setProductsListIsHidden((prevState) => [...prevState, true])
  }, [productList.length])

  const handleRemoveClick = (id: number) => {
    dispatch(removeOneProductByID(id))
  }

  const handleRemoveAllClick = () => {
    dispatch(removeAllProducts())
  }

  const handleBtnClick = (idIndex: number) => {
    setProductsListIsHidden(
      productsListIsHidden.map((value: boolean, index: number) => {
        if (idIndex === index) return !value
        return true
      })
    )
  }

  return (
    <div className='cart'>
      <div className='cart__icon'>
        <img
          src={pokemonsProducts.length > 0 ? shoppingCartNotification : shoppingCart}
          alt="shoppingCartIcon"
        />
        <span hidden={pokemonsProducts.length <= 0}>{pokemonsProducts.length}</span>
      </div>

      <div className='cart__products'>
        {
          productList.map((value: ProductList) =>
            <div
              className='cart__product-list'
              key={value.id}
              hidden={productsListIsHidden[value.id]}
            >
              {
                <Product products={value.pokemons} onRemoveClick={handleRemoveClick} />
              }
            </div>
          )
        }

        <div className='cart__total'>
          <span className='cart__title'>Total:</span>
          <span className='cart__price'>$ {total},00</span>
        </div>

        <div className='cart__circle' hidden={pokemonsProducts.length <= 0}>
          {
            productList.map((value: ProductList) =>
              <button
                className='cart__circle-btn'
                key={value.id}
                onClick={() => handleBtnClick(value.id)}
                disabled={!productsListIsHidden[value.id]}
              />
            )
          }
        </div>

        <div className='cart__btn'>
          <button className='cart__btn-buy'>Buy</button>
          <button className='cart__btn-cancel' onClick={handleRemoveAllClick}>Cancel All</button>
        </div>
      </div>
    </div>
  )
}

export default Cart
