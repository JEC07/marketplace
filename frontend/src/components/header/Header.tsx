import * as React from 'react'

import Cart from './Cart'
import Nav from './Nav'
import Search from './Search'

import '../../styles/header.css'
import { Outlet } from 'react-router-dom'
import Footer from '../footer/Footer'

const Header: React.FC = () => {
  return (
    <>
      <header className='container-header'>
        <img className='logo' src="logo" alt="logo" />
        <Search/>
        <Cart />
        <div className='login'>
          <h2>Log In</h2>
          <h2>Register</h2>
        </div>
        <Nav/>
      </header>
      <Outlet />
      <Footer />
    </>
  )
}

export default Header
