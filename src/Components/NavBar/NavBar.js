import React, { useState, useEffect } from 'react';

import { NavLink, useLocation } from 'react-router-dom';

import './NavBar.scss'

export default function HUD() {

   const location = useLocation();

   const [inHome, setInHome] = useState(false);

   useEffect(() => {
      if (location.pathname === '/') {
         setInHome(true);
      } else {
         setInHome(false);
      }
   }, [location]);

   return (
      <div className='--navbar'>
         <NavLink to='/' className={inHome ? 'selected' : ''} >HOME</NavLink>
         <NavLink to='gallery' className={({isActive}) => isActive ? 'selected' : ''}>GALLERY</NavLink>
         <NavLink to='more' className={({isActive}) => isActive ? 'selected' : ''}>MORE</NavLink>
         <NavLink to='github' className={({isActive}) => isActive ? 'selected' : ''}>GITHUB</NavLink>
      </div>
   )
}
