import React, { useState } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className='navbar'>
        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          {/* <img src="/MIL_logo_sml.jpg"/>  full logo with name*/}
          <img src="/MIL_small transparent.png"/>
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/subjugator'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Subjugator
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/navigator'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Navigator
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/media'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Media
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/sponsors'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Sponsors
            </Link>
          </li>
          <li>
            <Link
              to='/sign-up'
              className='nav-links-mobile'
              onClick={closeMobileMenu}
            >
              Donate
            </Link>
          </li>
        </ul>
        <Button />
      </nav>
    </>
  );
}

export default Navbar;
