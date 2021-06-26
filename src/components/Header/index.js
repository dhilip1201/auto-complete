import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";

/**
 * @author
 * @function Header
 **/

const Header = (props) => {
  return (
    <Navbar bg="light" expand="lg">
      <Link to="/" className="navbar-brand">
        Auto Complete Task
      </Link>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto"></Nav>
        <Nav>
          <li className="nav-item">
            <NavLink to="/cart" className="nav-link">
              Cart
            </NavLink>
          </li>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
