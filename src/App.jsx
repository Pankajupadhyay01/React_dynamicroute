import React from 'react';
import Navbar from './Component/Navbar';
import Home from './Component/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Data from './Component/Data';
const App = () => {
  return (
    <Router>
    <div className=''>
      <Navbar/>
      <Routes>
          <Route exact path='/' element={<Home/>}></Route>
          <Route exact path='/series/:data' element={<Data/>}></Route>          

        </Routes>
    </div>
    </Router>
  );
}

export default App;
