import React from 'react';
import { NavLink } from 'react-router-dom';
import '../App.css';
const Nav = (props) => {
  let logoutLink = null;
  if (props.isLoggedIn) {
    logoutLink = (
      <li>
        <NavLink to="/logout" activeClassName="active">Logout</NavLink>
      </li>
    );
  }

  return (
    <nav>

      <ul>

        <li>
          <NavLink  exact to="/" activeClassName="active">OG Salon</NavLink>
        </li>

        <li>
          <NavLink  exact to="/" activeClassName="active">Home</NavLink>
        </li>
        <li>
          <NavLink to="/services" activeClassName="active">Services</NavLink>
        </li>
        <li>
          <NavLink to="/book" activeClassName="active">Book Appointment</NavLink>
        </li>
       
        <li>
          <NavLink to="/login" activeClassName="active">Login</NavLink>
        </li>
        <li>
          <NavLink to="/register" activeClassName="active">Register</NavLink>
        </li>
        {logoutLink}
        </ul>
    </nav>
  );
};

export default Nav;