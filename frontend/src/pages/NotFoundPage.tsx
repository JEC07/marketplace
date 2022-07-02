import * as React from 'react'
import { Link, Outlet } from 'react-router-dom'

const NotFoundPage: React.FC = () => {
  return (
    <h1>
      Error 404
      <Link to="/pokemons" > pokemons </Link>
      <Outlet />
    </h1>
  )
}

export default NotFoundPage
