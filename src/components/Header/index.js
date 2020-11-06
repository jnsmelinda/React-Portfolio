import React from "react";
import { Link } from "react-router-dom";
import './index.css';

function Header() {
  return (
    <div>
      <nav classNameName="navbar navbar-light bg-light">
        <Link to="home" classNameName="logo">MI</Link>
        <ul>
          <li><Link to="home" id="link">Home</Link></li>
          <li><Link to="contact" id="link">Contact</Link></li>
          <li><Link to="projects" id="link">Projects</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;