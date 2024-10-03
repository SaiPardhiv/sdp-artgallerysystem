
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from './layout/Navbar';
import Footer from './layout/Footer';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import ExploreArts from './pages/ExploreArts'
import Registration from './pages/Registration';
import About from './pages/About';
import Purchase from './pages/Purchase';
import Participate from './pages/Participate';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path='/explore' element={<ExploreArts/>}></Route>
      <Route path='/register' element={<Registration/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/purchase' element={<Purchase/>}></Route>
      <Route path='/participate' element={<Participate/>}></Route>
      </Routes>
      <Footer/>
      
    </div>
  );
}

export default App;
