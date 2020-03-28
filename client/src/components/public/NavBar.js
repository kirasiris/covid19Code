import React from 'react';
import PropTypes from 'prop-types';
// REACT-BOOTSTRAP
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

const NavBar = props => {
  return (
    <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#!">COVID19 en Mexico</Navbar.Brand>
</Navbar>
  );
};

NavBar.propTypes = {};

export default NavBar;
