

import React from "react";
import { Navbar,Nav,Container} from "react-bootstrap";

import CartLogo from "../CartLogo/CartLogo";


const NavbarBoostrap = () =>{
    return (
        <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home">MÜSSBAGS</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#Bolsos">Bolsos</Nav.Link>
        <Nav.Link href="#Carteras">Carteras</Nav.Link>
        <Nav.Link href="#Sale">Sale!</Nav.Link>
        <CartLogo href='#Cart'/>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    )
}
export default NavbarBoostrap