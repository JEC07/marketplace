import * as React from 'react'
import { NavLink } from 'react-router-dom'

interface Props {
  data: []
  name: string
}

const Items: React.FC<Props> = ({ data, name }: Props) => {
  return (
    <ul className='items__list'>
      {
        data.map((value: any, index: number) =>
          <li
            key={index}
          >
            <NavLink
              className={({ isActive }) => isActive ? 'activeAbility' : undefined}
              to={`${name}/${value.name}`}
              key={index}
            >
              {value.name}
            </NavLink>
          </li>
        )
      }
    </ul>
  )
}

export default Items
