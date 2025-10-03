import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../../assets/logo.png';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Nexcent Logo" />
        <span>Nexcent</span>
      </div>
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/features">Features</Link>
        <Link to="/community">Community</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/pricing">Pricing</Link>
        <Link to="/">
          <button className="navbar-register">Register Now →</button>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;