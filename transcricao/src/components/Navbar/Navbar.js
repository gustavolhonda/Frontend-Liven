import React from 'react';
import { Link } from 'react-router-dom';
import HomeButton from '../HomeButton/HomeButton';
import LogoutButton from '../LogoutButton/LogoutButton';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <HomeButton />
      </div>
      <div className="navbar-right">
        <LogoutButton />
      </div>
    </nav>
  );
}

export default Navbar;
