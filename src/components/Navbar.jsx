import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src="/logo.png" alt="VoyagAI Logo" className="logo" />
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/main">Explore</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
