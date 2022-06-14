import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';


import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Home from './Routes/Home';
import Grid1 from './Routes/Grid1';
import Grid2 from './Routes/Grid2';
import Grid3 from './Routes/Grid3';
import Grid4 from './Routes/Grid4';
import Grid5 from './Routes/Grid5';
import Grid6 from './Routes/Grid6';
import Grid7 from './Routes/Grid7';
import Grid8 from './Routes/Grid8';
import Grid9 from './Routes/Grid9';



function App() {
  return (
    <div className='d-flex flex-column h-100'>
      <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Grid1' element={<Grid1 />} />
          <Route path='/Grid2' element={<Grid2 />} />
          <Route path='/Grid3' element={<Grid3 />} />
          <Route path='/Grid4' element={<Grid4 />} />
          <Route path='/Grid5' element={<Grid5 />} />
          <Route path='/Grid6' element={<Grid6 />} />
          <Route path='/Grid7' element={<Grid7 />} />
          <Route path='/Grid8' element={<Grid8 />} />
          <Route path='/Grid9' element={<Grid9 />} />
        </Routes>
      <Footer />
    </div>
    
  );
}

  export default App;
