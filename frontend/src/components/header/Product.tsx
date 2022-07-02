import React from 'react'
import { Pokemon } from '../../typescript/types'

import '../../styles/product.css'

interface Props {
  products: Pokemon[]
  onRemoveClick: (id: number) => void
}

const Products: React.VFC<Props> = ({ products, onRemoveClick }: Props) => {
  return (
    <>
      {
        products.map((product: Pokemon) =>
          <div className='cart__product' key={product.id}>
            <span className='cart__title'>{product.name}:</span>
            <span className='cart__price'>$ {product.base_experience * 10},00</span>
            <span className='cart__remove' onClick={ () => onRemoveClick(product.id)}>X</span>
          </div>
        )
      }
    </>
  )
}

export default Products
