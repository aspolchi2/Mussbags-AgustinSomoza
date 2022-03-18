

import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

import CartWidget from '../CartWidget/CartWidget.js'


const NavbarBoostrap = () => {
  return (
    <Navbar bg="light" expand="lg" fixed='top'>
      <Container>
        <Navbar.Brand href="#home">Müssbags</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#bags">Bolsos</Nav.Link>
            <Nav.Link href="#purse">Carteras</Nav.Link>
            <Nav.Link href="#Sale">Sale!</Nav.Link>
            <CartWidget />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
export default NavbarBoostrap