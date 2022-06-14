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
                    <Navbar.Collapse id="responsive-navbar-nav me-auto">
                        <Nav> 
                            <Nav.Link href='/'>Home</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link href='/Grid1'>Grid 1</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link href='/Grid2'>Grid 2</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link href='/Grid3'>Grid 3</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link href='/Grid4'>Grid 4</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link href='/Grid5'>Grid 5</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link href='/Grid6'>Grid 6</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link href='/Grid7'>Grid 7</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link href='/Grid8'>Grid 8</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link href='/Grid9'>Grid 9</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>      
                </Container>
            </Navbar>             
        </div>
       
    );
}

export default NavbarComponent;