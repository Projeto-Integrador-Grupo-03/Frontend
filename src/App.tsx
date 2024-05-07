import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer/Footer'
import Navbar from './components/NavBar/NavBar'
import Home from './paginas/home/Home'
import Login from './paginas/login/Login';
import Sobre from './paginas/sobre/Sobre';

function App() {
  return (
    <>
        <BrowserRouter>
          <Navbar />
          <div className='min-h-[80vh]'>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/sobre" element={<Sobre />} />
              <Route path="/home" element={<Home />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
    </>
  );
}
export default App;
