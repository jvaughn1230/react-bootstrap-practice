import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';


import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Home from './Routes/Home';
import Grid1 from './Routes/Grid1';

function App() {
  return (
    <div className='d-flex flex-column h-100'>
      <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Grid1' element={<Grid1 />} />
        </Routes>
      <Footer />
    </div>
    
  );
}

  export default App;
