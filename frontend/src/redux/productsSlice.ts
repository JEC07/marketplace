import { createEntityAdapter, createSlice } from '@reduxjs/toolkit'
import { Pokemon } from '../typescript/types'
import { RootState } from '../app/store'

const productsAdapter = createEntityAdapter<Pokemon>()

export const productsSlice = createSlice({
  name: 'products',
  initialState: productsAdapter.getInitialState(),
  reducers: {
    addOneProduct: productsAdapter.addOne,
    removeOneProductByID: productsAdapter.removeOne,
    removeAllProducts: productsAdapter.removeAll
  }
})

export default productsSlice.reducer
export const { addOneProduct, removeOneProductByID, removeAllProducts } = productsSlice.actions
export const {
  selectAll: selectAllProducts,
  selectById: selectProductById,
  selectTotal: selectProductLength
} = productsAdapter.getSelectors<RootState>((state) => state.products)
