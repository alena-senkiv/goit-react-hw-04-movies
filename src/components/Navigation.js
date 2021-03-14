import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => (
  <ul>
    <li>
      <NavLink exact to="/" className="" activeClassName="">
        Home
      </NavLink>
    </li>
    <li>
      <NavLink exact to="/movies" className="" activeClassName="">
        Movies
      </NavLink>
    </li>
  </ul>
);

export default Navigation;
