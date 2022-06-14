import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';


import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';

// import Navbar from 'react-bootstrap/Navbar';
// import Nav from 'react-bootstrap/Nav'
//import { Container, Row, Col, Nav } from 'react-bootstrap';



function App() {
  return (
    <Routes>
      <Route path='/' element={<Navbar />}>
        <Route path='/' element={<Footer />} />
      </Route>
    </Routes>
  );
}

  export default App;
