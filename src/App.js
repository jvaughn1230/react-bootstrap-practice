import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';


import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';

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
