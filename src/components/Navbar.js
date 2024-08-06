// src/components/Navbar.js
import React from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import Logo from '../assets/hotel-logo.png'

function MyNavbar() {
  return (
    <>
    <div className='bg-warning'>
    <div className='container top-bar d-flex justify-content-between align-items-center py-2'>
        <div className='top-bar-left d-flex'>
            <a href='mailto:jgpjagadeesh@gmail.com' className=' d-flex align-items-center mx-2 text-decoration-none text-white'>
            <i className="bi bi-envelope me-2"></i>
            <p className='mb-0 d-md-block d-none'>jgpjagadeesh@gmail.com</p>
            </a>
            <p className='text-white mx-2 mb-0'>|</p>
            <a href='tel:9491526834' className=' d-flex align-items-center mx-2 text-decoration-none text-white'>
            <i className="bi bi-telephone me-2"></i>
            <p className='mb-0 d-md-block d-none'>+91 9491526834</p>
            </a>
        </div>
        <div className='top-bar-right '>
            <a href='#' className='me-3 text-white'>
            <i class="bi bi-facebook "></i>
            </a>
            <a href='#' className='me-3 text-white'>
            <i class="bi bi-twitter "></i>
            </a>
            <a href='#' className='me-3 text-white'>
            <i class="bi bi-instagram "></i>
            </a>
            <a href='#' className='me-3 text-white'>
            <i class="bi bi-linkedin "></i>
            </a>
        </div>
    </div>
    </div>
    <Navbar bg="white" className='shadow-sm' expand="lg">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>
            <img src={Logo} className='w-35' alt='Logo' />
            
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <LinkContainer to="/" className=''>
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/about" className=''>
              <Nav.Link>About</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/contact" className=''>
              <Nav.Link>Contact</Nav.Link>
            </LinkContainer>
            {/* <NavDropdown title="More" id="basic-nav-dropdown">
              <LinkContainer to="/option1">
                <NavDropdown.Item>Option 1</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/option2">
                <NavDropdown.Item>Option 2</NavDropdown.Item>
              </LinkContainer>
              <NavDropdown.Divider />
              <LinkContainer to="/separated-link">
                <NavDropdown.Item>Separated Link</NavDropdown.Item>
              </LinkContainer>
            </NavDropdown> */}
            <input type='button' className='btn btn-warning text-white px-3 rounded ms-2' value="Explore" />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}

export default MyNavbar;
