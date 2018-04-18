import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const NavigationBar = (props) => (
  <header className='nav-bar'>
    {props.routes.map(route =>
      <NavLink activeClassName='active' key={route.path} to={route.path}>{route.name}</NavLink>
    )}
  </header>
);

export default NavigationBar;

NavigationBar.propTypes = {
  routes: PropTypes.array,
};
