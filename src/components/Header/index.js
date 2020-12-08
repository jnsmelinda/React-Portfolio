import React from "react";
import { Link } from "react-scroll";
import './index.css';

function Header() {
  return (
    <div>
      <nav className="navbar navbar-light bg-light">
        <Link to="home" className="logo">MI</Link>
        <ul>
          <li><Link to="intro" id="link" smooth={true}>Home</Link></li>
          <li><Link to="contact" id="link" smooth={true}>Contact</Link></li>
          <li><Link to="projects" id="link" smooth={true}>Projects</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
