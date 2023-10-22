import React from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';

const Header = ({ profileAccess }) => {
  const profileLoginToggle = profileAccess ? (
    <div>
      <NavLink to={`/donation-request`} className='nav-link'>Request a Donation</NavLink>
      <NavLink to={'/profile'} className='nav-link'>🎨 Profile</NavLink>
    </div>
  ) : (
    <NavLink to={'/login-form'} className='nav-link'>Login</NavLink>
  );

  return (
    <header className='header'>
      <div className='title-wrapper'>
        <div className='title-container'>
          <h1>GearUp</h1>
        </div>
      </div>
      <div className='nav-wrapper'>
        <NavLink to={`/`} className='nav-link'>Home</NavLink>
        <NavLink to={'/community-board'} className='nav-link'>Community Board</NavLink>
          {profileLoginToggle}
      </div>
    </header>
  );
}

export default Header;



