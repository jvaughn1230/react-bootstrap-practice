import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';


const NavbarComponent = () => {
    return (
        <div>
            <Navbar expand='md' bg='dark' variant='dark'>
                <Container fluid>
                    <Navbar.Brand href='#'>React Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/> {/*Needs more work here*/}
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav> 
                            <Nav.Link href='#' aria-current='page'>Home</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link href='#'>Grid 1</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link href='#'>Grid 2</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link href='#'>Grid 3</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link href='#'>Grid 4</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link href='#'>Grid 5</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>      
                </Container>
            </Navbar>             
        </div>
       
    );
}

export default NavbarComponent;