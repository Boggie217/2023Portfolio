import React from 'react';
import './navBar.css'; // Import your CSS for styling

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item"><a href="/">HOME</a></li>
        <li className="navbar-item"><a href="/about">ABOUT</a></li>
        <li className="navbar-item"><a href="/contact">CONTACT</a></li>
        <li className="navbar-item"><a href="/projects">PROJECTS</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;