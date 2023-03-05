import React from 'react'
import { Outlet, NavLink } from "react-router-dom";
import LOGO from "../../assets/images/LOGO.png"
import './navbar.css';

const Navbar = () => {
  return (
    <div className='kasa__navbar kasa__mobile'>
      <div className='kasa__navbar-links'>
        <div className='kasa__navbar-links_logo'>
          <img src={LOGO} alt="logo" />
        </div>
          {/* <p><a href='#home' className=' underline'>Accueil</a></p>
          <p><a href='#about'>A propos</a></p> */}
          <nav >
            <ul className='kasa_navbar-links_container font50012 kasa__mobile '>
              <li>
                <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Accueil</NavLink>
              </li>
              <li>
                <NavLink to="/about">A propos</NavLink>
              </li>
            </ul>
          </nav>

        <Outlet />
      </div>
    </div>
    
  )
}

export default Navbar