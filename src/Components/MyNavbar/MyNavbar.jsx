
import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../MyNavbar/MyNavbar.css'
import Logo from '../../Img/logo.png'
import { Link } from "react-router-dom";

const MyNavbar = () => {
    return(
        <Navbar expand="lg" className="navBar">
        <Container>
          <Navbar.Brand href="#home"><img src={Logo} alt="" className='logoNav' /> Mi Aula de Música</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Inicio</Nav.Link>
              <Nav.Link href="/Teoria">Teoria Musical</Nav.Link>
              <Nav.Link href="/Libros">Libros</Nav.Link>
              <Nav.Link href="/Cancioneros">Cancioneros</Nav.Link>
              {/* <NavDropdown title="Mas..." id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Iniciar Sesion</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}

export { MyNavbar }