import * as React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/footer/Footer'

const HomePage: React.FC = () => {
  return (
    <>
      <h1>Esto es el Home</h1>
      <Link to='/pokemons' > pokemons </Link>
      <Footer />
    </>
  )
}

export default HomePage
