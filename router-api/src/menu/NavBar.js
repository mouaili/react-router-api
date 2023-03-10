import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../logo.svg';

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">
        <img src={logo} alt="logo react" width="50" />
        React
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <NavLink className="nav-link" to="/">
              Docs
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/community">
              Communauté
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/tutorial">
              Tutoriel
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
