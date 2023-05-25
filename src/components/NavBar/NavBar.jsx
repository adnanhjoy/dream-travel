import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container fluid>
                <Link className='text-decoration-none ps-4 text-black-50 fs-1 fw-bold' to='/'>DTravel</Link>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Link className='text-decoration-none ps-4 text-black-50' to='/'>Home</Link>
                        <Link className='text-decoration-none ps-4 text-black-50' to='/spot'>Spot</Link>
                        <Link className='text-decoration-none ps-4 text-black-50' to='/package'>Package</Link>
                        <Link className='text-decoration-none ps-4 text-black-50' to='/about'>About</Link>
                        <Link className='text-decoration-none ps-4 text-black-50' to='/contact'>Contact</Link>
                    </Nav>
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;