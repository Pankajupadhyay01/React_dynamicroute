import React from 'react';
import Navbar from './Component/Navbar';
import Home from './Component/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Slug from './Component/Slug';
import Form from './Component/Form';
const App = () => {
  return (
    <Router>
    <div className=''>
      <Navbar/>
      <Routes>
          <Route exact path='/' element={<Home/>}></Route>
          <Route exact path='/series/:data' element={<Slug/>}></Route>          
          <Route exact path='/form' element={<Form/>}></Route>          

        </Routes>
    </div>
    </Router>
  );
}

export default App;
