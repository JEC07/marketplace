import * as React from 'react'
import '../../styles/nav.css'
import { NavLink } from 'react-router-dom'
import Types from './Types'
import Abilities from './Abilities'

const Nav: React.FC = () => {
  return (
    <nav className='nav'>
      <ul className='items'>
        <li>
          <h6>Types</h6>
          <Types />
        </li>
        <li>
          <h6>Abilities</h6>
          <Abilities />
        </li>
        <li>
          <NavLink
            to="/pokemons"
          >
            Default
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
