import * as React from 'react'
import '../styles/app.css'
import { Provider } from 'react-redux'
import { store } from '../app/store'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import LoginPage from '../pages/LoginPage'
import NotFoundPage from '../pages/NotFoundPage'
import Header from '../components/header/Header'
import DefaultPokemons from '../components/pokemons/DefaultPokemons'
import PokemonsTypePage from '../pages/PokemonsTypePage'
import PokemonsAbilityPage from '../pages/PokemonsAbiltyPage'

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/pokemons' element={<Header />} >
            <Route index element={<DefaultPokemons />} />
            <Route path='type/:name' element={<PokemonsTypePage />} />
            <Route path='ability/:name' element={<PokemonsAbilityPage />} />
          </Route>
          <Route path='/login' element={<LoginPage />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App
