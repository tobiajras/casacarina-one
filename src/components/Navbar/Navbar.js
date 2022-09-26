import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

export const Navbar = () => {
  const [clicked, setClicked] = useState(false);

  const handleClickMenu = () => {
    setClicked(!clicked);
  };

  return (
    <header className='navbar__header'>
      <div className='navbar__parentDiv'>
        <div className='navbar__childDiv'>
          <Link to={'/'} className='navbar__logoLink'>
            <img src='/assets/logoCasaCarina.svg' alt='LogoCasaCarina' />
          </Link>
        </div>
        <div className='navbar__menuIcon' onClick={handleClickMenu}>
          <i className={clicked ? 'fas fa-times' : 'fa fa-bars'}></i>
        </div>
        <nav
          className={clicked ? 'navbar__menuList' : 'navbar__menuList close'}
        >
          <div></div>
          <NavLink
            onClick={handleClickMenu}
            className={(navData) =>
              navData.isActive
                ? 'navbar__childNavlink_active'
                : 'navbar__childNavlink'
            }
            to={'/'}
          >
            Inicio
          </NavLink>
          <NavLink
            onClick={handleClickMenu}
            className={(navData) =>
              navData.isActive
                ? 'navbar__childNavlink_active'
                : 'navbar__childNavlink'
            }
            to={'productos'}
          >
            Productos
          </NavLink>
          <NavLink
            onClick={handleClickMenu}
            className={(navData) =>
              navData.isActive
                ? 'navbar__childNavlink_active'
                : 'navbar__childNavlink'
            }
            to={'nosotros'}
          >
            Nosotros{' '}
          </NavLink>
          <NavLink
            onClick={handleClickMenu}
            className={(navData) =>
              navData.isActive
                ? 'navbar__childNavlink_active'
                : 'navbar__childNavlink'
            }
            to={'contacto'}
          >
            Contacto
          </NavLink>
        </nav>
      </div>
    </header>
  );
};
