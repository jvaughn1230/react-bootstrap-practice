import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
//import { Container, Row, Col, Nav } from 'react-bootstrap';



function App() {
  return (
    <Navbar bg="dark" variant="dark" sticky="top" expand="sm" collapseOnSelect>
      <Navbar.Brand href="#">
        Bootstrap Grids
      </Navbar.Brand>
      <Navbar.Toggle></Navbar.Toggle>
      <Navbar.Collapse>
        <Nav>
          <Nav.Link href='Grid1'>Grid 1</Nav.Link>
          <Nav.Link href='Grid2'>Grid 2</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default App;
