import { configureStore } from '@reduxjs/toolkit'
import { pokemonApi } from '../services/pokemonApi'
import productsSlice from '../redux/productsSlice'

export const store = configureStore({
  reducer: {
    products: productsSlice,
    [pokemonApi.reducerPath]: pokemonApi.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(pokemonApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
